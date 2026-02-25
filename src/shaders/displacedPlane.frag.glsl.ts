export const displacedPlaneFragmentShader = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorldPos;
varying float vHeight;

uniform float uLow;
uniform float uMid;
uniform float uHigh;
uniform float uIsFloor;
uniform vec2 uFloorHoleHalfSize;
uniform float uFloorCircleRadius;
uniform float uFloorCircleFade;
uniform float uFloorOpacity;
uniform float uMaterialMode;
uniform float uMatDiffuse;
uniform float uMatRoughness;
uniform float uMatMetalness;
uniform float uMatClearcoat;
uniform float uMatNormalStrength;
uniform sampler2D uAlbedoMap;
uniform sampler2D uRoughnessMap;
uniform sampler2D uMetalnessMap;
uniform sampler2D uClearcoatMap;
uniform sampler2D uNormalMap;
uniform sampler2D uMatcapMap;
uniform float uUseAlbedoMap;
uniform float uUseRoughnessMap;
uniform float uUseMetalnessMap;
uniform float uUseClearcoatMap;
uniform float uUseNormalMap;
uniform float uUseMatcapMap;
uniform float uMatcapBrightness;
uniform float uMatcapBlur;
uniform float uMatcapContrast;
uniform float uMatcapSaturation;
uniform vec2 uMatcapTexelSize;
uniform vec3 uKeyDir;
uniform vec3 uFillDir;
uniform float uKeyStrength;
uniform float uFillStrength;
uniform float uHemiStrength;
uniform float uDiffuseBase;
uniform vec3 uBaseColor;

const float PI = 3.14159265359;

vec3 fresnelSchlick(float cosTheta, vec3 f0) {
  return f0 + (1.0 - f0) * pow(1.0 - cosTheta, 5.0);
}

float distributionGGX(vec3 n, vec3 h, float roughness) {
  float a = roughness * roughness;
  float a2 = a * a;
  float ndh = max(dot(n, h), 0.0);
  float ndh2 = ndh * ndh;
  float denom = ndh2 * (a2 - 1.0) + 1.0;
  return a2 / max(PI * denom * denom, 0.000001);
}

float geometrySchlickGGX(float ndv, float roughness) {
  float r = roughness + 1.0;
  float k = (r * r) / 8.0;
  return ndv / max(ndv * (1.0 - k) + k, 0.000001);
}

float geometrySmith(vec3 n, vec3 v, vec3 l, float roughness) {
  float ndv = max(dot(n, v), 0.0);
  float ndl = max(dot(n, l), 0.0);
  float ggxV = geometrySchlickGGX(ndv, roughness);
  float ggxL = geometrySchlickGGX(ndl, roughness);
  return ggxV * ggxL;
}

mat3 cotangentFrame(vec3 n, vec3 p, vec2 uv) {
  vec3 dp1 = dFdx(p);
  vec3 dp2 = dFdy(p);
  vec2 duv1 = dFdx(uv);
  vec2 duv2 = dFdy(uv);

  vec3 dp2perp = cross(dp2, n);
  vec3 dp1perp = cross(n, dp1);
  vec3 t = dp2perp * duv1.x + dp1perp * duv2.x;
  vec3 b = dp2perp * duv1.y + dp1perp * duv2.y;
  float invMax = inversesqrt(max(dot(t, t), dot(b, b)));
  return mat3(t * invMax, b * invMax, n);
}

vec3 applyNormalMap(vec3 n, vec3 p, vec2 uv) {
  if (uUseNormalMap < 0.5 || uMatNormalStrength <= 0.0001) {
    return n;
  }
  vec3 mapNormal = texture2D(uNormalMap, uv).xyz * 2.0 - 1.0;
  mapNormal.xy *= uMatNormalStrength;
  mat3 tbn = cotangentFrame(n, p, uv);
  return normalize(tbn * mapNormal);
}

vec3 applySaturation(vec3 color, float saturation) {
  float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
  return mix(vec3(luma), color, max(0.0, saturation));
}

vec3 sampleMatcapWithBlur(vec2 uv, float blurAmount) {
  vec2 blurUv = uMatcapTexelSize * max(0.0, blurAmount) * 6.0;
  if (blurUv.x <= 0.000001 && blurUv.y <= 0.000001) {
    return texture2D(uMatcapMap, uv).rgb;
  }

  vec3 sum = vec3(0.0);
  sum += texture2D(uMatcapMap, clamp(uv, 0.0, 1.0)).rgb * 0.20;
  sum += texture2D(uMatcapMap, clamp(uv + vec2(blurUv.x, 0.0), 0.0, 1.0)).rgb * 0.15;
  sum += texture2D(uMatcapMap, clamp(uv - vec2(blurUv.x, 0.0), 0.0, 1.0)).rgb * 0.15;
  sum += texture2D(uMatcapMap, clamp(uv + vec2(0.0, blurUv.y), 0.0, 1.0)).rgb * 0.15;
  sum += texture2D(uMatcapMap, clamp(uv - vec2(0.0, blurUv.y), 0.0, 1.0)).rgb * 0.15;
  sum += texture2D(uMatcapMap, clamp(uv + blurUv, 0.0, 1.0)).rgb * 0.05;
  sum += texture2D(uMatcapMap, clamp(uv - blurUv, 0.0, 1.0)).rgb * 0.05;
  sum += texture2D(uMatcapMap, clamp(uv + vec2(blurUv.x, -blurUv.y), 0.0, 1.0)).rgb * 0.05;
  sum += texture2D(uMatcapMap, clamp(uv + vec2(-blurUv.x, blurUv.y), 0.0, 1.0)).rgb * 0.05;
  return sum;
}

vec3 evaluatePBRLight(
  vec3 n,
  vec3 v,
  vec3 l,
  vec3 albedo,
  float roughness,
  float metalness,
  float clearcoat
) {
  float ndl = max(dot(n, l), 0.0);
  float ndv = max(dot(n, v), 0.0);
  if (ndl <= 0.0 || ndv <= 0.0) {
    return vec3(0.0);
  }

  vec3 h = normalize(v + l);
  float hdv = max(dot(h, v), 0.0);

  vec3 f0 = mix(vec3(0.04), albedo, metalness);
  float ndf = distributionGGX(n, h, roughness);
  float g = geometrySmith(n, v, l, roughness);
  vec3 f = fresnelSchlick(hdv, f0);

  vec3 specular = (ndf * g * f) / max(4.0 * ndv * ndl, 0.000001);
  vec3 ks = f;
  vec3 kd = (vec3(1.0) - ks) * (1.0 - metalness);
  vec3 diffuse = kd * albedo / PI;

  vec3 color = (diffuse + specular) * ndl;

  if (clearcoat > 0.0) {
    float ccRoughness = max(0.02, roughness * 0.35);
    float ccNdf = distributionGGX(n, h, ccRoughness);
    float ccG = geometrySmith(n, v, l, ccRoughness);
    float ccF = fresnelSchlick(hdv, vec3(0.04)).r;
    float ccSpec = (ccNdf * ccG * ccF) / max(4.0 * ndv * ndl, 0.000001);
    color += vec3(ccSpec * clearcoat * 0.28) * ndl;
  }

  return color;
}

vec3 shadeSurface(vec3 normal, vec3 viewDir, vec2 uv) {
  vec3 albedo = uBaseColor * uMatDiffuse;
  if (uUseAlbedoMap > 0.5) {
    albedo *= texture2D(uAlbedoMap, uv).rgb;
  }

  float roughness = uMatRoughness;
  if (uUseRoughnessMap > 0.5) {
    roughness *= texture2D(uRoughnessMap, uv).r;
  }
  roughness = clamp(roughness, 0.04, 1.0);

  float metalness = uMatMetalness;
  if (uUseMetalnessMap > 0.5) {
    metalness *= texture2D(uMetalnessMap, uv).r;
  }
  metalness = clamp(metalness, 0.0, 1.0);

  float clearcoat = uMatClearcoat;
  if (uUseClearcoatMap > 0.5) {
    clearcoat *= texture2D(uClearcoatMap, uv).r;
  }
  clearcoat = clamp(clearcoat, 0.0, 1.0);

  vec3 n = normal;
  if (uMaterialMode < 0.5) {
    n = applyNormalMap(normal, vWorldPos, uv);
  }

  vec3 shaded;
  if (uMaterialMode > 0.5) {
    vec3 viewNormal = normalize((viewMatrix * vec4(n, 0.0)).xyz);
    vec2 matcapUv = clamp(viewNormal.xy * 0.5 + 0.5, 0.0, 1.0);
    vec3 matcapColor = sampleMatcapWithBlur(matcapUv, uMatcapBlur);
    matcapColor = (matcapColor - vec3(0.5)) * max(0.0, uMatcapContrast) + vec3(0.5);
    matcapColor = applySaturation(matcapColor, uMatcapSaturation);
    matcapColor *= max(0.0, uMatcapBrightness);
    shaded = clamp(matcapColor, vec3(0.0), vec3(1.0));
  } else {
    vec3 keyDir = normalize(uKeyDir);
    vec3 fillDir = normalize(uFillDir);
    float hemi = clamp(n.y * 0.5 + 0.5, 0.0, 1.0);

    vec3 ambient = albedo * (uDiffuseBase + hemi * uHemiStrength) * (1.0 - metalness * 0.65);
    vec3 keyLight = evaluatePBRLight(n, viewDir, keyDir, albedo, roughness, metalness, clearcoat) * uKeyStrength;
    vec3 fillLight = evaluatePBRLight(n, viewDir, fillDir, albedo, roughness, metalness, clearcoat) * uFillStrength;

    shaded = clamp(ambient + keyLight + fillLight, vec3(0.0), vec3(1.0));
  }

  return shaded;
}

void main() {
  vec3 dx = dFdx(vWorldPos);
  vec3 dy = dFdy(vWorldPos);
  vec3 normal = normalize(cross(dx, dy));
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 shaded = shadeSurface(normal, viewDir, vUv);

  if (uIsFloor > 0.5) {
    vec2 holeHalf = max(uFloorHoleHalfSize, vec2(0.0001));
    vec2 holeDelta = abs(vWorldPos.xz) - holeHalf;
    float holeSdf = max(holeDelta.x, holeDelta.y);
    if (holeSdf < 0.0) {
      discard;
    }

    float radius = max(0.001, uFloorCircleRadius);
    float fade = max(0.001, uFloorCircleFade);
    float distToCenter = length(vWorldPos.xz);
    float mask = 1.0 - smoothstep(radius - fade, radius, distToCenter);
    float alpha = clamp(mask * uFloorOpacity, 0.0, 1.0);
    if (alpha <= 0.001) {
      discard;
    }

    gl_FragColor = vec4(shaded, alpha);
    return;
  }

  gl_FragColor = vec4(shaded, 1.0);
}
`;
