import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { GTAOPass } from "three/examples/jsm/postprocessing/GTAOPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import type { AudioBands } from "../audio/BandAnalyzer";
import { displacedPlaneFragmentShader } from "../shaders/displacedPlane.frag.glsl";
import { displacedPlaneVertexShader } from "../shaders/displacedPlane.vert.glsl";

export interface HoudiniNoiseParams {
  noiseCore: number;
  baseFreq: number;
  baseOffsetX: number;
  baseOffsetY: number;
  baseOffsetZ: number;
  domainScaleX: number;
  domainScaleY: number;
  domainRotationDeg: number;
  latticeWarp: number;
  latticeWarpFreq: number;
  complement: number;
  finalAmp: number;
  turboFreq: number;
  turboLacunarity: number;
  turboAmp: number;
  roughness: number;
  ridgeAmount: number;
  contrast: number;
  attenuation: number;
  turbulence: number;
  outputMin: number;
  outputMax: number;
  driftSpeed: number;
  detailFreq: number;
  detailStrength: number;
  audioMacroReactivity: number;
  audioDetailReactivity: number;
  symmetryMode: number;
  symmetryWidth: number;
  symmetryStretch: number;
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
  mouseNoiseOffset: number;
  parallaxStrength: number;
  edgeFade: number;
  edgeRadius: number;
  edgePower: number;
}

export interface QualityParams {
  subdivisions: number;
}

export interface CameraParams {
  fov: number;
  minDistance: number;
  maxDistance: number;
  minPolarDeg: number;
  maxPolarDeg: number;
  minAzimuthDeg: number;
  maxAzimuthDeg: number;
  centerLock: number;
  panRange: number;
  orbitTail: number;
  panTail: number;
}

export interface MaterialParams {
  diffuse: number;
  roughness: number;
  metalness: number;
  clearcoat: number;
  normalStrength: number;
  matcapBrightness: number;
  matcapContrast: number;
  matcapSaturation: number;
}

export type MaterialMode = "pbr" | "matcap";
export type MaterialMapSlot = "albedo" | "roughness" | "metalness" | "clearcoat" | "normal" | "matcap";

export type AmbientOcclusionMode = "none" | "gtao";

export interface AmbientOcclusionParams {
  mode: AmbientOcclusionMode;
  intensity: number;
  radius: number;
  thickness: number;
  falloff: number;
  denoiseRadius: number;
}

export interface ShadingParams {
  keyAzimuth: number;
  keyElevation: number;
  keyStrength: number;
  fillAzimuth: number;
  fillElevation: number;
  fillStrength: number;
  hemiStrength: number;
  diffuseBase: number;
  baseColorR: number;
  baseColorG: number;
  baseColorB: number;
}

export const DEFAULT_NOISE_PARAMS: HoudiniNoiseParams = {
  noiseCore: 0,
  baseFreq: 0.32,
  baseOffsetX: -8.0,
  baseOffsetY: -8.0,
  baseOffsetZ: -8.0,
  domainScaleX: 1.0,
  domainScaleY: 1.0,
  domainRotationDeg: 0.0,
  latticeWarp: 0.0,
  latticeWarpFreq: 0.05,
  complement: 0.0,
  finalAmp: 8.0,
  turboFreq: 0.7,
  turboLacunarity: 1.92,
  turboAmp: 1.0,
  roughness: 0.1,
  ridgeAmount: 0.0,
  contrast: 1.0,
  attenuation: 0.42,
  turbulence: 8.0,
  outputMin: -0.06,
  outputMax: 0.44,
  driftSpeed: 0.5,
  detailFreq: 3.35,
  detailStrength: 0.45,
  audioMacroReactivity: 1.0,
  audioDetailReactivity: 1.0,
  symmetryMode: 0,
  symmetryWidth: 0.08,
  symmetryStretch: 0.4,
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
  mouseRadius: 0.5,
  mouseStrength: 0.28,
  mouseNoiseOffset: 0,
  parallaxStrength: 0.0,
  edgeFade: 0.407,
  edgeRadius: 0.5,
  edgePower: 1.23,
};

export const DEFAULT_QUALITY_PARAMS: QualityParams = {
  subdivisions: 1024,
};

export const DEFAULT_CAMERA_PARAMS: CameraParams = {
  fov: 28,
  minDistance: 9.0,
  maxDistance: 28.6,
  minPolarDeg: 0,
  maxPolarDeg: 67,
  minAzimuthDeg: -180,
  maxAzimuthDeg: 180,
  centerLock: 0,
  panRange: 2.5,
  orbitTail: 1.0,
  panTail: 1.0,
};

export const DEFAULT_MATERIAL_PARAMS: MaterialParams = {
  diffuse: 2.0,
  roughness: 0.64,
  metalness: 1.0,
  clearcoat: 0.0,
  normalStrength: 0.0,
  matcapBrightness: 2.22,
  matcapContrast: 1.0,
  matcapSaturation: 1.0,
};

export const DEFAULT_MATERIAL_MODE: MaterialMode = "matcap";

export const DEFAULT_AMBIENT_OCCLUSION_PARAMS: AmbientOcclusionParams = {
  mode: "none",
  intensity: 1.86,
  radius: 0.36,
  thickness: 0.66,
  falloff: 0.10,
  denoiseRadius: 17,
};

export const DEFAULT_SHADING_PARAMS: ShadingParams = {
  keyAzimuth: -22,
  keyElevation: 68,
  keyStrength: 1.0,
  fillAzimuth: 0,
  fillElevation: 0,
  fillStrength: 1.28,
  hemiStrength: 0.22,
  diffuseBase: 0.0,
  baseColorR: 0.90,
  baseColorG: 0.90,
  baseColorB: 0.91,
};

export interface DisplacedPlaneSceneOptions {
  container: HTMLElement;
  noiseParams: HoudiniNoiseParams;
  audioMapParams: AudioMapParams;
  interactionParams: InteractionParams;
  qualityParams: QualityParams;
  cameraParams: CameraParams;
  materialMode: MaterialMode;
  materialParams: MaterialParams;
  ambientOcclusionParams: AmbientOcclusionParams;
  shadingParams: ShadingParams;
}

const PLANE_SIZE = 16;
const PLANE_WIDTH = PLANE_SIZE;
const PLANE_DEPTH = PLANE_SIZE;
const FLOOR_SIZE = 220;
const FLOOR_Y = -0.003;
const BACKGROUND_FLOOR_SIZE = 600;
const BACKGROUND_FLOOR_Y = -0.0038;
const UNDERLAY_Y = -0.0012;
const FLOOR_HOLE_MARGIN = 0.02;
const FLOOR_CIRCLE_RADIUS = 58;
const FLOOR_CIRCLE_FADE = 16;
const FLOOR_OPACITY = 1.0;
const BACKGROUND_HOLE_EXTRA = 0.03;
const BACKGROUND_CIRCLE_RADIUS = 100000;
const BACKGROUND_CIRCLE_FADE = 1;
const DEFAULT_MATCAP_URL = "/gorilla2.jpg";
const WORLD_UP = new THREE.Vector3(0, 1, 0);
const BASE_FREQ_SMOOTHING_HZ = 14;

interface PlaneUniforms {
  uTime: THREE.IUniform<number>;
  uNoiseCore: THREE.IUniform<number>;
  uBaseFreq: THREE.IUniform<number>;
  uBaseOffset: THREE.IUniform<THREE.Vector3>;
  uDomainScale: THREE.IUniform<THREE.Vector2>;
  uDomainRotation: THREE.IUniform<number>;
  uLatticeWarp: THREE.IUniform<number>;
  uLatticeWarpFreq: THREE.IUniform<number>;
  uComplement: THREE.IUniform<number>;
  uFinalAmp: THREE.IUniform<number>;
  uTurboFreq: THREE.IUniform<number>;
  uTurboLacunarity: THREE.IUniform<number>;
  uTurboAmp: THREE.IUniform<number>;
  uRoughness: THREE.IUniform<number>;
  uRidgeAmount: THREE.IUniform<number>;
  uContrast: THREE.IUniform<number>;
  uAttenuation: THREE.IUniform<number>;
  uTurbulence: THREE.IUniform<number>;
  uOutputMin: THREE.IUniform<number>;
  uOutputMax: THREE.IUniform<number>;
  uDetailFreq: THREE.IUniform<number>;
  uDetailStrength: THREE.IUniform<number>;
  uAudioMacroReactivity: THREE.IUniform<number>;
  uAudioDetailReactivity: THREE.IUniform<number>;
  uSymmetryMode: THREE.IUniform<number>;
  uSymmetryWidth: THREE.IUniform<number>;
  uSymmetryStretch: THREE.IUniform<number>;
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
  uMouseHover: THREE.IUniform<number>;
  uMouseMoveDir: THREE.IUniform<THREE.Vector2>;
  uMouseNoiseOffset: THREE.IUniform<number>;
  uPulseAge: THREE.IUniform<number>;
  uEdgeFade: THREE.IUniform<number>;
  uEdgeRadius: THREE.IUniform<number>;
  uEdgePower: THREE.IUniform<number>;
  uDriftSpeed: THREE.IUniform<number>;
  uIsFloor: THREE.IUniform<number>;
  uFloorHoleHalfSize: THREE.IUniform<THREE.Vector2>;
  uFloorCircleRadius: THREE.IUniform<number>;
  uFloorCircleFade: THREE.IUniform<number>;
  uFloorOpacity: THREE.IUniform<number>;
  uMaterialMode: THREE.IUniform<number>;
  uMatDiffuse: THREE.IUniform<number>;
  uMatRoughness: THREE.IUniform<number>;
  uMatMetalness: THREE.IUniform<number>;
  uMatClearcoat: THREE.IUniform<number>;
  uMatNormalStrength: THREE.IUniform<number>;
  uAlbedoMap: THREE.IUniform<THREE.Texture>;
  uRoughnessMap: THREE.IUniform<THREE.Texture>;
  uMetalnessMap: THREE.IUniform<THREE.Texture>;
  uClearcoatMap: THREE.IUniform<THREE.Texture>;
  uNormalMap: THREE.IUniform<THREE.Texture>;
  uMatcapMap: THREE.IUniform<THREE.Texture>;
  uUseAlbedoMap: THREE.IUniform<number>;
  uUseRoughnessMap: THREE.IUniform<number>;
  uUseMetalnessMap: THREE.IUniform<number>;
  uUseClearcoatMap: THREE.IUniform<number>;
  uUseNormalMap: THREE.IUniform<number>;
  uUseMatcapMap: THREE.IUniform<number>;
  uMatcapBrightness: THREE.IUniform<number>;
  uMatcapContrast: THREE.IUniform<number>;
  uMatcapSaturation: THREE.IUniform<number>;
  uKeyDir: THREE.IUniform<THREE.Vector3>;
  uFillDir: THREE.IUniform<THREE.Vector3>;
  uKeyStrength: THREE.IUniform<number>;
  uFillStrength: THREE.IUniform<number>;
  uHemiStrength: THREE.IUniform<number>;
  uDiffuseBase: THREE.IUniform<number>;
  uBaseColor: THREE.IUniform<THREE.Vector3>;
}

export class DisplacedPlaneScene {
  private readonly container: HTMLElement;
  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly controls: OrbitControls;
  private readonly composer: EffectComposer;
  private readonly renderPass: RenderPass;
  private readonly gtaoPass: GTAOPass;
  private readonly aoDepthTarget: THREE.WebGLRenderTarget;
  private readonly aoDepthTexture: THREE.DepthTexture;
  private readonly material: THREE.ShaderMaterial;
  private readonly floorMaterial: THREE.ShaderMaterial;
  private readonly backgroundFloorMaterial: THREE.ShaderMaterial;
  private readonly mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private readonly underlayMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private readonly floorMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private readonly backgroundFloorMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private geometry: THREE.PlaneGeometry;
  private underlayGeometry: THREE.PlaneGeometry;
  private floorGeometry: THREE.PlaneGeometry;
  private backgroundFloorGeometry: THREE.PlaneGeometry;
  private readonly uniforms: PlaneUniforms;
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointerNdc = new THREE.Vector2();
  private readonly pointerWorld = new THREE.Vector3();
  private readonly clearColorScratch = new THREE.Color();
  private readonly pointerUvTarget = new THREE.Vector2(0.5, 0.5);
  private readonly pointerMoveDirTarget = new THREE.Vector2();
  private readonly pointerMoveDirCurrent = new THREE.Vector2();
  private readonly pointerMoveDelta = new THREE.Vector2();
  private readonly floorPlane = new THREE.Plane(WORLD_UP, 0);
  private readonly controlsCenter = new THREE.Vector3(0, 0.1, 0);
  private readonly targetDelta = new THREE.Vector3();
  private readonly controlDragLastClient = new THREE.Vector2();
  private readonly rotateInertiaVelocity = new THREE.Vector2();
  private readonly panInertiaVelocity = new THREE.Vector3();
  private readonly panInertiaRight = new THREE.Vector3();
  private readonly panInertiaUp = new THREE.Vector3();
  private readonly rotateInertiaOffset = new THREE.Vector3();
  private readonly rotateInertiaAxis = new THREE.Vector3();
  private readonly parallaxMoveTarget = new THREE.Vector2();
  private readonly parallaxMoveCurrent = new THREE.Vector2();
  private readonly parallaxLastClient = new THREE.Vector2();
  private parallaxHasLastClient = false;
  private controlDragPointerId = -1;
  private controlDragLastTimeMs = 0;
  private controlDragMode: "none" | "rotate" | "pan" = "none";
  private controlDragActive = false;
  private readonly parallaxOffsetCurrent = new THREE.Vector3();
  private readonly parallaxOffsetTarget = new THREE.Vector3();
  private readonly parallaxForward = new THREE.Vector3();
  private readonly parallaxRight = new THREE.Vector3();
  private readonly parallaxUp = new THREE.Vector3();
  private mouseStrengthCurrent = 0;
  private mouseStrengthTarget = 0;
  private pulseAge = -1;
  private audioLow = 0;
  private audioMid = 0;
  private audioHigh = 0;
  private baseFreqCurrent = DEFAULT_NOISE_PARAMS.baseFreq;
  private baseFreqTarget = DEFAULT_NOISE_PARAMS.baseFreq;
  private soloNoisePlane = false;

  readonly renderer: THREE.WebGLRenderer;

  private noiseParams: HoudiniNoiseParams;
  private audioMapParams: AudioMapParams;
  private interactionParams: InteractionParams;
  private qualityParams: QualityParams;
  private cameraParams: CameraParams;
  private materialMode: MaterialMode;
  private materialParams: MaterialParams;
  private ambientOcclusionParams: AmbientOcclusionParams;
  private shadingParams: ShadingParams;
  private readonly textureLoader = new THREE.TextureLoader();
  private readonly mapTextures: Partial<Record<MaterialMapSlot, THREE.Texture>> = {};
  private readonly defaultAlbedoTexture: THREE.DataTexture;
  private readonly defaultScalarTexture: THREE.DataTexture;
  private readonly defaultNormalTexture: THREE.DataTexture;
  private readonly defaultMatcapTexture: THREE.Texture;

  private pointerEventToUv(event: PointerEvent): THREE.Vector2 | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      return null;
    }

    const normalizedX = (event.clientX - rect.left) / rect.width;
    const normalizedY = (event.clientY - rect.top) / rect.height;
    this.pointerNdc.set(normalizedX * 2 - 1, -(normalizedY * 2 - 1));

    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const hit = this.raycaster.ray.intersectPlane(this.floorPlane, this.pointerWorld);
    if (!hit) {
      return null;
    }

    const u = this.pointerWorld.x / PLANE_WIDTH + 0.5;
    // Plane is rotated -90deg on X, so world Z maps to inverted V.
    const v = 0.5 - this.pointerWorld.z / PLANE_DEPTH;
    if (u < 0 || u > 1 || v < 0 || v > 1) {
      return null;
    }

    return new THREE.Vector2(u, v);
  }

  private readonly handlePointerMove = (event: PointerEvent): void => {
    this.captureParallaxPointerDelta(event);
    const uv = this.pointerEventToUv(event);
    if (!uv) {
      this.mouseStrengthTarget = 0;
      this.pointerMoveDirTarget.set(0, 0);
      return;
    }
    this.pointerMoveDelta.copy(uv).sub(this.pointerUvTarget);
    if (this.pointerMoveDelta.lengthSq() > 0.00000001) {
      this.pointerMoveDelta.normalize();
      this.pointerMoveDirTarget.copy(this.pointerMoveDelta);
    }
    this.pointerUvTarget.copy(uv);
    this.mouseStrengthTarget = 1;
  };

  private readonly handlePointerDown = (event: PointerEvent): void => {
    this.parallaxLastClient.set(event.clientX, event.clientY);
    this.parallaxHasLastClient = true;
    if (event.button !== 0) {
      return;
    }
    const uv = this.pointerEventToUv(event);
    if (!uv) {
      return;
    }
    this.pointerUvTarget.copy(uv);
    this.uniforms.uMouseUv.value.copy(uv);
    this.mouseStrengthTarget = 1;
    this.pulseAge = 0;
  };

  private readonly handlePointerLeave = (): void => {
    this.mouseStrengthTarget = 0;
    this.pointerMoveDirTarget.set(0, 0);
    this.parallaxMoveTarget.set(0, 0);
    this.parallaxHasLastClient = false;
  };

  private readonly handleControlsPointerDown = (event: PointerEvent): void => {
    const isRotate = event.button === 0;
    const isPan = event.button === 2 && this.controls.enablePan;
    if (!isRotate && !isPan) {
      return;
    }
    this.controlDragMode = isRotate ? "rotate" : "pan";
    this.controlDragActive = true;
    this.controlDragPointerId = event.pointerId;
    this.controlDragLastClient.set(event.clientX, event.clientY);
    this.controlDragLastTimeMs = event.timeStamp;
    this.rotateInertiaVelocity.set(0, 0);
    this.panInertiaVelocity.set(0, 0, 0);
  };

  private readonly handleControlsPointerMove = (event: PointerEvent): void => {
    this.captureParallaxPointerDelta(event);
    if (!this.controlDragActive || event.pointerId !== this.controlDragPointerId) {
      return;
    }

    const dx = event.clientX - this.controlDragLastClient.x;
    const dy = event.clientY - this.controlDragLastClient.y;
    this.controlDragLastClient.set(event.clientX, event.clientY);

    const dtSec = Math.max(1 / 240, (event.timeStamp - this.controlDragLastTimeMs) / 1000);
    this.controlDragLastTimeMs = event.timeStamp;

    if (this.controlDragMode === "rotate") {
      const elementHeight = Math.max(1, this.renderer.domElement.clientHeight);
      const rotateDeltaX = (2 * Math.PI * dx * this.controls.rotateSpeed) / elementHeight;
      const rotateDeltaY = (2 * Math.PI * dy * this.controls.rotateSpeed) / elementHeight;
      const invDt = 1 / dtSec;
      this.rotateInertiaVelocity.set(
        THREE.MathUtils.lerp(this.rotateInertiaVelocity.x, rotateDeltaX * invDt, 0.65),
        THREE.MathUtils.lerp(this.rotateInertiaVelocity.y, rotateDeltaY * invDt, 0.65),
      );
      return;
    }

    if (this.controlDragMode === "pan") {
      const elementHeight = Math.max(1, this.renderer.domElement.clientHeight);
      const targetDistance =
        this.camera.position.distanceTo(this.controls.target) * Math.tan(THREE.MathUtils.degToRad(this.camera.fov * 0.5));
      const panScale = this.controls.panSpeed * (2 * targetDistance / elementHeight);
      const panX = dx * panScale;
      const panY = dy * panScale;

      const matrix = this.camera.matrix;
      this.panInertiaRight.setFromMatrixColumn(matrix, 0).normalize();
      this.panInertiaUp.setFromMatrixColumn(matrix, 1).normalize();

      const invDt = 1 / dtSec;
      const vx = -panX * invDt;
      const vy = panY * invDt;
      this.panInertiaVelocity
        .copy(this.panInertiaRight)
        .multiplyScalar(vx)
        .addScaledVector(this.panInertiaUp, vy);
    }
  };

  private readonly handleControlsPointerUp = (event: PointerEvent): void => {
    if (!this.controlDragActive || event.pointerId !== this.controlDragPointerId) {
      return;
    }
    this.controlDragActive = false;
    this.controlDragPointerId = -1;
    this.controlDragMode = "none";
  };

  private captureParallaxPointerDelta(event: PointerEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      return;
    }

    if (!this.parallaxHasLastClient) {
      this.parallaxLastClient.set(event.clientX, event.clientY);
      this.parallaxHasLastClient = true;
      return;
    }

    const dx = (event.clientX - this.parallaxLastClient.x) / rect.width;
    const dy = (event.clientY - this.parallaxLastClient.y) / rect.height;
    this.parallaxLastClient.set(event.clientX, event.clientY);

    this.parallaxMoveTarget.set(dx, dy);
    const maxLen = 0.08;
    if (this.parallaxMoveTarget.lengthSq() > maxLen * maxLen) {
      this.parallaxMoveTarget.setLength(maxLen);
    }
  }

  constructor(options: DisplacedPlaneSceneOptions) {
    this.container = options.container;
    this.noiseParams = { ...options.noiseParams };
    this.baseFreqTarget = THREE.MathUtils.clamp(this.noiseParams.baseFreq, 0.05, 1.0);
    this.baseFreqCurrent = this.baseFreqTarget;
    this.audioMapParams = { ...options.audioMapParams };
    this.interactionParams = { ...options.interactionParams };
    this.qualityParams = { ...options.qualityParams };
    this.cameraParams = { ...options.cameraParams };
    this.materialMode = options.materialMode;
    this.materialParams = { ...options.materialParams };
    this.ambientOcclusionParams = { ...options.ambientOcclusionParams };
    this.shadingParams = { ...options.shadingParams };
    this.defaultAlbedoTexture = this.createSolidTexture(255, 255, 255, THREE.SRGBColorSpace);
    this.defaultScalarTexture = this.createSolidTexture(255, 255, 255, THREE.NoColorSpace);
    this.defaultNormalTexture = this.createSolidTexture(128, 128, 255, THREE.NoColorSpace);
    this.defaultMatcapTexture = this.createDefaultMatcapTexture();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    this.renderer.domElement.classList.add("viewport-canvas");
    this.container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x05080c);
    this.scene.fog = new THREE.Fog(0x05080c, 8, 25);

    this.camera = new THREE.PerspectiveCamera(44, 1, 0.1, 120);
    this.camera.position.set(0, 8.4, 14.4);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.target.copy(this.controlsCenter);

    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);

    this.gtaoPass = new GTAOPass(this.scene, this.camera, 512, 512);
    this.gtaoPass.output = GTAOPass.OUTPUT.Default;
    this.composer.addPass(this.gtaoPass);

    this.aoDepthTexture = new THREE.DepthTexture(1, 1, THREE.UnsignedInt248Type);
    this.aoDepthTexture.format = THREE.DepthStencilFormat;
    this.aoDepthTexture.type = THREE.UnsignedInt248Type;
    this.aoDepthTarget = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      type: THREE.HalfFloatType,
      depthTexture: this.aoDepthTexture,
      depthBuffer: true,
      stencilBuffer: true,
    });
    this.aoDepthTarget.texture.generateMipmaps = false;
    this.gtaoPass.setGBuffer(this.aoDepthTexture);

    this.uniforms = {
      uTime: { value: 0 },
      uNoiseCore: { value: THREE.MathUtils.clamp(Math.round(this.noiseParams.noiseCore), 0, 2) },
      uBaseFreq: { value: this.baseFreqCurrent },
      uBaseOffset: {
        value: new THREE.Vector3(
          this.noiseParams.baseOffsetX,
          this.noiseParams.baseOffsetY,
          this.noiseParams.baseOffsetZ,
        ),
      },
      uDomainScale: { value: new THREE.Vector2(this.noiseParams.domainScaleX, this.noiseParams.domainScaleY) },
      uDomainRotation: { value: THREE.MathUtils.degToRad(this.noiseParams.domainRotationDeg) },
      uLatticeWarp: { value: this.noiseParams.latticeWarp },
      uLatticeWarpFreq: { value: this.noiseParams.latticeWarpFreq },
      uComplement: { value: this.noiseParams.complement },
      uFinalAmp: { value: this.noiseParams.finalAmp },
      uTurboFreq: { value: this.noiseParams.turboFreq },
      uTurboLacunarity: { value: this.noiseParams.turboLacunarity },
      uTurboAmp: { value: this.noiseParams.turboAmp },
      uRoughness: { value: this.noiseParams.roughness },
      uRidgeAmount: { value: this.noiseParams.ridgeAmount },
      uContrast: { value: this.noiseParams.contrast },
      uAttenuation: { value: this.noiseParams.attenuation },
      uTurbulence: { value: this.noiseParams.turbulence },
      uOutputMin: { value: this.noiseParams.outputMin },
      uOutputMax: { value: this.noiseParams.outputMax },
      uDetailFreq: { value: this.noiseParams.detailFreq },
      uDetailStrength: { value: this.noiseParams.detailStrength },
      uAudioMacroReactivity: { value: this.noiseParams.audioMacroReactivity },
      uAudioDetailReactivity: { value: this.noiseParams.audioDetailReactivity },
      uSymmetryMode: { value: this.noiseParams.symmetryMode },
      uSymmetryWidth: { value: this.noiseParams.symmetryWidth },
      uSymmetryStretch: { value: this.noiseParams.symmetryStretch },
      uLow: { value: 0 },
      uMid: { value: 0 },
      uHigh: { value: 0 },
      uLowGain: { value: this.audioMapParams.lowGain },
      uMidGain: { value: this.audioMapParams.midGain },
      uHighGain: { value: this.audioMapParams.highGain },
      uGlobalGain: { value: this.audioMapParams.globalGain },
      uMouseUv: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseRadius: { value: this.interactionParams.mouseRadius },
      uMouseStrength: { value: this.interactionParams.mouseStrength },
      uMouseHover: { value: 0 },
      uMouseMoveDir: { value: new THREE.Vector2(0, 0) },
      uMouseNoiseOffset: { value: this.interactionParams.mouseNoiseOffset },
      uPulseAge: { value: -1 },
      uEdgeFade: { value: this.interactionParams.edgeFade },
      uEdgeRadius: { value: this.interactionParams.edgeRadius },
      uEdgePower: { value: this.interactionParams.edgePower },
      uDriftSpeed: { value: this.noiseParams.driftSpeed },
      uIsFloor: { value: 0 },
      uFloorHoleHalfSize: {
        value: new THREE.Vector2(
          Math.max(0.001, PLANE_WIDTH * 0.5 - FLOOR_HOLE_MARGIN),
          Math.max(0.001, PLANE_DEPTH * 0.5 - FLOOR_HOLE_MARGIN),
        ),
      },
      uFloorCircleRadius: { value: FLOOR_CIRCLE_RADIUS },
      uFloorCircleFade: { value: FLOOR_CIRCLE_FADE },
      uFloorOpacity: { value: FLOOR_OPACITY },
      uMaterialMode: { value: this.materialMode === "matcap" ? 1 : 0 },
      uMatDiffuse: { value: this.materialParams.diffuse },
      uMatRoughness: { value: this.materialParams.roughness },
      uMatMetalness: { value: this.materialParams.metalness },
      uMatClearcoat: { value: this.materialParams.clearcoat },
      uMatNormalStrength: { value: this.materialParams.normalStrength },
      uAlbedoMap: { value: this.defaultAlbedoTexture },
      uRoughnessMap: { value: this.defaultScalarTexture },
      uMetalnessMap: { value: this.defaultScalarTexture },
      uClearcoatMap: { value: this.defaultScalarTexture },
      uNormalMap: { value: this.defaultNormalTexture },
      uMatcapMap: { value: this.defaultMatcapTexture },
      uUseAlbedoMap: { value: 0 },
      uUseRoughnessMap: { value: 0 },
      uUseMetalnessMap: { value: 0 },
      uUseClearcoatMap: { value: 0 },
      uUseNormalMap: { value: 0 },
      uUseMatcapMap: { value: 1 },
      uMatcapBrightness: { value: this.materialParams.matcapBrightness },
      uMatcapContrast: { value: this.materialParams.matcapContrast },
      uMatcapSaturation: { value: this.materialParams.matcapSaturation },
      uKeyDir: { value: new THREE.Vector3(0, 1, 0) },
      uFillDir: { value: new THREE.Vector3(0, 1, 0) },
      uKeyStrength: { value: this.shadingParams.keyStrength },
      uFillStrength: { value: this.shadingParams.fillStrength },
      uHemiStrength: { value: this.shadingParams.hemiStrength },
      uDiffuseBase: { value: this.shadingParams.diffuseBase },
      uBaseColor: {
        value: new THREE.Vector3(
          this.shadingParams.baseColorR,
          this.shadingParams.baseColorG,
          this.shadingParams.baseColorB,
        ),
      },
    };

    const floorUniforms: PlaneUniforms = {
      ...this.uniforms,
      uIsFloor: { value: 1 },
    };
    const backgroundFloorUniforms: PlaneUniforms = {
      ...this.uniforms,
      uIsFloor: { value: 1 },
      uFloorHoleHalfSize: {
        value: new THREE.Vector2(
          Math.max(0.001, PLANE_WIDTH * 0.5 - FLOOR_HOLE_MARGIN + BACKGROUND_HOLE_EXTRA),
          Math.max(0.001, PLANE_DEPTH * 0.5 - FLOOR_HOLE_MARGIN + BACKGROUND_HOLE_EXTRA),
        ),
      },
      uFloorCircleRadius: { value: BACKGROUND_CIRCLE_RADIUS },
      uFloorCircleFade: { value: BACKGROUND_CIRCLE_FADE },
      uFloorOpacity: { value: 1 },
    };

    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms as unknown as Record<string, THREE.IUniform>,
      vertexShader: displacedPlaneVertexShader,
      fragmentShader: displacedPlaneFragmentShader,
      side: THREE.DoubleSide,
    });
    this.floorMaterial = new THREE.ShaderMaterial({
      uniforms: floorUniforms as unknown as Record<string, THREE.IUniform>,
      vertexShader: displacedPlaneVertexShader,
      fragmentShader: displacedPlaneFragmentShader,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
    });
    this.backgroundFloorMaterial = new THREE.ShaderMaterial({
      uniforms: backgroundFloorUniforms as unknown as Record<string, THREE.IUniform>,
      vertexShader: displacedPlaneVertexShader,
      fragmentShader: displacedPlaneFragmentShader,
      side: THREE.FrontSide,
      transparent: false,
      depthWrite: true,
    });

    this.floorGeometry = this.createFloorGeometry();
    this.floorMesh = new THREE.Mesh(this.floorGeometry, this.floorMaterial);
    this.floorMesh.rotation.x = -Math.PI * 0.5;
    this.floorMesh.position.y = FLOOR_Y;
    this.floorMesh.renderOrder = -1;
    this.scene.add(this.floorMesh);

    this.backgroundFloorGeometry = this.createBackgroundFloorGeometry();
    this.backgroundFloorMesh = new THREE.Mesh(this.backgroundFloorGeometry, this.backgroundFloorMaterial);
    this.backgroundFloorMesh.rotation.x = -Math.PI * 0.5;
    this.backgroundFloorMesh.position.y = BACKGROUND_FLOOR_Y;
    this.backgroundFloorMesh.renderOrder = -2;
    this.scene.add(this.backgroundFloorMesh);

    this.geometry = this.createGeometry(this.qualityParams.subdivisions);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI * 0.5;
    this.mesh.renderOrder = 1;
    this.scene.add(this.mesh);

    this.underlayGeometry = this.createGeometry(this.qualityParams.subdivisions);
    this.underlayMesh = new THREE.Mesh(this.underlayGeometry, this.material);
    this.underlayMesh.rotation.x = -Math.PI * 0.5;
    this.underlayMesh.position.y = UNDERLAY_Y;
    this.underlayMesh.renderOrder = 0;
    this.scene.add(this.underlayMesh);

    this.applySceneVisibility();
    this.applyNoiseUniforms();
    this.applyAudioMapUniforms();
    this.applyInteractionUniforms();
    this.applyCameraParams();
    this.applyMaterialUniforms();
    this.applyShadingUniforms();
    this.applyAmbientOcclusionParams();

    this.renderer.domElement.addEventListener("pointermove", this.handlePointerMove);
    this.renderer.domElement.addEventListener("pointerdown", this.handlePointerDown);
    this.renderer.domElement.addEventListener("pointerleave", this.handlePointerLeave);
    this.renderer.domElement.addEventListener("pointerdown", this.handleControlsPointerDown);
    window.addEventListener("pointermove", this.handleControlsPointerMove);
    window.addEventListener("pointerup", this.handleControlsPointerUp);
    window.addEventListener("pointercancel", this.handleControlsPointerUp);
    this.resize();
  }

  private createSolidTexture(r: number, g: number, b: number, colorSpace: THREE.ColorSpace): THREE.DataTexture {
    const texture = new THREE.DataTexture(new Uint8Array([r, g, b, 255]), 1, 1, THREE.RGBAFormat);
    texture.colorSpace = colorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.needsUpdate = true;
    return texture;
  }

  private createDefaultMatcapTexture(): THREE.Texture {
    const texture = this.textureLoader.load(DEFAULT_MATCAP_URL, (loaded) => {
      loaded.colorSpace = THREE.SRGBColorSpace;
      loaded.wrapS = THREE.ClampToEdgeWrapping;
      loaded.wrapT = THREE.ClampToEdgeWrapping;
      loaded.minFilter = THREE.LinearFilter;
      loaded.magFilter = THREE.LinearFilter;
      loaded.generateMipmaps = true;
      loaded.needsUpdate = true;
    });
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    texture.needsUpdate = true;
    return texture;
  }

  private createGeometry(subdivisions: number): THREE.PlaneGeometry {
    const clamped = Math.min(1600, Math.max(512, Math.round(subdivisions)));
    return new THREE.PlaneGeometry(PLANE_WIDTH, PLANE_DEPTH, clamped, clamped);
  }

  private createFloorGeometry(): THREE.PlaneGeometry {
    return new THREE.PlaneGeometry(FLOOR_SIZE, FLOOR_SIZE, 1, 1);
  }

  private createBackgroundFloorGeometry(): THREE.PlaneGeometry {
    return new THREE.PlaneGeometry(BACKGROUND_FLOOR_SIZE, BACKGROUND_FLOOR_SIZE, 1, 1);
  }

  private applyNoiseUniforms(): void {
    const noiseCore = THREE.MathUtils.clamp(Math.round(this.noiseParams.noiseCore), 0, 2);
    const baseFreq = THREE.MathUtils.clamp(this.noiseParams.baseFreq, 0.05, 1.0);
    const domainScaleX = THREE.MathUtils.clamp(this.noiseParams.domainScaleX, 0.1, 4.0);
    const domainScaleY = THREE.MathUtils.clamp(this.noiseParams.domainScaleY, 0.1, 4.0);
    const domainRotation = THREE.MathUtils.degToRad(THREE.MathUtils.clamp(this.noiseParams.domainRotationDeg, -180, 180));
    const latticeWarpFreq = THREE.MathUtils.clamp(this.noiseParams.latticeWarpFreq, 0.05, 1.0);
    const turboFreq = THREE.MathUtils.clamp(this.noiseParams.turboFreq, 0.05, 1.0);
    const turboLacunarity = THREE.MathUtils.clamp(this.noiseParams.turboLacunarity, 1.01, 3.0);
    const turboAmp = THREE.MathUtils.clamp(this.noiseParams.turboAmp, 0, 3.0);
    const ridgeAmount = THREE.MathUtils.clamp(this.noiseParams.ridgeAmount, 0, 1.0);
    const contrast = THREE.MathUtils.clamp(this.noiseParams.contrast, 0, 4.0);
    const turbulence = THREE.MathUtils.clamp(this.noiseParams.turbulence, 1, 8.0);
    const driftSpeed = THREE.MathUtils.clamp(this.noiseParams.driftSpeed, 0, 0.65);
    const outputMin = Math.min(this.noiseParams.outputMin, this.noiseParams.outputMax);
    const outputMax = Math.max(this.noiseParams.outputMin, this.noiseParams.outputMax);
    const detailFreq = THREE.MathUtils.clamp(this.noiseParams.detailFreq, 0.5, 8.0);
    const detailStrength = THREE.MathUtils.clamp(this.noiseParams.detailStrength, 0, 2.0);
    const audioMacroReactivity = THREE.MathUtils.clamp(this.noiseParams.audioMacroReactivity, 0, 4);
    const audioDetailReactivity = THREE.MathUtils.clamp(this.noiseParams.audioDetailReactivity, 0, 4);
    const symmetryMode = THREE.MathUtils.clamp(Math.round(this.noiseParams.symmetryMode), 0, 2);
    const symmetryWidth = THREE.MathUtils.clamp(this.noiseParams.symmetryWidth, 0.001, 1.0);
    const symmetryStretch = THREE.MathUtils.clamp(this.noiseParams.symmetryStretch, 0, 3.0);

    this.uniforms.uNoiseCore.value = noiseCore;
    this.baseFreqTarget = baseFreq;
    this.uniforms.uBaseOffset.value.set(
      this.noiseParams.baseOffsetX,
      this.noiseParams.baseOffsetY,
      this.noiseParams.baseOffsetZ,
    );
    this.uniforms.uDomainScale.value.set(domainScaleX, domainScaleY);
    this.uniforms.uDomainRotation.value = domainRotation;
    this.uniforms.uLatticeWarp.value = this.noiseParams.latticeWarp;
    this.uniforms.uLatticeWarpFreq.value = latticeWarpFreq;
    this.uniforms.uComplement.value = this.noiseParams.complement;
    this.uniforms.uFinalAmp.value = this.noiseParams.finalAmp;
    this.uniforms.uTurboFreq.value = turboFreq;
    this.uniforms.uTurboLacunarity.value = turboLacunarity;
    this.uniforms.uTurboAmp.value = turboAmp;
    this.uniforms.uRoughness.value = this.noiseParams.roughness;
    this.uniforms.uRidgeAmount.value = ridgeAmount;
    this.uniforms.uContrast.value = contrast;
    this.uniforms.uAttenuation.value = THREE.MathUtils.clamp(this.noiseParams.attenuation, 0.05, 0.7);
    this.uniforms.uTurbulence.value = turbulence;
    this.uniforms.uDriftSpeed.value = driftSpeed;
    this.uniforms.uOutputMin.value = outputMin;
    this.uniforms.uOutputMax.value = outputMax;
    this.uniforms.uDetailFreq.value = detailFreq;
    this.uniforms.uDetailStrength.value = detailStrength;
    this.uniforms.uAudioMacroReactivity.value = audioMacroReactivity;
    this.uniforms.uAudioDetailReactivity.value = audioDetailReactivity;
    this.uniforms.uSymmetryMode.value = symmetryMode;
    this.uniforms.uSymmetryWidth.value = symmetryWidth;
    this.uniforms.uSymmetryStretch.value = symmetryStretch;
  }

  private applyAudioMapUniforms(): void {
    this.uniforms.uLowGain.value = this.audioMapParams.lowGain;
    this.uniforms.uMidGain.value = this.audioMapParams.midGain;
    this.uniforms.uHighGain.value = this.audioMapParams.highGain;
    this.uniforms.uGlobalGain.value = this.audioMapParams.globalGain;
  }

  private applyInteractionUniforms(): void {
    this.uniforms.uMouseRadius.value = THREE.MathUtils.clamp(this.interactionParams.mouseRadius, 0.5, 0.6);
    this.uniforms.uMouseStrength.value = THREE.MathUtils.clamp(this.interactionParams.mouseStrength, 0.2, 2.2);
    this.uniforms.uMouseNoiseOffset.value = this.interactionParams.mouseNoiseOffset >= 0.5 ? 1 : 0;
    this.uniforms.uEdgeFade.value = Math.max(0.1, this.interactionParams.edgeFade);
    this.uniforms.uEdgeRadius.value = THREE.MathUtils.clamp(this.interactionParams.edgeRadius, 0.1, 0.5);
    this.uniforms.uEdgePower.value = Math.max(0.9, this.interactionParams.edgePower);
  }

  private clearCameraParallaxOffset(): void {
    if (this.parallaxOffsetCurrent.lengthSq() <= 0.00000001) {
      return;
    }
    this.camera.position.sub(this.parallaxOffsetCurrent);
    this.controls.target.sub(this.parallaxOffsetCurrent);
    this.parallaxOffsetCurrent.set(0, 0, 0);
  }

  private applyCameraParallax(deltaSeconds: number, elapsedSeconds: number): void {
    const strength = THREE.MathUtils.clamp(this.interactionParams.parallaxStrength, 0, 2.0);
    if (strength <= 0.0001 || elapsedSeconds < 0) {
      this.parallaxOffsetTarget.set(0, 0, 0);
      this.parallaxMoveTarget.set(0, 0);
      this.parallaxMoveCurrent.set(0, 0);
      return;
    }

    const inputSmoothing = 1 - Math.exp(-deltaSeconds * 24);
    this.parallaxMoveCurrent.lerp(this.parallaxMoveTarget, inputSmoothing);
    this.parallaxMoveTarget.multiplyScalar(Math.exp(-deltaSeconds * 10));
    if (this.parallaxMoveTarget.lengthSq() < 0.00000001) {
      this.parallaxMoveTarget.set(0, 0);
    }

    this.parallaxForward.copy(this.controls.target).sub(this.camera.position);
    if (this.parallaxForward.lengthSq() < 0.00000001) {
      this.parallaxOffsetTarget.set(0, 0, 0);
      return;
    }
    this.parallaxForward.normalize();

    this.parallaxRight.crossVectors(this.parallaxForward, WORLD_UP);
    if (this.parallaxRight.lengthSq() < 0.00000001) {
      this.parallaxRight.set(1, 0, 0);
    } else {
      this.parallaxRight.normalize();
    }
    this.parallaxUp.crossVectors(this.parallaxRight, this.parallaxForward).normalize();

    const distance = this.camera.position.distanceTo(this.controls.target);
    const amplitude = distance * 1.9 * strength;
    const maxOffset = distance * 0.12;
    const offsetX = THREE.MathUtils.clamp(-this.parallaxMoveCurrent.x * amplitude, -maxOffset, maxOffset);
    const offsetY = THREE.MathUtils.clamp(this.parallaxMoveCurrent.y * amplitude * 0.85, -maxOffset, maxOffset);

    this.parallaxOffsetTarget.copy(this.parallaxRight).multiplyScalar(offsetX);
    this.parallaxOffsetTarget.addScaledVector(this.parallaxUp, offsetY);

    const smoothing = 1 - Math.exp(-deltaSeconds * 14);
    this.parallaxOffsetCurrent.lerp(this.parallaxOffsetTarget, smoothing);
    this.camera.position.add(this.parallaxOffsetCurrent);
    this.controls.target.add(this.parallaxOffsetCurrent);
  }

  private applyControlsReleaseInertia(deltaSeconds: number): void {
    if (this.controlDragActive) {
      return;
    }

    const orbitTail = THREE.MathUtils.clamp(this.cameraParams.orbitTail, 0, 3.0);
    const panTail = THREE.MathUtils.clamp(this.cameraParams.panTail, 0, 3.0);
    const orbitDecay = orbitTail <= 0.0001 ? 0 : Math.exp(-(Math.log(100) / orbitTail) * deltaSeconds);
    const panDecay = panTail <= 0.0001 ? 0 : Math.exp(-(Math.log(100) / panTail) * deltaSeconds);

    const rotateSpeed = this.rotateInertiaVelocity.length();
    if (rotateSpeed > 0.000001) {
      const yaw = this.rotateInertiaVelocity.x * deltaSeconds;
      const pitch = this.rotateInertiaVelocity.y * deltaSeconds;

      this.rotateInertiaOffset.copy(this.camera.position).sub(this.controls.target);
      if (this.rotateInertiaOffset.lengthSq() > 0.00000001) {
        this.rotateInertiaOffset.applyAxisAngle(WORLD_UP, -yaw);
        this.rotateInertiaAxis.crossVectors(WORLD_UP, this.rotateInertiaOffset);
        if (this.rotateInertiaAxis.lengthSq() > 0.00000001) {
          this.rotateInertiaAxis.normalize();
          this.rotateInertiaOffset.applyAxisAngle(this.rotateInertiaAxis, -pitch);
        }
        this.camera.position.copy(this.controls.target).add(this.rotateInertiaOffset);
      }

      this.rotateInertiaVelocity.multiplyScalar(orbitDecay);
      if (this.rotateInertiaVelocity.lengthSq() < 0.00000001) {
        this.rotateInertiaVelocity.set(0, 0);
      }
    }

    const panSpeed = this.panInertiaVelocity.length();
    if (panSpeed > 0.000001) {
      this.camera.position.addScaledVector(this.panInertiaVelocity, deltaSeconds);
      this.controls.target.addScaledVector(this.panInertiaVelocity, deltaSeconds);
      this.panInertiaVelocity.multiplyScalar(panDecay);
      if (this.panInertiaVelocity.lengthSq() < 0.00000001) {
        this.panInertiaVelocity.set(0, 0, 0);
      }
    }
  }

  private enforceCameraTargetBounds(): void {
    if (this.cameraParams.centerLock >= 0.5) {
      this.controls.target.copy(this.controlsCenter);
      return;
    }

    const panRange = Math.max(0, this.cameraParams.panRange);
    this.targetDelta.copy(this.controls.target).sub(this.controlsCenter);
    this.targetDelta.y = THREE.MathUtils.clamp(this.targetDelta.y, -panRange, panRange);

    const xzLength = Math.hypot(this.targetDelta.x, this.targetDelta.z);
    if (xzLength > panRange && xzLength > 0.000001) {
      const scale = panRange / xzLength;
      this.targetDelta.x *= scale;
      this.targetDelta.z *= scale;
    }

    this.controls.target.copy(this.controlsCenter).add(this.targetDelta);
  }

  private applyCameraParams(): void {
    const fov = THREE.MathUtils.clamp(this.cameraParams.fov, 20, 100);
    const minDistance = THREE.MathUtils.clamp(this.cameraParams.minDistance, 1, 80);
    const maxDistance = THREE.MathUtils.clamp(this.cameraParams.maxDistance, minDistance + 0.1, 120);
    const minPolarDeg = THREE.MathUtils.clamp(this.cameraParams.minPolarDeg, 0, 89);
    const maxPolarDeg = THREE.MathUtils.clamp(this.cameraParams.maxPolarDeg, minPolarDeg, 89);
    this.cameraParams.orbitTail = THREE.MathUtils.clamp(this.cameraParams.orbitTail, 0, 3.0);
    this.cameraParams.panTail = THREE.MathUtils.clamp(this.cameraParams.panTail, 0, 3.0);

    this.camera.fov = fov;
    this.camera.updateProjectionMatrix();

    this.controls.minDistance = minDistance;
    this.controls.maxDistance = maxDistance;
    this.controls.minPolarAngle = THREE.MathUtils.degToRad(minPolarDeg);
    this.controls.maxPolarAngle = THREE.MathUtils.degToRad(maxPolarDeg);
    this.controls.minAzimuthAngle = -Infinity;
    this.controls.maxAzimuthAngle = Infinity;
    this.controls.enablePan = this.cameraParams.centerLock < 0.5;
    this.enforceCameraTargetBounds();
  }

  private applyMaterialUniforms(): void {
    this.uniforms.uMaterialMode.value = this.materialMode === "matcap" ? 1 : 0;
    if (this.uniforms.uUseMatcapMap.value < 0.5) {
      this.uniforms.uMatcapMap.value = this.defaultMatcapTexture;
      this.uniforms.uUseMatcapMap.value = 1;
    }
    this.uniforms.uMatDiffuse.value = this.materialParams.diffuse;
    this.uniforms.uMatRoughness.value = this.materialParams.roughness;
    this.uniforms.uMatMetalness.value = this.materialParams.metalness;
    this.uniforms.uMatClearcoat.value = this.materialParams.clearcoat;
    this.uniforms.uMatNormalStrength.value = this.materialParams.normalStrength;
    this.uniforms.uMatcapBrightness.value = this.materialParams.matcapBrightness;
    this.uniforms.uMatcapContrast.value = this.materialParams.matcapContrast;
    this.uniforms.uMatcapSaturation.value = this.materialParams.matcapSaturation;
  }

  private setMaterialMapTexture(slot: MaterialMapSlot, texture: THREE.Texture, enabled: number): void {
    if (slot === "albedo") {
      this.uniforms.uAlbedoMap.value = texture;
      this.uniforms.uUseAlbedoMap.value = enabled;
      return;
    }
    if (slot === "roughness") {
      this.uniforms.uRoughnessMap.value = texture;
      this.uniforms.uUseRoughnessMap.value = enabled;
      return;
    }
    if (slot === "metalness") {
      this.uniforms.uMetalnessMap.value = texture;
      this.uniforms.uUseMetalnessMap.value = enabled;
      return;
    }
    if (slot === "clearcoat") {
      this.uniforms.uClearcoatMap.value = texture;
      this.uniforms.uUseClearcoatMap.value = enabled;
      return;
    }
    if (slot === "normal") {
      this.uniforms.uNormalMap.value = texture;
      this.uniforms.uUseNormalMap.value = enabled;
      return;
    }
    this.uniforms.uMatcapMap.value = texture;
    this.uniforms.uUseMatcapMap.value = enabled;
  }

  async setMaterialMap(slot: MaterialMapSlot, file: File | null): Promise<void> {
    if (!file) {
      const previous = this.mapTextures[slot];
      if (previous) {
        previous.dispose();
        delete this.mapTextures[slot];
      }
      const fallback =
        slot === "normal"
          ? this.defaultNormalTexture
          : slot === "albedo"
            ? this.defaultAlbedoTexture
            : slot === "matcap"
              ? this.defaultMatcapTexture
            : this.defaultScalarTexture;
      this.setMaterialMapTexture(slot, fallback, slot === "matcap" ? 1 : 0);
      return;
    }

    const url = URL.createObjectURL(file);
    try {
      const texture = await this.textureLoader.loadAsync(url);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.colorSpace = slot === "albedo" || slot === "matcap" ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      texture.needsUpdate = true;

      const previous = this.mapTextures[slot];
      if (previous) {
        previous.dispose();
      }
      this.mapTextures[slot] = texture;
      this.setMaterialMapTexture(slot, texture, 1);
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  private updateLightDirection(azimuthDeg: number, elevationDeg: number, out: THREE.Vector3): void {
    const azimuth = THREE.MathUtils.degToRad(azimuthDeg);
    const elevation = THREE.MathUtils.degToRad(THREE.MathUtils.clamp(elevationDeg, -89, 89));
    const cosElevation = Math.cos(elevation);
    out.set(
      Math.cos(azimuth) * cosElevation,
      Math.sin(elevation),
      Math.sin(azimuth) * cosElevation,
    ).normalize();
  }

  private applyShadingUniforms(): void {
    this.updateLightDirection(
      this.shadingParams.keyAzimuth,
      this.shadingParams.keyElevation,
      this.uniforms.uKeyDir.value,
    );
    this.updateLightDirection(
      this.shadingParams.fillAzimuth,
      this.shadingParams.fillElevation,
      this.uniforms.uFillDir.value,
    );

    this.uniforms.uKeyStrength.value = this.shadingParams.keyStrength;
    this.uniforms.uFillStrength.value = this.shadingParams.fillStrength;
    this.uniforms.uHemiStrength.value = this.shadingParams.hemiStrength;
    this.uniforms.uDiffuseBase.value = this.shadingParams.diffuseBase;
    this.uniforms.uBaseColor.value.set(
      this.shadingParams.baseColorR,
      this.shadingParams.baseColorG,
      this.shadingParams.baseColorB,
    );
  }

  private applyAmbientOcclusionParams(): void {
    const mode = this.ambientOcclusionParams.mode;
    this.gtaoPass.enabled = mode === "gtao";

    if (mode === "gtao") {
      const denoiseStrength = THREE.MathUtils.clamp(this.ambientOcclusionParams.denoiseRadius / 24, 0, 1);
      const denoiseRadius = THREE.MathUtils.lerp(2, 32, denoiseStrength);
      const lumaPhi = THREE.MathUtils.lerp(0.08, 18, denoiseStrength);
      const depthPhi = THREE.MathUtils.lerp(0.02, 4, denoiseStrength);
      const normalPhi = THREE.MathUtils.lerp(14, 8, denoiseStrength);
      this.gtaoPass.blendIntensity = this.ambientOcclusionParams.intensity;
      this.gtaoPass.updateGtaoMaterial({
        radius: this.ambientOcclusionParams.radius,
        thickness: this.ambientOcclusionParams.thickness,
        distanceFallOff: this.ambientOcclusionParams.falloff,
        samples: 32,
      });
      this.gtaoPass.updatePdMaterial({
        radius: denoiseRadius,
        lumaPhi,
        depthPhi,
        normalPhi,
        rings: 4,
        samples: 32,
        radiusExponent: 1.6,
      });
    }
  }

  private applySceneVisibility(): void {
    this.mesh.visible = true;
    const otherMeshesVisible = !this.soloNoisePlane;
    this.underlayMesh.visible = otherMeshesVisible;
    this.floorMesh.visible = otherMeshesVisible;
    this.backgroundFloorMesh.visible = otherMeshesVisible;
  }

  private renderAODepthBuffer(): void {
    const previousTarget = this.renderer.getRenderTarget();
    const previousAutoClear = this.renderer.autoClear;
    const previousClearAlpha = this.renderer.getClearAlpha();
    this.renderer.getClearColor(this.clearColorScratch);

    const materialColorWrite = this.material.colorWrite;
    const materialDepthWrite = this.material.depthWrite;
    const floorColorWrite = this.floorMaterial.colorWrite;
    const floorDepthWrite = this.floorMaterial.depthWrite;
    const backgroundFloorColorWrite = this.backgroundFloorMaterial.colorWrite;
    const backgroundFloorDepthWrite = this.backgroundFloorMaterial.depthWrite;

    this.material.colorWrite = false;
    this.material.depthWrite = true;
    this.floorMaterial.colorWrite = false;
    this.floorMaterial.depthWrite = true;
    this.backgroundFloorMaterial.colorWrite = false;
    this.backgroundFloorMaterial.depthWrite = true;

    try {
      this.renderer.setRenderTarget(this.aoDepthTarget);
      this.renderer.autoClear = true;
      this.renderer.setClearColor(0x000000, 1);
      this.renderer.clear(true, true, true);
      this.renderer.render(this.scene, this.camera);
    } finally {
      this.material.colorWrite = materialColorWrite;
      this.material.depthWrite = materialDepthWrite;
      this.floorMaterial.colorWrite = floorColorWrite;
      this.floorMaterial.depthWrite = floorDepthWrite;
      this.backgroundFloorMaterial.colorWrite = backgroundFloorColorWrite;
      this.backgroundFloorMaterial.depthWrite = backgroundFloorDepthWrite;
      this.renderer.autoClear = previousAutoClear;
      this.renderer.setRenderTarget(previousTarget);
      this.renderer.setClearColor(this.clearColorScratch, previousClearAlpha);
    }
  }

  setNoiseParam(key: keyof HoudiniNoiseParams, value: number): void {
    this.noiseParams[key] = value;
    this.applyNoiseUniforms();
  }

  setSoloNoisePlane(enabled: boolean): void {
    this.soloNoisePlane = enabled;
    this.applySceneVisibility();
  }

  setAudioMapParam(key: keyof AudioMapParams, value: number): void {
    this.audioMapParams[key] = value;
    this.applyAudioMapUniforms();
  }

  setInteractionParam(key: keyof InteractionParams, value: number): void {
    this.interactionParams[key] = value;
    this.applyInteractionUniforms();
  }

  setCameraParam(key: keyof CameraParams, value: number): void {
    this.cameraParams[key] = value;
    this.applyCameraParams();
  }

  setMaterialParam(key: keyof MaterialParams, value: number): void {
    this.materialParams[key] = value;
    this.applyMaterialUniforms();
  }

  setMaterialMode(mode: MaterialMode): void {
    this.materialMode = mode;
    this.applyMaterialUniforms();
  }

  setAmbientOcclusionParam(key: Exclude<keyof AmbientOcclusionParams, "mode">, value: number): void {
    this.ambientOcclusionParams[key] = value;
    this.applyAmbientOcclusionParams();
  }

  setAmbientOcclusionMode(mode: AmbientOcclusionMode): void {
    this.ambientOcclusionParams.mode = mode;
    this.applyAmbientOcclusionParams();
  }

  setQualityParam(key: keyof QualityParams, value: number): void {
    if (key !== "subdivisions") {
      return;
    }
    const next = THREE.MathUtils.clamp(Math.round(value), 512, 1600);
    if (next === this.qualityParams.subdivisions) {
      return;
    }
    this.qualityParams.subdivisions = next;
    const nextGeometry = this.createGeometry(next);
    const nextUnderlayGeometry = this.createGeometry(next);
    this.mesh.geometry.dispose();
    this.mesh.geometry = nextGeometry;
    this.geometry = nextGeometry;
    this.underlayMesh.geometry.dispose();
    this.underlayMesh.geometry = nextUnderlayGeometry;
    this.underlayGeometry = nextUnderlayGeometry;
  }

  getAudioMapParams(): AudioMapParams {
    return { ...this.audioMapParams };
  }

  setAudioBands(bands: AudioBands): void {
    this.audioLow = bands.low;
    this.audioMid = bands.mid;
    this.audioHigh = bands.high;
  }

  render(deltaSeconds: number, elapsedSeconds: number): void {
    const smoothing = 1 - Math.exp(-deltaSeconds * 14);
    this.uniforms.uMouseUv.value.lerp(this.pointerUvTarget, smoothing);
    this.mouseStrengthCurrent += (this.mouseStrengthTarget - this.mouseStrengthCurrent) * smoothing;
    this.pointerMoveDirCurrent.lerp(this.pointerMoveDirTarget, smoothing);
    this.uniforms.uMouseMoveDir.value.copy(this.pointerMoveDirCurrent);
    if (this.pointerMoveDirTarget.lengthSq() > 0) {
      this.pointerMoveDirTarget.multiplyScalar(Math.exp(-deltaSeconds * 8));
      if (this.pointerMoveDirTarget.lengthSq() < 0.00000001) {
        this.pointerMoveDirTarget.set(0, 0);
      }
    }
    if (this.pulseAge >= 0) {
      this.pulseAge += deltaSeconds;
      if (this.pulseAge > 2.0) {
        this.pulseAge = -1;
      }
    }

    // Smooth base frequency in log-space so size changes feel continuous.
    const baseFreqSmoothing = 1 - Math.exp(-deltaSeconds * BASE_FREQ_SMOOTHING_HZ);
    const baseFreqCurrent = Math.max(0.0001, this.baseFreqCurrent);
    const baseFreqTarget = Math.max(0.0001, this.baseFreqTarget);
    const nextBaseFreq = Math.exp(
      THREE.MathUtils.lerp(Math.log(baseFreqCurrent), Math.log(baseFreqTarget), baseFreqSmoothing),
    );
    this.baseFreqCurrent = Math.abs(nextBaseFreq - baseFreqTarget) < 0.00001 ? baseFreqTarget : nextBaseFreq;

    this.uniforms.uTime.value = elapsedSeconds;
    this.uniforms.uBaseFreq.value = this.baseFreqCurrent;
    this.uniforms.uMouseHover.value = this.mouseStrengthCurrent;
    this.uniforms.uPulseAge.value = this.pulseAge;
    this.uniforms.uLow.value = this.audioLow;
    this.uniforms.uMid.value = this.audioMid;
    this.uniforms.uHigh.value = this.audioHigh;

    this.clearCameraParallaxOffset();
    this.applyControlsReleaseInertia(deltaSeconds);
    this.controls.update();
    this.enforceCameraTargetBounds();
    this.applyCameraParallax(deltaSeconds, elapsedSeconds);
    if (this.ambientOcclusionParams.mode === "gtao") {
      this.renderAODepthBuffer();
    }
    this.composer.render();
  }

  resize(): void {
    const width = this.container.clientWidth;
    const height = Math.max(this.container.clientHeight, 1);
    const dpr = 1;

    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height, false);
    this.composer.setPixelRatio(dpr);
    this.composer.setSize(width, height);
    this.aoDepthTarget.setSize(Math.max(1, Math.floor(width * dpr)), Math.max(1, Math.floor(height * dpr)));
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  dispose(): void {
    this.renderer.domElement.removeEventListener("pointermove", this.handlePointerMove);
    this.renderer.domElement.removeEventListener("pointerdown", this.handlePointerDown);
    this.renderer.domElement.removeEventListener("pointerleave", this.handlePointerLeave);
    this.renderer.domElement.removeEventListener("pointerdown", this.handleControlsPointerDown);
    window.removeEventListener("pointermove", this.handleControlsPointerMove);
    window.removeEventListener("pointerup", this.handleControlsPointerUp);
    window.removeEventListener("pointercancel", this.handleControlsPointerUp);

    this.controls.dispose();
    this.backgroundFloorGeometry.dispose();
    this.backgroundFloorMaterial.dispose();
    this.floorGeometry.dispose();
    this.floorMaterial.dispose();
    this.underlayGeometry.dispose();
    this.geometry.dispose();
    this.material.dispose();
    this.renderPass.dispose();
    this.gtaoPass.dispose();
    this.aoDepthTarget.dispose();
    this.aoDepthTexture.dispose();
    this.composer.dispose();
    for (const texture of Object.values(this.mapTextures)) {
      texture?.dispose();
    }
    this.defaultAlbedoTexture.dispose();
    this.defaultScalarTexture.dispose();
    this.defaultNormalTexture.dispose();
    this.defaultMatcapTexture.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }

  setShadingParam(key: keyof ShadingParams, value: number): void {
    this.shadingParams[key] = value;
    this.applyShadingUniforms();
  }
}
