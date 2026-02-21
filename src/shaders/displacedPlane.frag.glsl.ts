export const displacedPlaneFragmentShader = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorldPos;
varying float vHeight;

uniform float uLow;
uniform float uMid;
uniform float uHigh;

uniform float uMaterialMode;
uniform sampler2D uMatcap;
uniform sampler2D uHdriMap;
uniform float uHasHdri;
uniform float uHdriIsRGBE;
uniform float uHdriIntensity;
uniform float uHdriRotation;

uniform vec3 uLiquidBaseColor;
uniform float uLiquidRoughness;
uniform float uLiquidMetalness;
uniform float uLiquidSpecular;
uniform float uLiquidFresnel;
uniform float uLiquidNormalStrength;
uniform float uLiquidEnvStrength;
uniform float uLiquidClearcoat;
uniform float uLiquidClearcoatRoughness;
uniform float uLiquidRimStrength;
uniform float uLiquidShadowStrength;

uniform vec3 uFogColor;
uniform float uFogMode;
uniform float uFogDensity;
uniform float uFogFalloff;
uniform float uFogNear;
uniform float uFogFar;
uniform float uFogAmount;
uniform float uFogHeight;
uniform float uFogHeightFalloff;

const float PI = 3.141592653589793;
const float INV_PI = 0.3183098861837907;
const float INV_TAU = 0.15915494309189535;

vec2 matcapUV(vec3 eye, vec3 normal) {
  vec3 reflected = reflect(eye, normal);
  float m = 2.8284271247461903 * sqrt(max(reflected.z + 1.0, 0.000001));
  return reflected.xy / m + 0.5;
}

vec2 dirToEquirectUv(vec3 dir) {
  vec3 d = normalize(dir);
  float u = atan(d.z, d.x) * INV_TAU + 0.5;
  float v = asin(clamp(d.y, -1.0, 1.0)) * INV_PI + 0.5;
  return vec2(fract(u), clamp(v, 0.0, 1.0));
}

vec3 decodeRgbe(vec4 rgbe) {
  float exponent = rgbe.a * 255.0 - 128.0;
  return rgbe.rgb * exp2(exponent);
}

vec3 rotateY(vec3 v, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return vec3(c * v.x - s * v.z, v.y, s * v.x + c * v.z);
}

vec3 sampleEnvironment(vec3 reflectDir) {
  vec3 rotated = rotateY(normalize(reflectDir), uHdriRotation);
  if (uHasHdri < 0.5) {
    float sky = clamp(rotated.y * 0.5 + 0.5, 0.0, 1.0);
    return mix(vec3(0.03, 0.04, 0.05), vec3(0.34, 0.37, 0.41), sky);
  }

  vec2 hdriUv = dirToEquirectUv(rotated);
  vec4 texel = texture2D(uHdriMap, hdriUv);
  vec3 color = uHdriIsRGBE > 0.5 ? decodeRgbe(texel) : texel.rgb;
  return color * uHdriIntensity;
}

vec3 shadeMatcap(vec3 normal, vec3 viewDir) {
  vec2 uv = matcapUV(-viewDir, normal);
  vec3 matcap = texture2D(uMatcap, uv).rgb;

  float hemi = normal.y * 0.5 + 0.5;
  vec3 color = matcap * (0.28 + hemi * 0.88);
  float audioTint = clamp((uLow * 0.24 + uMid * 0.56 + uHigh * 0.2), 0.0, 1.0);
  color *= mix(0.9, 1.08, audioTint);

  float rim = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.0);
  color += rim * 0.16;
  return color;
}

vec3 shadeLiquid(vec3 normal, vec3 viewDir) {
  vec3 n = normal;
  float hx = dFdx(vHeight);
  float hy = dFdy(vHeight);
  vec3 detail = normalize(n + vec3(-hx, 0.0, -hy) * uLiquidNormalStrength);

  vec3 r = reflect(-viewDir, detail);
  vec3 env = sampleEnvironment(r);

  vec3 l1 = normalize(vec3(-0.45, 0.87, 0.21));
  vec3 l2 = normalize(vec3(0.38, 0.66, -0.53));
  vec3 h1 = normalize(l1 + viewDir);
  vec3 h2 = normalize(l2 + viewDir);
  float rough = clamp(uLiquidRoughness, 0.03, 1.0);
  float glossPower = mix(220.0, 12.0, rough);

  float ndl1 = max(dot(detail, l1), 0.0);
  float ndl2 = max(dot(detail, l2), 0.0);
  float diffuse = clamp(ndl1 * 0.75 + ndl2 * 0.4 + 0.2, 0.0, 1.0);

  float spec = pow(max(dot(detail, h1), 0.0), glossPower) +
    pow(max(dot(detail, h2), 0.0), glossPower * 0.7);
  spec *= uLiquidSpecular;

  float ccRough = clamp(uLiquidClearcoatRoughness, 0.02, 1.0);
  float clearcoatPower = mix(540.0, 20.0, ccRough);
  float ccSpec = pow(max(dot(detail, h1), 0.0), clearcoatPower) +
    pow(max(dot(detail, h2), 0.0), clearcoatPower * 0.72);
  ccSpec *= uLiquidClearcoat;

  float fresnel = pow(1.0 - max(dot(viewDir, detail), 0.0), 3.2) * uLiquidFresnel;
  vec3 dielectric = uLiquidBaseColor * 0.25;
  vec3 base = mix(dielectric, env, clamp(uLiquidMetalness, 0.0, 1.0));
  vec3 color = base + env * (0.55 + fresnel) * uLiquidEnvStrength + vec3(spec + ccSpec);

  float audioPulse = clamp((uLow * 0.2 + uMid * 0.55 + uHigh * 0.25), 0.0, 1.0);
  color *= mix(1.0, diffuse, clamp(uLiquidShadowStrength, 0.0, 1.0));
  color *= mix(0.92, 1.12, audioPulse);
  float rim = pow(1.0 - max(dot(viewDir, detail), 0.0), 2.2);
  color += vec3(rim * uLiquidRimStrength);
  return color;
}

void main() {
  vec3 dx = dFdx(vWorldPos);
  vec3 dy = dFdy(vWorldPos);
  vec3 normal = normalize(cross(dx, dy));
  vec3 viewDir = normalize(cameraPosition - vWorldPos);

  vec3 shaded = uMaterialMode < 0.5
    ? shadeMatcap(normal, viewDir)
    : shadeLiquid(normal, viewDir);

  float fogDepth = length(cameraPosition - vWorldPos);
  float exp2Fog = 1.0 - exp(-uFogDensity * uFogDensity * fogDepth * fogDepth);
  float linearFog = smoothstep(max(0.0, uFogNear), max(uFogNear + 0.001, uFogFar), fogDepth);
  float fogFactor = mix(exp2Fog, linearFog, clamp(uFogMode, 0.0, 1.0));

  float falloff01 = clamp((uFogFalloff - 0.2) / 3.8, 0.0, 1.0);
  float depthCurve = mix(0.45, 2.35, falloff01);
  fogFactor = pow(clamp(fogFactor, 0.0, 1.0), depthCurve);

  float useHeightFog = step(0.0001, uFogHeightFalloff);
  float belowFogHeight = max(uFogHeight - vWorldPos.y, 0.0);
  float heightGradient = 1.0 - exp(-belowFogHeight * max(0.0001, uFogHeightFalloff));
  float heightFog = mix(0.28, 1.0, heightGradient);
  fogFactor *= mix(1.0, heightFog, useHeightFog);

  fogFactor = clamp(fogFactor * uFogAmount, 0.0, 1.0);
  vec3 color = mix(shaded, uFogColor, clamp(fogFactor, 0.0, 1.0));

  gl_FragColor = vec4(max(color, vec3(0.0)), 1.0);
}
`;
