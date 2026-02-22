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
uniform vec3 uKeyDir;
uniform vec3 uFillDir;
uniform float uKeyStrength;
uniform float uFillStrength;
uniform float uHemiStrength;
uniform float uDiffuseBase;
uniform vec3 uBaseColor;
uniform float uCavitySlopeScale;
uniform float uCavityCurvatureScale;
uniform float uCavityPower;
uniform float uCavityStrength;
uniform float uCavityMax;
uniform float uShadeMin;
uniform float uShadeMax;

vec3 shadeSurface(vec3 normal, float height) {
  float key = max(dot(normal, normalize(uKeyDir)), 0.0);
  float fill = max(dot(normal, normalize(uFillDir)), 0.0);
  float hemi = normal.y * 0.5 + 0.5;
  float diffuse =
    uDiffuseBase +
    key * uKeyStrength +
    fill * uFillStrength +
    hemi * uHemiStrength;

  float slope = length(vec2(dFdx(height), dFdy(height)));
  float curvature = length(dFdx(normal) + dFdy(normal));
  float cavityRaw = slope * uCavitySlopeScale + curvature * uCavityCurvatureScale;
  float cavity = 1.0 - clamp(pow(cavityRaw, max(0.001, uCavityPower)) * uCavityStrength, 0.0, uCavityMax);

  vec3 shaded = uBaseColor * diffuse * cavity;
  return clamp(shaded, vec3(uShadeMin), vec3(uShadeMax));
}

void main() {
  vec3 dx = dFdx(vWorldPos);
  vec3 dy = dFdy(vWorldPos);
  vec3 normal = normalize(cross(dx, dy));
  vec3 shaded = shadeSurface(normal, vHeight);

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
