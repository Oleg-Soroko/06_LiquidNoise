import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import type { AudioBands } from "../audio/BandAnalyzer";
import matcapBlackGlossUrl from "../assets/matcaps/black-gloss.png";
import matcapDarkSteelUrl from "../assets/matcaps/dark-steel.png";
import matcapDeepSlateUrl from "../assets/matcaps/deep-slate.png";
import matcapGraphiteContrastUrl from "../assets/matcaps/graphite-contrast.png";
import matcapSteelBlueSoftUrl from "../assets/matcaps/steel-blue-soft.png";
import { displacedPlaneFragmentShader } from "../shaders/displacedPlane.frag.glsl";
import { displacedPlaneVertexShader } from "../shaders/displacedPlane.vert.glsl";

export interface HoudiniNoiseParams {
  baseFreq: number;
  baseOffsetX: number;
  baseOffsetY: number;
  baseOffsetZ: number;
  latticeWarp: number;
  latticeWarpFreq: number;
  complement: number;
  finalAmp: number;
  turboFreq: number;
  turboAmp: number;
  roughness: number;
  attenuation: number;
  turbulence: number;
  baseWeight: number;
  turboWeight: number;
  contourFreq: number;
  contourStrength: number;
  contourPower: number;
  detailScale: number;
  detailStrength: number;
  elevation: number;
}

export interface AudioMapParams {
  lowGain: number;
  midGain: number;
  highGain: number;
  globalGain: number;
  attack: number;
  release: number;
}

export interface InteractionParams {
  mouseRadius: number;
  mouseStrength: number;
  edgeFade: number;
  driftSpeed: number;
}

export interface QualityParams {
  subdivisions: number;
  pixelRatioMax: number;
}

export type FogMode = "exp2" | "linear";

export interface FogParams {
  enabled: boolean;
  color: string;
  mode: FogMode;
  density: number;
  falloff: number;
  near: number;
  far: number;
  amount: number;
  height: number;
  heightFalloff: number;
}

export interface LiquidMetalParams {
  baseColor: string;
  roughness: number;
  metalness: number;
  specular: number;
  fresnel: number;
  normalStrength: number;
  envStrength: number;
  clearcoat: number;
  clearcoatRoughness: number;
  rimStrength: number;
  shadowStrength: number;
}

export interface HdriParams {
  enabled: boolean;
  intensity: number;
  rotation: number;
  showBackground: boolean;
  backgroundBlur: number;
  backgroundIntensity: number;
}

export interface PostFxParams {
  enabled: boolean;
  sharpen: number;
  chromaticAberration: number;
  vignette: number;
}

export type MaterialMode = "matcap" | "liquid";

export interface MatcapOption {
  id: string;
  label: string;
}

interface MatcapPreset extends MatcapOption {
  url: string;
}

const MATCAP_PRESETS: MatcapPreset[] = [
  { id: "steel-blue-soft", label: "Steel Blue Soft", url: matcapSteelBlueSoftUrl },
  { id: "graphite-contrast", label: "Graphite Contrast", url: matcapGraphiteContrastUrl },
  { id: "black-gloss", label: "Black Gloss", url: matcapBlackGlossUrl },
  { id: "deep-slate", label: "Deep Slate", url: matcapDeepSlateUrl },
  { id: "dark-steel", label: "Dark Steel", url: matcapDarkSteelUrl },
];

export const MATCAP_OPTIONS: MatcapOption[] = MATCAP_PRESETS.map(({ id, label }) => ({
  id,
  label,
}));

export const DEFAULT_MATCAP_ID = "graphite-contrast";
export const CUSTOM_MATCAP_ID = "custom";
export const DEFAULT_MATERIAL_MODE: MaterialMode = "matcap";

export const DEFAULT_NOISE_PARAMS: HoudiniNoiseParams = {
  baseFreq: 1.0,
  baseOffsetX: 2.0,
  baseOffsetY: 0.0,
  baseOffsetZ: 0.0,
  latticeWarp: 0.3,
  latticeWarpFreq: 0.4,
  complement: 1.0,
  finalAmp: 3.0,
  turboFreq: 0.7,
  turboAmp: 1.0,
  roughness: 0.4,
  attenuation: 0.6,
  turbulence: 8.0,
  baseWeight: 0.68,
  turboWeight: 0.92,
  contourFreq: 18.0,
  contourStrength: 0.38,
  contourPower: 1.8,
  detailScale: 3.35,
  detailStrength: 0.45,
  elevation: 0.0,
};

export const DEFAULT_AUDIO_MAP_PARAMS: AudioMapParams = {
  lowGain: 1.25,
  midGain: 0.9,
  highGain: 0.65,
  globalGain: 1.2,
  attack: 0.42,
  release: 0.12,
};

export const DEFAULT_INTERACTION_PARAMS: InteractionParams = {
  mouseRadius: 0.16,
  mouseStrength: 0.8,
  edgeFade: 0.085,
  driftSpeed: 0.115,
};

export const DEFAULT_QUALITY_PARAMS: QualityParams = {
  subdivisions: 256,
  pixelRatioMax: 2.0,
};

export const DEFAULT_FOG_PARAMS: FogParams = {
  enabled: true,
  color: "#3f464f",
  mode: "exp2",
  density: 0.04,
  falloff: 1.2,
  near: 14,
  far: 300,
  amount: 1.0,
  height: 1.6,
  heightFalloff: 0.0,
};

export const DEFAULT_LIQUID_METAL_PARAMS: LiquidMetalParams = {
  baseColor: "#8a93a3",
  roughness: 0.2,
  metalness: 1.0,
  specular: 1.5,
  fresnel: 1.05,
  normalStrength: 1.35,
  envStrength: 1.0,
  clearcoat: 0.42,
  clearcoatRoughness: 0.18,
  rimStrength: 0.16,
  shadowStrength: 0.35,
};

export const DEFAULT_HDRI_PARAMS: HdriParams = {
  enabled: false,
  intensity: 1.0,
  rotation: 0.0,
  showBackground: false,
  backgroundBlur: 0.2,
  backgroundIntensity: 1.0,
};

export const DEFAULT_POST_FX_PARAMS: PostFxParams = {
  enabled: true,
  sharpen: 0.24,
  chromaticAberration: 0.0015,
  vignette: 0.24,
};

export interface DisplacedPlaneSceneOptions {
  container: HTMLElement;
  noiseParams: HoudiniNoiseParams;
  audioMapParams: AudioMapParams;
  interactionParams: InteractionParams;
  qualityParams: QualityParams;
  fogParams: FogParams;
  liquidMetalParams: LiquidMetalParams;
  hdriParams: HdriParams;
  postFxParams: PostFxParams;
  materialMode: MaterialMode;
}

const REACTIVE_WIDTH = 42;
const REACTIVE_DEPTH = 26;
const FRAME_OUTER_WIDTH = 2200;
const FRAME_OUTER_DEPTH = 2200;
const FRAME_DEPTH = 12;
const FUNNEL_SPREAD = 16;
const WORLD_UP = new THREE.Vector3(0, 1, 0);

const FRAME_VERTEX_SHADER = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorldPos;
varying float vHeight;

void main() {
  vUv = uv;
  vHeight = 0.0;
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPosition.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`;

interface PlaneUniforms {
  uTime: THREE.IUniform<number>;
  uBaseFreq: THREE.IUniform<number>;
  uBaseOffset: THREE.IUniform<THREE.Vector3>;
  uLatticeWarp: THREE.IUniform<number>;
  uLatticeWarpFreq: THREE.IUniform<number>;
  uComplement: THREE.IUniform<number>;
  uFinalAmp: THREE.IUniform<number>;
  uTurboFreq: THREE.IUniform<number>;
  uTurboAmp: THREE.IUniform<number>;
  uRoughness: THREE.IUniform<number>;
  uAttenuation: THREE.IUniform<number>;
  uTurbulence: THREE.IUniform<number>;
  uBaseWeight: THREE.IUniform<number>;
  uTurboWeight: THREE.IUniform<number>;
  uContourFreq: THREE.IUniform<number>;
  uContourStrength: THREE.IUniform<number>;
  uContourPower: THREE.IUniform<number>;
  uDetailScale: THREE.IUniform<number>;
  uDetailStrength: THREE.IUniform<number>;
  uElevation: THREE.IUniform<number>;
  uLow: THREE.IUniform<number>;
  uMid: THREE.IUniform<number>;
  uHigh: THREE.IUniform<number>;
  uLowGain: THREE.IUniform<number>;
  uMidGain: THREE.IUniform<number>;
  uHighGain: THREE.IUniform<number>;
  uGlobalGain: THREE.IUniform<number>;
  uMouseUv: THREE.IUniform<THREE.Vector2>;
  uMouseRadius: THREE.IUniform<number>;
  uMouseStrength: THREE.IUniform<number>;
  uEdgeFade: THREE.IUniform<number>;
  uDriftSpeed: THREE.IUniform<number>;
  uMaterialMode: THREE.IUniform<number>;
  uMatcap: THREE.IUniform<THREE.Texture>;
  uHdriMap: THREE.IUniform<THREE.Texture>;
  uHasHdri: THREE.IUniform<number>;
  uHdriIsRGBE: THREE.IUniform<number>;
  uHdriIntensity: THREE.IUniform<number>;
  uHdriRotation: THREE.IUniform<number>;
  uLiquidBaseColor: THREE.IUniform<THREE.Color>;
  uLiquidRoughness: THREE.IUniform<number>;
  uLiquidMetalness: THREE.IUniform<number>;
  uLiquidSpecular: THREE.IUniform<number>;
  uLiquidFresnel: THREE.IUniform<number>;
  uLiquidNormalStrength: THREE.IUniform<number>;
  uLiquidEnvStrength: THREE.IUniform<number>;
  uLiquidClearcoat: THREE.IUniform<number>;
  uLiquidClearcoatRoughness: THREE.IUniform<number>;
  uLiquidRimStrength: THREE.IUniform<number>;
  uLiquidShadowStrength: THREE.IUniform<number>;
  uFogColor: THREE.IUniform<THREE.Color>;
  uFogMode: THREE.IUniform<number>;
  uFogDensity: THREE.IUniform<number>;
  uFogFalloff: THREE.IUniform<number>;
  uFogNear: THREE.IUniform<number>;
  uFogFar: THREE.IUniform<number>;
  uFogAmount: THREE.IUniform<number>;
  uFogHeight: THREE.IUniform<number>;
  uFogHeightFalloff: THREE.IUniform<number>;
}

const REACTIVE_DEPTH_FRAGMENT_SHADER = /* glsl */ `
#include <packing>
void main() {
  gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
}
`;

function makeSharpenShader() {
  return {
    uniforms: {
      tDiffuse: { value: null },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uAmount: { value: 0.24 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform sampler2D tDiffuse;
      uniform vec2 uResolution;
      uniform float uAmount;

      void main() {
        vec2 texel = 1.0 / uResolution;
        vec3 center = texture2D(tDiffuse, vUv).rgb * (1.0 + 4.0 * uAmount);
        vec3 left = texture2D(tDiffuse, vUv - vec2(texel.x, 0.0)).rgb * uAmount;
        vec3 right = texture2D(tDiffuse, vUv + vec2(texel.x, 0.0)).rgb * uAmount;
        vec3 up = texture2D(tDiffuse, vUv + vec2(0.0, texel.y)).rgb * uAmount;
        vec3 down = texture2D(tDiffuse, vUv - vec2(0.0, texel.y)).rgb * uAmount;
        gl_FragColor = vec4(center - left - right - up - down, 1.0);
      }
    `,
  };
}

function makeChromaticAberrationShader() {
  return {
    uniforms: {
      tDiffuse: { value: null },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uAmount: { value: 0.0015 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform sampler2D tDiffuse;
      uniform vec2 uResolution;
      uniform float uAmount;

      void main() {
        vec2 centered = vUv - 0.5;
        vec2 offset = centered * uAmount;
        vec2 pixel = 1.0 / uResolution;
        vec2 chromaOffset = offset + normalize(centered + 0.00001) * pixel * 0.5;

        float r = texture2D(tDiffuse, vUv + chromaOffset).r;
        float g = texture2D(tDiffuse, vUv).g;
        float b = texture2D(tDiffuse, vUv - chromaOffset).b;
        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `,
  };
}

function makeVignetteShader() {
  return {
    uniforms: {
      tDiffuse: { value: null },
      uAmount: { value: 0.24 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform sampler2D tDiffuse;
      uniform float uAmount;

      void main() {
        vec3 color = texture2D(tDiffuse, vUv).rgb;
        vec2 centered = vUv - 0.5;
        float radius = length(centered);
        float vignette = smoothstep(0.34, 0.98, radius);
        color *= mix(1.0, 1.0 - uAmount, vignette);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  };
}

export class DisplacedPlaneScene {
  private readonly container: HTMLElement;
  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly controls: OrbitControls;
  private readonly reactiveMaterial: THREE.ShaderMaterial;
  private readonly reactiveDepthMaterial: THREE.ShaderMaterial;
  private readonly frameMaterial: THREE.ShaderMaterial;
  private readonly reactiveMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private readonly shadowCatcher: THREE.Mesh<THREE.PlaneGeometry, THREE.ShadowMaterial>;
  private readonly keyLight: THREE.DirectionalLight;
  private readonly fillLight: THREE.HemisphereLight;
  private readonly frameGroup: THREE.Group;
  private reactiveGeometry: THREE.PlaneGeometry;
  private readonly uniforms: PlaneUniforms;
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointerNdc = new THREE.Vector2();
  private readonly pointerWorld = new THREE.Vector3();
  private readonly pointerUvTarget = new THREE.Vector2(0.5, 0.5);
  private readonly floorPlane = new THREE.Plane(WORLD_UP, 0);
  private readonly textureLoader = new THREE.TextureLoader();
  private readonly rgbeLoader = new RGBELoader();
  private readonly exrLoader = new EXRLoader();
  private readonly matcapCache = new Map<string, THREE.Texture>();
  private readonly fallbackMatcap: THREE.DataTexture;
  private readonly fallbackHdri: THREE.DataTexture;
  private customMatcapTexture: THREE.Texture | null = null;
  private customMatcapUrl: string | null = null;
  private activeMatcapId = DEFAULT_MATCAP_ID;
  private hdriTexture: THREE.Texture | null = null;
  private hdriTextureUrl: string | null = null;
  private hdriIsRGBE = false;
  private envTarget: THREE.WebGLRenderTarget | null = null;
  private readonly pmremGenerator: THREE.PMREMGenerator;
  private matcapLoadToken = 0;
  private hdriLoadToken = 0;
  private mouseStrengthCurrent = 0;
  private mouseStrengthTarget = 0;
  private audioLow = 0;
  private audioMid = 0;
  private audioHigh = 0;

  readonly renderer: THREE.WebGLRenderer;
  private readonly composer: EffectComposer;
  private readonly sharpenPass: ShaderPass;
  private readonly chromaPass: ShaderPass;
  private readonly vignettePass: ShaderPass;

  private noiseParams: HoudiniNoiseParams;
  private audioMapParams: AudioMapParams;
  private interactionParams: InteractionParams;
  private qualityParams: QualityParams;
  private fogParams: FogParams;
  private liquidParams: LiquidMetalParams;
  private hdriParams: HdriParams;
  private postFxParams: PostFxParams;
  private materialMode: MaterialMode;

  private readonly handlePointerMove = (event: PointerEvent): void => {
    const rect = this.renderer.domElement.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      return;
    }

    const normalizedX = (event.clientX - rect.left) / rect.width;
    const normalizedY = (event.clientY - rect.top) / rect.height;
    this.pointerNdc.set(normalizedX * 2 - 1, -(normalizedY * 2 - 1));

    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const hit = this.raycaster.ray.intersectPlane(this.floorPlane, this.pointerWorld);
    if (!hit) {
      this.mouseStrengthTarget = 0;
      return;
    }

    const u = this.pointerWorld.x / REACTIVE_WIDTH + 0.5;
    const v = this.pointerWorld.z / REACTIVE_DEPTH + 0.5;
    if (u < 0 || u > 1 || v < 0 || v > 1) {
      this.mouseStrengthTarget = 0;
      return;
    }

    this.pointerUvTarget.set(u, v);
    this.mouseStrengthTarget = 1;
  };

  private readonly handlePointerLeave = (): void => {
    this.mouseStrengthTarget = 0;
  };

  constructor(options: DisplacedPlaneSceneOptions) {
    this.container = options.container;
    this.noiseParams = { ...options.noiseParams };
    this.audioMapParams = { ...options.audioMapParams };
    this.interactionParams = { ...options.interactionParams };
    this.qualityParams = { ...options.qualityParams };
    this.fogParams = { ...options.fogParams };
    this.liquidParams = { ...options.liquidMetalParams };
    this.hdriParams = { ...options.hdriParams };
    this.postFxParams = { ...options.postFxParams };
    this.materialMode = options.materialMode;

    this.fallbackMatcap = this.createSolidTexture([170, 174, 180, 255], THREE.SRGBColorSpace);
    this.fallbackHdri = this.createSolidTexture([24, 28, 34, 255], THREE.LinearSRGBColorSpace);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.domElement.classList.add("viewport-canvas");
    this.container.appendChild(this.renderer.domElement);

    this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    this.pmremGenerator.compileEquirectangularShader();

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x3f464f, 0.048);
    this.scene.background = new THREE.Color(0x3f464f);

    this.camera = new THREE.PerspectiveCamera(44, 1, 0.1, 6000);
    this.camera.position.set(0, 16, 34);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.target.set(0, 0.2, 0);
    this.controls.minDistance = 10;
    this.controls.maxDistance = 1800;
    this.controls.maxPolarAngle = Math.PI * 0.49;

    this.uniforms = {
      uTime: { value: 0 },
      uBaseFreq: { value: this.noiseParams.baseFreq },
      uBaseOffset: {
        value: new THREE.Vector3(
          this.noiseParams.baseOffsetX,
          this.noiseParams.baseOffsetY,
          this.noiseParams.baseOffsetZ,
        ),
      },
      uLatticeWarp: { value: this.noiseParams.latticeWarp },
      uLatticeWarpFreq: { value: this.noiseParams.latticeWarpFreq },
      uComplement: { value: this.noiseParams.complement },
      uFinalAmp: { value: this.noiseParams.finalAmp },
      uTurboFreq: { value: this.noiseParams.turboFreq },
      uTurboAmp: { value: this.noiseParams.turboAmp },
      uRoughness: { value: this.noiseParams.roughness },
      uAttenuation: { value: this.noiseParams.attenuation },
      uTurbulence: { value: this.noiseParams.turbulence },
      uBaseWeight: { value: this.noiseParams.baseWeight },
      uTurboWeight: { value: this.noiseParams.turboWeight },
      uContourFreq: { value: this.noiseParams.contourFreq },
      uContourStrength: { value: this.noiseParams.contourStrength },
      uContourPower: { value: this.noiseParams.contourPower },
      uDetailScale: { value: this.noiseParams.detailScale },
      uDetailStrength: { value: this.noiseParams.detailStrength },
      uElevation: { value: this.noiseParams.elevation },
      uLow: { value: 0 },
      uMid: { value: 0 },
      uHigh: { value: 0 },
      uLowGain: { value: this.audioMapParams.lowGain },
      uMidGain: { value: this.audioMapParams.midGain },
      uHighGain: { value: this.audioMapParams.highGain },
      uGlobalGain: { value: this.audioMapParams.globalGain },
      uMouseUv: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseRadius: { value: this.interactionParams.mouseRadius },
      uMouseStrength: { value: 0 },
      uEdgeFade: { value: this.interactionParams.edgeFade },
      uDriftSpeed: { value: this.interactionParams.driftSpeed },
      uMaterialMode: { value: this.materialMode === "liquid" ? 1 : 0 },
      uMatcap: { value: this.fallbackMatcap },
      uHdriMap: { value: this.fallbackHdri },
      uHasHdri: { value: 0 },
      uHdriIsRGBE: { value: 0 },
      uHdriIntensity: { value: this.hdriParams.intensity },
      uHdriRotation: { value: this.hdriParams.rotation },
      uLiquidBaseColor: { value: new THREE.Color(this.liquidParams.baseColor) },
      uLiquidRoughness: { value: this.liquidParams.roughness },
      uLiquidMetalness: { value: this.liquidParams.metalness },
      uLiquidSpecular: { value: this.liquidParams.specular },
      uLiquidFresnel: { value: this.liquidParams.fresnel },
      uLiquidNormalStrength: { value: this.liquidParams.normalStrength },
      uLiquidEnvStrength: { value: this.liquidParams.envStrength },
      uLiquidClearcoat: { value: this.liquidParams.clearcoat },
      uLiquidClearcoatRoughness: { value: this.liquidParams.clearcoatRoughness },
      uLiquidRimStrength: { value: this.liquidParams.rimStrength },
      uLiquidShadowStrength: { value: this.liquidParams.shadowStrength },
      uFogColor: { value: new THREE.Color(this.fogParams.color) },
      uFogMode: { value: this.fogParams.mode === "linear" ? 1 : 0 },
      uFogDensity: { value: this.fogParams.density },
      uFogFalloff: { value: this.fogParams.falloff },
      uFogNear: { value: this.fogParams.near },
      uFogFar: { value: this.fogParams.far },
      uFogAmount: { value: this.fogParams.amount },
      uFogHeight: { value: this.fogParams.height },
      uFogHeightFalloff: { value: this.fogParams.heightFalloff },
    };

    this.reactiveMaterial = new THREE.ShaderMaterial({
      uniforms: this.uniforms as unknown as Record<string, THREE.IUniform>,
      vertexShader: displacedPlaneVertexShader,
      fragmentShader: displacedPlaneFragmentShader,
      side: THREE.DoubleSide,
    });

    this.reactiveDepthMaterial = new THREE.ShaderMaterial({
      uniforms: this.uniforms as unknown as Record<string, THREE.IUniform>,
      vertexShader: displacedPlaneVertexShader,
      fragmentShader: REACTIVE_DEPTH_FRAGMENT_SHADER,
      side: THREE.DoubleSide,
      blending: THREE.NoBlending,
    });

    this.frameMaterial = new THREE.ShaderMaterial({
      uniforms: this.uniforms as unknown as Record<string, THREE.IUniform>,
      vertexShader: FRAME_VERTEX_SHADER,
      fragmentShader: displacedPlaneFragmentShader,
      side: THREE.DoubleSide,
    });

    this.reactiveGeometry = this.createReactiveGeometry(this.qualityParams.subdivisions);
    this.reactiveMesh = new THREE.Mesh(this.reactiveGeometry, this.reactiveMaterial);
    this.reactiveMesh.rotation.x = -Math.PI * 0.5;
    this.reactiveMesh.position.y = -0.03;
    this.reactiveMesh.castShadow = true;
    this.reactiveMesh.customDepthMaterial = this.reactiveDepthMaterial;
    this.scene.add(this.reactiveMesh);

    this.shadowCatcher = new THREE.Mesh(
      new THREE.PlaneGeometry(FRAME_OUTER_WIDTH, FRAME_OUTER_DEPTH),
      new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.3 }),
    );
    this.shadowCatcher.rotation.x = -Math.PI * 0.5;
    this.shadowCatcher.position.y = -0.031;
    this.shadowCatcher.receiveShadow = true;
    this.shadowCatcher.renderOrder = 3;
    this.shadowCatcher.material.depthWrite = false;
    this.scene.add(this.shadowCatcher);

    this.keyLight = new THREE.DirectionalLight(0xffffff, 1.55);
    this.keyLight.position.set(30, 44, 24);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.set(2048, 2048);
    this.keyLight.shadow.radius = 3.2;
    this.keyLight.shadow.bias = -0.0002;
    this.keyLight.shadow.normalBias = 0.02;
    const shadowExtent = 140;
    this.keyLight.shadow.camera.left = -shadowExtent;
    this.keyLight.shadow.camera.right = shadowExtent;
    this.keyLight.shadow.camera.top = shadowExtent;
    this.keyLight.shadow.camera.bottom = -shadowExtent;
    this.keyLight.shadow.camera.near = 1;
    this.keyLight.shadow.camera.far = 320;
    this.scene.add(this.keyLight);

    this.fillLight = new THREE.HemisphereLight(0x8ea5c4, 0x10161f, 0.32);
    this.scene.add(this.fillLight);

    this.frameGroup = new THREE.Group();
    for (const mesh of this.createFrameMeshes()) {
      this.frameGroup.add(mesh);
    }
    this.scene.add(this.frameGroup);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.sharpenPass = new ShaderPass(makeSharpenShader());
    this.chromaPass = new ShaderPass(makeChromaticAberrationShader());
    this.vignettePass = new ShaderPass(makeVignetteShader());
    this.composer.addPass(this.sharpenPass);
    this.composer.addPass(this.chromaPass);
    this.composer.addPass(this.vignettePass);

    this.applyNoiseUniforms();
    this.applyAudioMapUniforms();
    this.applyInteractionUniforms();
    this.applyMaterialMode();
    this.applyLiquidUniforms();
    this.applyFogSettings();
    this.applyHdriSettings();
    this.applyPostFxSettings();

    this.renderer.domElement.addEventListener("pointermove", this.handlePointerMove);
    this.renderer.domElement.addEventListener("pointerleave", this.handlePointerLeave);
    this.resize();
    void this.setMatcapPreset(DEFAULT_MATCAP_ID);
  }

  private createSolidTexture(
    rgba: [number, number, number, number],
    colorSpace: THREE.ColorSpace,
  ): THREE.DataTexture {
    const data = new Uint8Array(rgba);
    const texture = new THREE.DataTexture(data, 1, 1);
    texture.colorSpace = colorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  private createReactiveGeometry(subdivisions: number): THREE.PlaneGeometry {
    const clamped = Math.min(2000, Math.max(64, Math.round(subdivisions)));
    return new THREE.PlaneGeometry(REACTIVE_WIDTH, REACTIVE_DEPTH, clamped, clamped);
  }

  private makeQuad(
    a: THREE.Vector3,
    b: THREE.Vector3,
    c: THREE.Vector3,
    d: THREE.Vector3,
  ): THREE.BufferGeometry {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array([
      a.x, a.y, a.z,
      b.x, b.y, b.z,
      c.x, c.y, c.z,
      a.x, a.y, a.z,
      c.x, c.y, c.z,
      d.x, d.y, d.z,
    ]);
    const uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1]);
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    geometry.computeVertexNormals();
    return geometry;
  }

  private createRingShape(outerWidth: number, outerDepth: number, innerWidth: number, innerDepth: number): THREE.Shape {
    const shape = new THREE.Shape();
    shape.moveTo(-outerWidth * 0.5, -outerDepth * 0.5);
    shape.lineTo(outerWidth * 0.5, -outerDepth * 0.5);
    shape.lineTo(outerWidth * 0.5, outerDepth * 0.5);
    shape.lineTo(-outerWidth * 0.5, outerDepth * 0.5);
    shape.closePath();

    const hole = new THREE.Path();
    hole.moveTo(-innerWidth * 0.5, -innerDepth * 0.5);
    hole.lineTo(-innerWidth * 0.5, innerDepth * 0.5);
    hole.lineTo(innerWidth * 0.5, innerDepth * 0.5);
    hole.lineTo(innerWidth * 0.5, -innerDepth * 0.5);
    hole.closePath();
    shape.holes.push(hole);
    return shape;
  }

  private createFrameMeshes(): THREE.Mesh[] {
    const meshes: THREE.Mesh[] = [];
    const innerTopWidth = REACTIVE_WIDTH - 0.4;
    const innerTopDepth = REACTIVE_DEPTH - 0.4;
    const innerBottomWidth = innerTopWidth + FUNNEL_SPREAD;
    const innerBottomDepth = innerTopDepth + FUNNEL_SPREAD;

    const topRingShape = this.createRingShape(
      FRAME_OUTER_WIDTH,
      FRAME_OUTER_DEPTH,
      innerTopWidth,
      innerTopDepth,
    );
    const topRingGeometry = new THREE.ShapeGeometry(topRingShape);
    topRingGeometry.rotateX(-Math.PI * 0.5);
    const topRing = new THREE.Mesh(topRingGeometry, this.frameMaterial);
    topRing.position.y = 0.0;
    meshes.push(topRing);

    const bottomRingShape = this.createRingShape(
      innerBottomWidth + 4.5,
      innerBottomDepth + 4.5,
      innerBottomWidth,
      innerBottomDepth,
    );
    const bottomRingGeometry = new THREE.ShapeGeometry(bottomRingShape);
    bottomRingGeometry.rotateX(-Math.PI * 0.5);
    const bottomRing = new THREE.Mesh(bottomRingGeometry, this.frameMaterial);
    bottomRing.position.y = -FRAME_DEPTH;
    meshes.push(bottomRing);

    const itl = new THREE.Vector3(-innerTopWidth * 0.5, 0, -innerTopDepth * 0.5);
    const itr = new THREE.Vector3(innerTopWidth * 0.5, 0, -innerTopDepth * 0.5);
    const ibr = new THREE.Vector3(innerTopWidth * 0.5, 0, innerTopDepth * 0.5);
    const ibl = new THREE.Vector3(-innerTopWidth * 0.5, 0, innerTopDepth * 0.5);

    const btl = new THREE.Vector3(-innerBottomWidth * 0.5, -FRAME_DEPTH, -innerBottomDepth * 0.5);
    const btr = new THREE.Vector3(innerBottomWidth * 0.5, -FRAME_DEPTH, -innerBottomDepth * 0.5);
    const bbr = new THREE.Vector3(innerBottomWidth * 0.5, -FRAME_DEPTH, innerBottomDepth * 0.5);
    const bbl = new THREE.Vector3(-innerBottomWidth * 0.5, -FRAME_DEPTH, innerBottomDepth * 0.5);

    const innerQuads = [
      this.makeQuad(itl, itr, btr, btl),
      this.makeQuad(itr, ibr, bbr, btr),
      this.makeQuad(ibr, ibl, bbl, bbr),
      this.makeQuad(ibl, itl, btl, bbl),
    ];
    for (const geometry of innerQuads) {
      meshes.push(new THREE.Mesh(geometry, this.frameMaterial));
    }

    for (const mesh of meshes) {
      mesh.castShadow = true;
      mesh.receiveShadow = false;
    }

    return meshes;
  }

  private configureMatcapTexture(texture: THREE.Texture): void {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
  }

  private getMatcapPreset(id: string): MatcapPreset | undefined {
    return MATCAP_PRESETS.find((preset) => preset.id === id);
  }

  private releaseCustomMatcap(): void {
    if (this.customMatcapTexture) {
      this.customMatcapTexture.dispose();
      this.customMatcapTexture = null;
    }
    if (this.customMatcapUrl) {
      URL.revokeObjectURL(this.customMatcapUrl);
      this.customMatcapUrl = null;
    }
  }

  private async getOrLoadMatcapTexture(id: string): Promise<THREE.Texture> {
    const cached = this.matcapCache.get(id);
    if (cached) {
      return cached;
    }

    const preset = this.getMatcapPreset(id);
    if (!preset) {
      throw new Error(`Unknown matcap preset: ${id}`);
    }

    const texture = await this.textureLoader.loadAsync(preset.url);
    this.configureMatcapTexture(texture);
    this.matcapCache.set(id, texture);
    return texture;
  }

  async setMatcapPreset(id: string): Promise<void> {
    const preset = this.getMatcapPreset(id);
    if (!preset) {
      throw new Error(`Unknown matcap preset: ${id}`);
    }

    const token = ++this.matcapLoadToken;
    const texture = await this.getOrLoadMatcapTexture(id);
    if (token !== this.matcapLoadToken) {
      return;
    }

    this.releaseCustomMatcap();
    this.uniforms.uMatcap.value = texture;
    this.activeMatcapId = id;
  }

  async setCustomMatcap(file: File): Promise<void> {
    const token = ++this.matcapLoadToken;
    const url = URL.createObjectURL(file);
    try {
      const texture = await this.textureLoader.loadAsync(url);
      if (token !== this.matcapLoadToken) {
        texture.dispose();
        URL.revokeObjectURL(url);
        return;
      }

      this.configureMatcapTexture(texture);
      this.releaseCustomMatcap();
      this.customMatcapTexture = texture;
      this.customMatcapUrl = url;
      this.uniforms.uMatcap.value = texture;
      this.activeMatcapId = CUSTOM_MATCAP_ID;
    } catch (error) {
      URL.revokeObjectURL(url);
      throw error;
    }
  }

  getActiveMatcapId(): string {
    return this.activeMatcapId;
  }

  getMaterialMode(): MaterialMode {
    return this.materialMode;
  }

  private releaseHdriTexture(): void {
    if (this.hdriTexture) {
      this.hdriTexture.dispose();
      this.hdriTexture = null;
    }
    if (this.hdriTextureUrl) {
      URL.revokeObjectURL(this.hdriTextureUrl);
      this.hdriTextureUrl = null;
    }
    this.hdriIsRGBE = false;
  }

  private releaseEnvTarget(): void {
    if (this.envTarget) {
      this.envTarget.dispose();
      this.envTarget = null;
    }
  }

  async loadHdriFile(file: File): Promise<void> {
    const token = ++this.hdriLoadToken;
    const url = URL.createObjectURL(file);
    const ext = file.name.toLowerCase().split(".").pop() ?? "";

    let texture: THREE.Texture;
    let isRGBE = false;
    try {
      if (ext === "hdr") {
        texture = await this.rgbeLoader.loadAsync(url);
        texture.colorSpace = THREE.LinearSRGBColorSpace;
        isRGBE = true;
      } else if (ext === "exr") {
        texture = await this.exrLoader.loadAsync(url);
        texture.colorSpace = THREE.LinearSRGBColorSpace;
      } else {
        texture = await this.textureLoader.loadAsync(url);
        texture.colorSpace = THREE.SRGBColorSpace;
      }
    } catch (error) {
      URL.revokeObjectURL(url);
      throw error;
    }

    if (token !== this.hdriLoadToken) {
      texture.dispose();
      URL.revokeObjectURL(url);
      return;
    }

    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;

    this.releaseHdriTexture();
    this.releaseEnvTarget();

    this.hdriTexture = texture;
    this.hdriTextureUrl = url;
    this.hdriIsRGBE = isRGBE;
    this.envTarget = this.pmremGenerator.fromEquirectangular(texture);

    this.uniforms.uHdriMap.value = texture;
    this.uniforms.uHdriIsRGBE.value = isRGBE ? 1 : 0;
    this.uniforms.uHasHdri.value = this.hdriParams.enabled ? 1 : 0;

    this.applyHdriSettings();
    this.applyFogSettings();
  }

  setMaterialMode(mode: MaterialMode): void {
    this.materialMode = mode;
    this.applyMaterialMode();
  }

  setNoiseParam<K extends keyof HoudiniNoiseParams>(key: K, value: HoudiniNoiseParams[K]): void {
    this.noiseParams[key] = value;
    this.applyNoiseUniforms();
  }

  setAudioMapParam<K extends keyof AudioMapParams>(key: K, value: AudioMapParams[K]): void {
    this.audioMapParams[key] = value;
    this.applyAudioMapUniforms();
  }

  setInteractionParam<K extends keyof InteractionParams>(key: K, value: InteractionParams[K]): void {
    this.interactionParams[key] = value;
    this.applyInteractionUniforms();
  }

  setQualityParam<K extends keyof QualityParams>(key: K, value: QualityParams[K]): void {
    if (key === "subdivisions") {
      const next = THREE.MathUtils.clamp(Math.round(value as number), 64, 2000);
      if (next === this.qualityParams.subdivisions) {
        return;
      }
      this.qualityParams.subdivisions = next;
      const nextGeometry = this.createReactiveGeometry(next);
      this.reactiveMesh.geometry.dispose();
      this.reactiveMesh.geometry = nextGeometry;
      this.reactiveGeometry = nextGeometry;
      return;
    }

    if (key === "pixelRatioMax") {
      this.qualityParams.pixelRatioMax = value as number;
      this.resize();
    }
  }

  setFogParam<K extends keyof FogParams>(key: K, value: FogParams[K]): void {
    this.fogParams[key] = value;
    this.applyFogSettings();
  }

  setLiquidParam<K extends keyof LiquidMetalParams>(key: K, value: LiquidMetalParams[K]): void {
    this.liquidParams[key] = value;
    this.applyLiquidUniforms();
  }

  setHdriParam<K extends keyof HdriParams>(key: K, value: HdriParams[K]): void {
    this.hdriParams[key] = value;
    this.applyHdriSettings();
    this.applyFogSettings();
  }

  setPostFxParam<K extends keyof PostFxParams>(key: K, value: PostFxParams[K]): void {
    this.postFxParams[key] = value;
    this.applyPostFxSettings();
  }

  setAudioBands(bands: AudioBands): void {
    this.audioLow = bands.low;
    this.audioMid = bands.mid;
    this.audioHigh = bands.high;
  }

  private applyNoiseUniforms(): void {
    this.uniforms.uBaseFreq.value = this.noiseParams.baseFreq;
    this.uniforms.uBaseOffset.value.set(
      this.noiseParams.baseOffsetX,
      this.noiseParams.baseOffsetY,
      this.noiseParams.baseOffsetZ,
    );
    this.uniforms.uLatticeWarp.value = this.noiseParams.latticeWarp;
    this.uniforms.uLatticeWarpFreq.value = this.noiseParams.latticeWarpFreq;
    this.uniforms.uComplement.value = this.noiseParams.complement;
    this.uniforms.uFinalAmp.value = this.noiseParams.finalAmp;
    this.uniforms.uTurboFreq.value = this.noiseParams.turboFreq;
    this.uniforms.uTurboAmp.value = this.noiseParams.turboAmp;
    this.uniforms.uRoughness.value = this.noiseParams.roughness;
    this.uniforms.uAttenuation.value = this.noiseParams.attenuation;
    this.uniforms.uTurbulence.value = this.noiseParams.turbulence;
    this.uniforms.uBaseWeight.value = this.noiseParams.baseWeight;
    this.uniforms.uTurboWeight.value = this.noiseParams.turboWeight;
    this.uniforms.uContourFreq.value = this.noiseParams.contourFreq;
    this.uniforms.uContourStrength.value = this.noiseParams.contourStrength;
    this.uniforms.uContourPower.value = this.noiseParams.contourPower;
    this.uniforms.uDetailScale.value = this.noiseParams.detailScale;
    this.uniforms.uDetailStrength.value = this.noiseParams.detailStrength;
    this.uniforms.uElevation.value = this.noiseParams.elevation;
  }

  private applyAudioMapUniforms(): void {
    this.uniforms.uLowGain.value = this.audioMapParams.lowGain;
    this.uniforms.uMidGain.value = this.audioMapParams.midGain;
    this.uniforms.uHighGain.value = this.audioMapParams.highGain;
    this.uniforms.uGlobalGain.value = this.audioMapParams.globalGain;
  }

  private applyInteractionUniforms(): void {
    this.uniforms.uMouseRadius.value = this.interactionParams.mouseRadius;
    this.uniforms.uEdgeFade.value = this.interactionParams.edgeFade;
    this.uniforms.uDriftSpeed.value = this.interactionParams.driftSpeed;
  }

  private applyMaterialMode(): void {
    this.uniforms.uMaterialMode.value = this.materialMode === "liquid" ? 1 : 0;
  }

  private applyLiquidUniforms(): void {
    this.uniforms.uLiquidBaseColor.value.set(this.liquidParams.baseColor);
    this.uniforms.uLiquidRoughness.value = this.liquidParams.roughness;
    this.uniforms.uLiquidMetalness.value = this.liquidParams.metalness;
    this.uniforms.uLiquidSpecular.value = this.liquidParams.specular;
    this.uniforms.uLiquidFresnel.value = this.liquidParams.fresnel;
    this.uniforms.uLiquidNormalStrength.value = this.liquidParams.normalStrength;
    this.uniforms.uLiquidEnvStrength.value = this.liquidParams.envStrength;
    this.uniforms.uLiquidClearcoat.value = this.liquidParams.clearcoat;
    this.uniforms.uLiquidClearcoatRoughness.value = this.liquidParams.clearcoatRoughness;
    this.uniforms.uLiquidRimStrength.value = this.liquidParams.rimStrength;
    this.uniforms.uLiquidShadowStrength.value = this.liquidParams.shadowStrength;
  }

  private applyFogSettings(): void {
    const enabled = this.fogParams.enabled;
    const modeLinear = this.fogParams.mode === "linear";
    const fogColor = new THREE.Color(this.fogParams.color);
    const density = THREE.MathUtils.clamp(this.fogParams.density, 0, 0.6);
    const falloff = THREE.MathUtils.clamp(this.fogParams.falloff, 0.2, 4.0);
    const near = THREE.MathUtils.clamp(this.fogParams.near, 0, 6000);
    const far = THREE.MathUtils.clamp(this.fogParams.far, near + 0.001, 8000);
    const amount = THREE.MathUtils.clamp(this.fogParams.amount, 0, 2);
    const height = THREE.MathUtils.clamp(this.fogParams.height, -200, 200);
    const heightFalloff = THREE.MathUtils.clamp(this.fogParams.heightFalloff, 0, 8);

    if (modeLinear) {
      if (!(this.scene.fog instanceof THREE.Fog) || this.scene.fog instanceof THREE.FogExp2) {
        this.scene.fog = new THREE.Fog(fogColor, near, far);
      }
      const fog = this.scene.fog;
      if (fog instanceof THREE.Fog) {
        fog.color.copy(fogColor);
        fog.near = near;
        fog.far = far;
      }
    } else {
      if (!(this.scene.fog instanceof THREE.FogExp2)) {
        this.scene.fog = new THREE.FogExp2(fogColor, 0);
      }
      const fog = this.scene.fog;
      if (fog instanceof THREE.FogExp2) {
        fog.color.copy(fogColor);
        fog.density = enabled ? density * falloff : 0;
      }
    }

    this.uniforms.uFogColor.value.copy(fogColor);
    this.uniforms.uFogMode.value = modeLinear ? 1 : 0;
    this.uniforms.uFogDensity.value = enabled ? density : 0;
    this.uniforms.uFogFalloff.value = falloff;
    this.uniforms.uFogNear.value = near;
    this.uniforms.uFogFar.value = far;
    this.uniforms.uFogAmount.value = enabled ? amount : 0;
    this.uniforms.uFogHeight.value = height;
    this.uniforms.uFogHeightFalloff.value = heightFalloff;

    const shouldShowHdriBg =
      this.hdriParams.enabled &&
      this.hdriParams.showBackground &&
      this.hdriTexture !== null;

    if (shouldShowHdriBg && this.hdriTexture) {
      this.scene.background = this.hdriTexture;
    } else {
      this.scene.background = new THREE.Color(this.fogParams.color);
    }
  }

  private applyHdriSettings(): void {
    const enabled = this.hdriParams.enabled && this.hdriTexture !== null && this.envTarget !== null;
    this.uniforms.uHasHdri.value = enabled ? 1 : 0;
    this.uniforms.uHdriIntensity.value = this.hdriParams.intensity;
    this.uniforms.uHdriRotation.value = this.hdriParams.rotation;
    this.uniforms.uHdriIsRGBE.value = this.hdriIsRGBE ? 1 : 0;

    if (enabled && this.envTarget) {
      this.scene.environment = this.envTarget.texture;
      this.scene.environmentIntensity = this.hdriParams.intensity;
    } else {
      this.scene.environment = null;
      this.scene.environmentIntensity = 0;
    }

    this.scene.environmentRotation.set(0, this.hdriParams.rotation, 0);
    this.scene.backgroundRotation.set(0, this.hdriParams.rotation, 0);
    this.scene.backgroundBlurriness = this.hdriParams.backgroundBlur;
    this.scene.backgroundIntensity = this.hdriParams.backgroundIntensity;
  }

  private applyPostFxSettings(): void {
    this.sharpenPass.uniforms.uAmount.value = this.postFxParams.sharpen;
    this.chromaPass.uniforms.uAmount.value = this.postFxParams.chromaticAberration;
    this.vignettePass.uniforms.uAmount.value = this.postFxParams.vignette;

    const enabled = this.postFxParams.enabled;
    this.sharpenPass.enabled = enabled && this.postFxParams.sharpen > 0.0001;
    this.chromaPass.enabled = enabled && this.postFxParams.chromaticAberration > 0.00001;
    this.vignettePass.enabled = enabled && this.postFxParams.vignette > 0.0001;
  }

  render(deltaSeconds: number, elapsedSeconds: number): void {
    const smoothing = 1 - Math.exp(-deltaSeconds * 14);
    this.uniforms.uMouseUv.value.lerp(this.pointerUvTarget, smoothing);

    const targetStrength = this.mouseStrengthTarget * this.interactionParams.mouseStrength;
    this.mouseStrengthCurrent += (targetStrength - this.mouseStrengthCurrent) * smoothing;

    this.uniforms.uTime.value = elapsedSeconds;
    this.uniforms.uMouseStrength.value = this.mouseStrengthCurrent;
    this.uniforms.uLow.value = this.audioLow;
    this.uniforms.uMid.value = this.audioMid;
    this.uniforms.uHigh.value = this.audioHigh;

    this.controls.update();

    const useComposer = this.sharpenPass.enabled || this.chromaPass.enabled || this.vignettePass.enabled;
    if (useComposer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  resize(): void {
    const width = this.container.clientWidth;
    const height = Math.max(this.container.clientHeight, 1);
    const dpr = Math.min(window.devicePixelRatio, this.qualityParams.pixelRatioMax);

    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height, false);
    this.composer.setPixelRatio(dpr);
    this.composer.setSize(width, height);

    this.sharpenPass.uniforms.uResolution.value.set(width * dpr, height * dpr);
    this.chromaPass.uniforms.uResolution.value.set(width * dpr, height * dpr);

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  dispose(): void {
    this.renderer.domElement.removeEventListener("pointermove", this.handlePointerMove);
    this.renderer.domElement.removeEventListener("pointerleave", this.handlePointerLeave);

    this.controls.dispose();
    this.reactiveGeometry.dispose();
    this.reactiveMaterial.dispose();
    this.reactiveDepthMaterial.dispose();
    this.frameMaterial.dispose();
    this.shadowCatcher.geometry.dispose();
    this.shadowCatcher.material.dispose();

    this.frameGroup.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
      }
    });

    for (const texture of this.matcapCache.values()) {
      texture.dispose();
    }
    this.matcapCache.clear();
    this.releaseCustomMatcap();
    this.releaseHdriTexture();
    this.releaseEnvTarget();

    this.fallbackMatcap.dispose();
    this.fallbackHdri.dispose();
    this.pmremGenerator.dispose();

    this.composer.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
