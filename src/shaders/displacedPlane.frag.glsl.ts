export const displacedPlaneFragmentShader = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorldPos;
varying float vHeight;

uniform float uLow;
uniform float uMid;
uniform float uHigh;

void main() {
  vec3 dx = dFdx(vWorldPos);
  vec3 dy = dFdy(vWorldPos);
  vec3 normal = normalize(cross(dx, dy));

  vec3 lightDir = normalize(vec3(-0.42, 0.88, 0.26));
  float diff = max(dot(normal, lightDir), 0.0);
  float hemi = normal.y * 0.5 + 0.5;

  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float rim = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.25);

  float heightMask = smoothstep(-2.8, 2.6, vHeight);

  vec3 shadowColor = vec3(0.015, 0.016, 0.018);
  vec3 lightColor = vec3(0.92, 0.93, 0.95);
  vec3 baseColor = mix(shadowColor, lightColor, heightMask);

  float lighting = 0.2 + diff * 0.95 + hemi * 0.55;
  vec3 shaded = baseColor * lighting;

  float audioTint = clamp((uLow * 0.25 + uMid * 0.55 + uHigh * 0.2), 0.0, 1.0);
  shaded *= mix(0.92, 1.04, audioTint);
  shaded += rim * 0.18;

  gl_FragColor = vec4(max(shaded, vec3(0.0)), 1.0);
}
`;
