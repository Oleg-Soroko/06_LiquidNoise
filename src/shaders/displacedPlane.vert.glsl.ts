export const displacedPlaneVertexShader = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorldPos;
varying float vHeight;

uniform float uTime;

uniform float uBaseFreq;
uniform vec3 uBaseOffset;
uniform float uLatticeWarp;
uniform float uLatticeWarpFreq;
uniform float uComplement;
uniform float uFinalAmp;

uniform float uTurboFreq;
uniform float uTurboAmp;
uniform float uRoughness;
uniform float uAttenuation;
uniform float uTurbulence;
uniform float uBaseWeight;
uniform float uTurboWeight;
uniform float uContourFreq;
uniform float uContourStrength;
uniform float uContourPower;
uniform float uDetailScale;
uniform float uDetailStrength;
uniform float uElevation;

uniform float uLow;
uniform float uMid;
uniform float uHigh;
uniform float uLowGain;
uniform float uMidGain;
uniform float uHighGain;
uniform float uGlobalGain;

uniform vec2 uMouseUv;
uniform float uMouseRadius;
uniform float uMouseStrength;
uniform float uEdgeFade;
uniform float uDriftSpeed;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(
    permute(
      permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) +
        i.y + vec4(0.0, i1.y, i2.y, 1.0)
    ) + i.x + vec4(0.0, i1.x, i2.x, 1.0)
  );

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(
    vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3))
  );
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(
    0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)),
    0.0
  );
  m = m * m;
  return 42.0 * dot(
    m * m,
    vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))
  );
}

float baseNoise(vec3 p) {
  float n = snoise(p) * 0.5 + 0.5;
  return mix(n, 1.0 - n, clamp(uComplement, 0.0, 1.0));
}

vec3 warpVector(vec3 p) {
  float wx = snoise(p + vec3(19.2, 3.7, 11.8));
  float wy = snoise(p + vec3(-7.4, 13.1, 5.2));
  float wz = snoise(p + vec3(9.3, -17.0, 6.1));
  return vec3(wx, wy, wz);
}

float alligatorTurbulence(vec3 p) {
  float sum = 0.0;
  float amp = max(0.0001, uTurboAmp);
  float freq = max(0.0001, uTurboFreq);
  float norm = 0.0;
  float roughPow = mix(0.9, 3.5, clamp(uRoughness, 0.0, 1.0));
  float atten = clamp(uAttenuation, 0.05, 0.98);

  for (int i = 0; i < 8; i++) {
    float enabled = step(float(i), uTurbulence - 0.5);
    float n = abs(snoise(p * freq + vec3(float(i) * 7.13, float(i) * 3.11, float(i) * 5.23)));
    n = pow(clamp(n, 0.0, 1.0), roughPow);
    sum += n * amp * enabled;
    norm += amp * enabled;
    freq *= 1.92;
    amp *= atten;
  }

  if (norm <= 0.0) {
    return 0.0;
  }
  return sum / norm;
}

float edgePin(vec2 uv) {
  float border = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
  float inset = max(0.002, uEdgeFade * 0.62);
  float feather = max(0.0005, uEdgeFade * 0.92);
  float pin = smoothstep(inset, inset + feather, border);
  return pin * pin;
}

void main() {
  vUv = uv;

  vec3 basePos = vec3(position.xy, uTime * uDriftSpeed) + uBaseOffset;
  vec3 baseDomain = basePos * max(0.0001, uBaseFreq);

  float base = baseNoise(baseDomain);
  vec3 warp = warpVector(baseDomain * max(0.0001, uLatticeWarpFreq)) * uLatticeWarp;
  vec3 warpedDomain = baseDomain + warp;

  float turbo = alligatorTurbulence(warpedDomain);
  float baseSigned = base * 2.0 - 1.0;
  float turboSigned = turbo * 2.0 - 1.0;

  float structure = baseSigned * uBaseWeight + turboSigned * uTurboWeight;
  float contourFreq = max(0.1, uContourFreq) * (1.0 + uMid * 0.25);
  float contour = sin((structure + turbo * 0.65) * contourFreq);
  float contourShape = sign(contour) * pow(abs(contour), max(0.05, uContourPower));
  float shaped = mix(structure, structure + contourShape * uContourStrength, 0.72);

  float macroAudio = 1.0 + (uLow * uLowGain + uMid * uMidGain) * uGlobalGain;
  float fine = snoise(
    warpedDomain * max(0.1, uDetailScale) +
    vec3(0.0, 0.0, uTime * (uDriftSpeed * 1.9 + 0.03))
  );
  float audioShape = shaped * macroAudio + fine * uHigh * uHighGain * uGlobalGain * uDetailStrength;

  float distToMouse = distance(vUv, uMouseUv);
  float mouseFalloff = 1.0 - smoothstep(0.0, max(0.0001, uMouseRadius), distToMouse);
  float mouseTerm = mouseFalloff * uMouseStrength;

  float height = edgePin(vUv) * ((audioShape * uFinalAmp) + mouseTerm + uElevation);
  vHeight = height;

  vec3 displaced = position;
  displaced.z += height;

  vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
  vWorldPos = worldPosition.xyz;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`;
