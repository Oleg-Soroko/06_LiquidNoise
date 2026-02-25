export const displacedPlaneVertexShader = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorldPos;
varying float vHeight;

uniform float uTime;
uniform float uNoiseCore;
uniform float uDriftPhase;

uniform float uBaseFreq;
uniform vec3 uBaseOffset;
uniform vec2 uDomainScale;
uniform float uDomainRotation;
uniform float uLatticeWarp;
uniform float uLatticeWarpFreq;
uniform float uComplement;
uniform float uFinalAmp;

uniform float uTurboFreq;
uniform float uTurboLacunarity;
uniform float uTurboAmp;
uniform float uRoughness;
uniform float uRidgeAmount;
uniform float uContrast;
uniform float uAttenuation;
uniform float uTurbulence;
uniform float uOutputMin;
uniform float uOutputMax;
uniform float uDetailFreq;
uniform float uDetailStrength;
uniform float uAudioMacroReactivity;
uniform float uAudioDetailReactivity;
uniform float uSymmetryMode;
uniform float uSymmetryWidth;
uniform float uSymmetryStretch;

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
uniform float uMouseHover;
uniform vec2 uMouseMoveDir;
uniform float uMouseNoiseOffset;
uniform float uPulseAge;
uniform float uEdgeFade;
uniform float uEdgeRadius;
uniform float uEdgePower;
uniform float uDriftSpeed;
uniform float uIsFloor;

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

vec4 os2sPermute(vec4 t) {
  return t * (t * 34.0 + 133.0);
}

vec3 os2sGrad(float hash) {
  vec3 cube = mod(floor(hash / vec3(1.0, 2.0, 4.0)), 2.0) * 2.0 - 1.0;
  vec3 cuboct = cube;
  if (hash < 16.0) {
    cuboct.x = 0.0;
  } else if (hash < 32.0) {
    cuboct.y = 0.0;
  } else {
    cuboct.z = 0.0;
  }

  float type = mod(floor(hash / 8.0), 2.0);
  vec3 rhomb = (1.0 - type) * cube + type * (cuboct + cross(cube, cuboct));
  vec3 g = cuboct * 1.22474487139 + rhomb;
  g *= (1.0 - 0.042942436724648037 * type) * 3.5946317686139184;
  return g;
}

float openSimplex2SPart(vec3 X) {
  vec3 b = floor(X);
  vec4 i4 = vec4(X - b, 2.5);

  vec3 v1 = b + floor(dot(i4, vec4(0.25)));
  vec3 v2 = b + vec3(1.0, 0.0, 0.0) + vec3(-1.0, 1.0, 1.0) * floor(dot(i4, vec4(-0.25, 0.25, 0.25, 0.35)));
  vec3 v3 = b + vec3(0.0, 1.0, 0.0) + vec3(1.0, -1.0, 1.0) * floor(dot(i4, vec4(0.25, -0.25, 0.25, 0.35)));
  vec3 v4 = b + vec3(0.0, 0.0, 1.0) + vec3(1.0, 1.0, -1.0) * floor(dot(i4, vec4(0.25, 0.25, -0.25, 0.35)));

  vec4 hashes = os2sPermute(mod(vec4(v1.x, v2.x, v3.x, v4.x), 289.0));
  hashes = os2sPermute(mod(hashes + vec4(v1.y, v2.y, v3.y, v4.y), 289.0));
  hashes = mod(os2sPermute(mod(hashes + vec4(v1.z, v2.z, v3.z, v4.z), 289.0)), 48.0);

  vec3 d1 = X - v1;
  vec3 d2 = X - v2;
  vec3 d3 = X - v3;
  vec3 d4 = X - v4;
  vec4 a = max(0.75 - vec4(dot(d1, d1), dot(d2, d2), dot(d3, d3), dot(d4, d4)), 0.0);
  vec4 aa = a * a;
  vec4 aaaa = aa * aa;

  vec3 g1 = os2sGrad(hashes.x);
  vec3 g2 = os2sGrad(hashes.y);
  vec3 g3 = os2sGrad(hashes.z);
  vec3 g4 = os2sGrad(hashes.w);
  vec4 extrapolations = vec4(dot(d1, g1), dot(d2, g2), dot(d3, g3), dot(d4, g4));

  return dot(aaaa, extrapolations);
}

float openSimplex2SNoise(vec3 X) {
  mat3 orthonormalMap = mat3(
    0.788675134594813, -0.211324865405187, -0.577350269189626,
    -0.211324865405187, 0.788675134594813, -0.577350269189626,
    0.577350269189626, 0.577350269189626, 0.577350269189626
  );

  vec3 xr = orthonormalMap * X;
  return openSimplex2SPart(xr) + openSimplex2SPart(xr + 144.5);
}

float softLimitSigned(float x) {
  return x / sqrt(1.0 + x * x);
}

float coreNoise(vec3 p) {
  if (uNoiseCore < 0.5) {
    return snoise(p);
  }

  float os2sFreqComp = 1.0;
  float os2sAmpComp = 1.0;
  if (uNoiseCore < 1.5) {
    return softLimitSigned(openSimplex2SNoise(p * os2sFreqComp) * os2sAmpComp);
  }

  // OpenSimplexFixed v2: keep seam-safe OpenSimplex core but bias toward wider Simplex-like plateaus.
  float os2sFixedFreqComp = 0.93;
  float os2sFixedAmpComp = 1.30;
  float os2sFixedGamma = 1.10;
  float os2sFixedPlateauMix = 0.22;

  float nMain = openSimplex2SNoise(p * os2sFixedFreqComp);
  float nLow = openSimplex2SNoise(p * (os2sFixedFreqComp * 0.52));
  float n = mix(nMain, nLow, os2sFixedPlateauMix);
  n = softLimitSigned(n * os2sFixedAmpComp);
  n = sign(n) * pow(abs(n), os2sFixedGamma);
  return n;
}

float baseNoise(vec3 p) {
  float n = coreNoise(p) * 0.5 + 0.5;
  return mix(n, 1.0 - n, clamp(uComplement, 0.0, 1.0));
}

vec3 warpVector(vec3 p) {
  float wx = coreNoise(p + vec3(19.2, 3.7, 11.8));
  float wy = coreNoise(p + vec3(-7.4, 13.1, 5.2));
  float wz = coreNoise(p + vec3(9.3, -17.0, 6.1));
  return vec3(wx, wy, wz);
}

float alligatorTurbulence(vec3 p) {
  float sum = 0.0;
  float gain = max(0.0, uTurboAmp);
  float octaveAmp = 1.0;
  float freq = max(0.0001, uTurboFreq);
  float norm = 0.0;
  float roughPow = mix(0.9, 3.5, clamp(uRoughness, 0.0, 1.0));
  float atten = clamp(uAttenuation, 0.05, 0.7);

  if (gain <= 0.000001) {
    return 0.0;
  }

  for (int i = 0; i < 8; i++) {
    float enabled = step(float(i), uTurbulence - 0.5);
    float n = abs(coreNoise(p * freq + vec3(float(i) * 7.13, float(i) * 3.11, float(i) * 5.23)));
    float ridge = 1.0 - n;
    n = mix(n, ridge, clamp(uRidgeAmount, 0.0, 1.0));
    n = pow(clamp(n, 0.0, 1.0), roughPow);
    sum += n * octaveAmp * enabled;
    norm += octaveAmp * enabled;
    freq *= max(1.01, uTurboLacunarity);
    octaveAmp *= atten;
  }

  if (norm <= 0.0) {
    return 0.0;
  }
  return clamp((sum / norm) * gain, 0.0, 1.0);
}

float softAbs(float x, float width) {
  float w = max(0.0001, width);
  return sqrt(x * x + w * w) - w;
}

float softSymmetryAxis(float coord, float width, float stretch) {
  float absCoord = abs(coord);
  float mirrored = softAbs(coord, width);
  float nearAxis = 1.0 - smoothstep(width * 0.6, width * 3.5, absCoord);
  return mirrored + nearAxis * max(0.0, stretch) * width;
}

vec2 applySymmetry(vec2 p) {
  float mode = floor(uSymmetryMode + 0.5);
  if (mode < 0.5) {
    return p;
  }

  float width = max(0.0001, uSymmetryWidth);
  float stretch = max(0.0, uSymmetryStretch);
  p.x = softSymmetryAxis(p.x, width, stretch);

  if (mode > 1.5) {
    p.y = softSymmetryAxis(p.y, width, stretch);
  }
  return p;
}

float edgePin(vec2 uv, float audioEdge) {
  float radius = clamp(uEdgeRadius, 0.1, 0.5);
  float fade = max(0.1, uEdgeFade);
  float basePower = max(0.9, uEdgePower);
  float power = clamp(basePower + audioEdge * (4.0 - basePower), 0.9, 4.0);
  float distToCenter = distance(uv, vec2(0.5));
  float pin = 1.0 - smoothstep(radius - fade, radius, distToCenter);
  return pow(clamp(pin, 0.0, 1.0), power);
}

void main() {
  vUv = uv;

  float domainAngle = uDomainRotation;
  float dc = cos(domainAngle);
  float ds = sin(domainAngle);
  mat2 domainRotate = mat2(dc, -ds, ds, dc);
  vec2 domainScaled = position.xy * max(abs(uDomainScale), vec2(0.0001));
  vec2 domainPos = domainRotate * domainScaled;
  vec2 symmetryPos = applySymmetry(domainPos);
  vec3 basePos = vec3(symmetryPos, uDriftPhase) + uBaseOffset;
  vec3 simplexInput = basePos * max(0.0001, uBaseFreq);
  if (uMouseNoiseOffset > 0.5) {
    float moveLen = length(uMouseMoveDir);
    if (moveLen > 0.0001) {
      float distToMouseForNoise = distance(vUv, uMouseUv);
      float noiseMask = 1.0 - smoothstep(0.0, max(0.0001, uMouseRadius * 1.3), distToMouseForNoise);
      vec2 moveDir = uMouseMoveDir / moveLen;
      simplexInput.xy += moveDir * (noiseMask * 0.12);
    }
  }
  vec3 simplexWarp = warpVector(simplexInput * max(0.0001, uLatticeWarpFreq)) * uLatticeWarp;
  vec3 simplexWarped = simplexInput + simplexWarp;

  float simplex01 = baseNoise(simplexWarped);
  vec3 alligatorPos = vec3(simplex01, simplex01, simplex01);
  float alligator01 = clamp(alligatorTurbulence(alligatorPos), 0.0, 1.0);
  alligator01 = clamp((alligator01 - 0.5) * max(0.0, uContrast) + 0.5, 0.0, 1.0);
  float finalRemap = mix(uOutputMin, uOutputMax, alligator01);

  float macroAudio = 1.0 + (uLow * uLowGain + uMid * uMidGain) * uGlobalGain * uAudioMacroReactivity;
  float edgeAudio = clamp(
    (uLow * uLowGain + uMid * uMidGain + uHigh * uHighGain) * uGlobalGain * 0.35,
    0.0,
    1.0
  );
  float fine = coreNoise(
    simplexWarped * max(0.0001, uDetailFreq) +
    vec3(0.0, 0.0, uDriftPhase * 1.9 + uTime * 0.03)
  );
  float audioShape = finalRemap * macroAudio + fine * uHigh * uHighGain * uGlobalGain * uDetailStrength * uAudioDetailReactivity;

  float distToMouse = distance(vUv, uMouseUv);
  float radius = max(0.5, uMouseRadius);
  float mouseFalloff = 1.0 - smoothstep(0.0, radius, distToMouse);
  float hoverTerm = mouseFalloff * uMouseHover * uMouseStrength;

  float pulseTerm = 0.0;
  if (uPulseAge >= 0.0) {
    float normalizedDist = distToMouse / radius;
    float spatialEnvelope = exp(-normalizedDist * 2.0);
    float temporalEnvelope = exp(-uPulseAge * 3.2);
    float phase = normalizedDist * 14.0 - uPulseAge * 16.0;
    pulseTerm = sin(phase) * spatialEnvelope * temporalEnvelope * uMouseStrength;
  }
  float mouseTerm = hoverTerm + pulseTerm;

  float height = edgePin(vUv, edgeAudio) * ((audioShape * uFinalAmp) + mouseTerm);
  if (uIsFloor > 0.5) {
    height = 0.0;
  }
  vHeight = height;

  vec3 displaced = position;
  displaced.z += height;

  vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
  vWorldPos = worldPosition.xyz;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`;
