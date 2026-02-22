import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { AudioBands } from "../audio/BandAnalyzer";
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
  outputMin: number;
  outputMax: number;
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
  edgeRadius: number;
  edgePower: number;
  driftSpeed: number;
}

export interface QualityParams {
  subdivisions: number;
  pixelRatioMax: number;
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
  cavitySlopeScale: number;
  cavityCurvatureScale: number;
  cavityPower: number;
  cavityStrength: number;
  cavityMax: number;
  shadeMin: number;
  shadeMax: number;
}

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
  outputMin: -1.0,
  outputMax: 1.0,
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
  edgeRadius: 0.48,
  edgePower: 1.0,
  driftSpeed: 0.115,
};

export const DEFAULT_QUALITY_PARAMS: QualityParams = {
  subdivisions: 256,
  pixelRatioMax: 2.0,
};

export const DEFAULT_SHADING_PARAMS: ShadingParams = {
  keyAzimuth: 161,
  keyElevation: 69,
  keyStrength: 0.28,
  fillAzimuth: -45,
  fillElevation: 34,
  fillStrength: 0.10,
  hemiStrength: 0.06,
  diffuseBase: 0.56,
  baseColorR: 0.90,
  baseColorG: 0.90,
  baseColorB: 0.91,
  cavitySlopeScale: 1.25,
  cavityCurvatureScale: 0.70,
  cavityPower: 0.78,
  cavityStrength: 0.58,
  cavityMax: 0.72,
  shadeMin: 0.02,
  shadeMax: 0.98,
};

export interface DisplacedPlaneSceneOptions {
  container: HTMLElement;
  noiseParams: HoudiniNoiseParams;
  audioMapParams: AudioMapParams;
  interactionParams: InteractionParams;
  qualityParams: QualityParams;
  shadingParams: ShadingParams;
}

const PLANE_SIZE = 16;
const PLANE_WIDTH = PLANE_SIZE;
const PLANE_DEPTH = PLANE_SIZE;
const FLOOR_SIZE = 220;
const FLOOR_Y = -0.003;
const UNDERLAY_Y = -0.0012;
const FLOOR_HOLE_MARGIN = 0.02;
const FLOOR_CIRCLE_RADIUS = 58;
const FLOOR_CIRCLE_FADE = 16;
const FLOOR_OPACITY = 1.0;
const WORLD_UP = new THREE.Vector3(0, 1, 0);

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
  uOutputMin: THREE.IUniform<number>;
  uOutputMax: THREE.IUniform<number>;
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
  uEdgeRadius: THREE.IUniform<number>;
  uEdgePower: THREE.IUniform<number>;
  uDriftSpeed: THREE.IUniform<number>;
  uIsFloor: THREE.IUniform<number>;
  uFloorHoleHalfSize: THREE.IUniform<THREE.Vector2>;
  uFloorCircleRadius: THREE.IUniform<number>;
  uFloorCircleFade: THREE.IUniform<number>;
  uFloorOpacity: THREE.IUniform<number>;
  uKeyDir: THREE.IUniform<THREE.Vector3>;
  uFillDir: THREE.IUniform<THREE.Vector3>;
  uKeyStrength: THREE.IUniform<number>;
  uFillStrength: THREE.IUniform<number>;
  uHemiStrength: THREE.IUniform<number>;
  uDiffuseBase: THREE.IUniform<number>;
  uBaseColor: THREE.IUniform<THREE.Vector3>;
  uCavitySlopeScale: THREE.IUniform<number>;
  uCavityCurvatureScale: THREE.IUniform<number>;
  uCavityPower: THREE.IUniform<number>;
  uCavityStrength: THREE.IUniform<number>;
  uCavityMax: THREE.IUniform<number>;
  uShadeMin: THREE.IUniform<number>;
  uShadeMax: THREE.IUniform<number>;
}

export class DisplacedPlaneScene {
  private readonly container: HTMLElement;
  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly controls: OrbitControls;
  private readonly material: THREE.ShaderMaterial;
  private readonly floorMaterial: THREE.ShaderMaterial;
  private readonly mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private readonly underlayMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private readonly floorMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private geometry: THREE.PlaneGeometry;
  private underlayGeometry: THREE.PlaneGeometry;
  private floorGeometry: THREE.PlaneGeometry;
  private readonly uniforms: PlaneUniforms;
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointerNdc = new THREE.Vector2();
  private readonly pointerWorld = new THREE.Vector3();
  private readonly pointerUvTarget = new THREE.Vector2(0.5, 0.5);
  private readonly floorPlane = new THREE.Plane(WORLD_UP, 0);
  private mouseStrengthCurrent = 0;
  private mouseStrengthTarget = 0;
  private audioLow = 0;
  private audioMid = 0;
  private audioHigh = 0;

  readonly renderer: THREE.WebGLRenderer;

  private noiseParams: HoudiniNoiseParams;
  private audioMapParams: AudioMapParams;
  private interactionParams: InteractionParams;
  private qualityParams: QualityParams;
  private shadingParams: ShadingParams;

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

    const u = this.pointerWorld.x / PLANE_WIDTH + 0.5;
    const v = this.pointerWorld.z / PLANE_DEPTH + 0.5;
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
    this.shadingParams = { ...options.shadingParams };

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
    this.controls.target.set(0, 0.1, 0);
    this.controls.minDistance = 5;
    this.controls.maxDistance = 28;
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
      uOutputMin: { value: this.noiseParams.outputMin },
      uOutputMax: { value: this.noiseParams.outputMax },
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
      uEdgeRadius: { value: this.interactionParams.edgeRadius },
      uEdgePower: { value: this.interactionParams.edgePower },
      uDriftSpeed: { value: this.interactionParams.driftSpeed },
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
      uCavitySlopeScale: { value: this.shadingParams.cavitySlopeScale },
      uCavityCurvatureScale: { value: this.shadingParams.cavityCurvatureScale },
      uCavityPower: { value: this.shadingParams.cavityPower },
      uCavityStrength: { value: this.shadingParams.cavityStrength },
      uCavityMax: { value: this.shadingParams.cavityMax },
      uShadeMin: { value: this.shadingParams.shadeMin },
      uShadeMax: { value: this.shadingParams.shadeMax },
    };

    const floorUniforms: PlaneUniforms = {
      ...this.uniforms,
      uIsFloor: { value: 1 },
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

    this.floorGeometry = this.createFloorGeometry();
    this.floorMesh = new THREE.Mesh(this.floorGeometry, this.floorMaterial);
    this.floorMesh.rotation.x = -Math.PI * 0.5;
    this.floorMesh.position.y = FLOOR_Y;
    this.floorMesh.renderOrder = -1;
    this.scene.add(this.floorMesh);

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

    this.applyNoiseUniforms();
    this.applyAudioMapUniforms();
    this.applyInteractionUniforms();
    this.applyShadingUniforms();

    this.renderer.domElement.addEventListener("pointermove", this.handlePointerMove);
    this.renderer.domElement.addEventListener("pointerleave", this.handlePointerLeave);
    this.resize();
  }

  private createGeometry(subdivisions: number): THREE.PlaneGeometry {
    const clamped = Math.min(1600, Math.max(48, Math.round(subdivisions)));
    return new THREE.PlaneGeometry(PLANE_WIDTH, PLANE_DEPTH, clamped, clamped);
  }

  private createFloorGeometry(): THREE.PlaneGeometry {
    return new THREE.PlaneGeometry(FLOOR_SIZE, FLOOR_SIZE, 1, 1);
  }

  private applyNoiseUniforms(): void {
    const baseFreq = THREE.MathUtils.clamp(this.noiseParams.baseFreq, 0.05, 1.0);
    const latticeWarpFreq = THREE.MathUtils.clamp(this.noiseParams.latticeWarpFreq, 0.05, 1.0);
    const turboFreq = THREE.MathUtils.clamp(this.noiseParams.turboFreq, 0.05, 1.0);
    const outputMin = Math.min(this.noiseParams.outputMin, this.noiseParams.outputMax);
    const outputMax = Math.max(this.noiseParams.outputMin, this.noiseParams.outputMax);

    this.uniforms.uBaseFreq.value = baseFreq;
    this.uniforms.uBaseOffset.value.set(
      this.noiseParams.baseOffsetX,
      this.noiseParams.baseOffsetY,
      this.noiseParams.baseOffsetZ,
    );
    this.uniforms.uLatticeWarp.value = this.noiseParams.latticeWarp;
    this.uniforms.uLatticeWarpFreq.value = latticeWarpFreq;
    this.uniforms.uComplement.value = this.noiseParams.complement;
    this.uniforms.uFinalAmp.value = this.noiseParams.finalAmp;
    this.uniforms.uTurboFreq.value = turboFreq;
    this.uniforms.uTurboAmp.value = this.noiseParams.turboAmp;
    this.uniforms.uRoughness.value = this.noiseParams.roughness;
    this.uniforms.uAttenuation.value = this.noiseParams.attenuation;
    this.uniforms.uTurbulence.value = this.noiseParams.turbulence;
    this.uniforms.uOutputMin.value = outputMin;
    this.uniforms.uOutputMax.value = outputMax;
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
    this.uniforms.uEdgeRadius.value = this.interactionParams.edgeRadius;
    this.uniforms.uEdgePower.value = this.interactionParams.edgePower;
    this.uniforms.uDriftSpeed.value = this.interactionParams.driftSpeed;
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
    this.uniforms.uCavitySlopeScale.value = this.shadingParams.cavitySlopeScale;
    this.uniforms.uCavityCurvatureScale.value = this.shadingParams.cavityCurvatureScale;
    this.uniforms.uCavityPower.value = this.shadingParams.cavityPower;
    this.uniforms.uCavityStrength.value = this.shadingParams.cavityStrength;
    this.uniforms.uCavityMax.value = this.shadingParams.cavityMax;
    this.uniforms.uShadeMin.value = Math.min(this.shadingParams.shadeMin, this.shadingParams.shadeMax);
    this.uniforms.uShadeMax.value = Math.max(this.shadingParams.shadeMin, this.shadingParams.shadeMax);
  }

  setNoiseParam(key: keyof HoudiniNoiseParams, value: number): void {
    this.noiseParams[key] = value;
    this.applyNoiseUniforms();
  }

  setAudioMapParam(key: keyof AudioMapParams, value: number): void {
    this.audioMapParams[key] = value;
    this.applyAudioMapUniforms();
  }

  setInteractionParam(key: keyof InteractionParams, value: number): void {
    this.interactionParams[key] = value;
    this.applyInteractionUniforms();
  }

  setQualityParam(key: keyof QualityParams, value: number): void {
    if (key === "subdivisions") {
      const next = THREE.MathUtils.clamp(Math.round(value), 48, 1600);
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
      return;
    }

    if (key === "pixelRatioMax") {
      this.qualityParams.pixelRatioMax = value;
      this.resize();
    }
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

    const targetStrength = this.mouseStrengthTarget * this.interactionParams.mouseStrength;
    this.mouseStrengthCurrent += (targetStrength - this.mouseStrengthCurrent) * smoothing;

    this.uniforms.uTime.value = elapsedSeconds;
    this.uniforms.uMouseStrength.value = this.mouseStrengthCurrent;
    this.uniforms.uLow.value = this.audioLow;
    this.uniforms.uMid.value = this.audioMid;
    this.uniforms.uHigh.value = this.audioHigh;

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  resize(): void {
    const width = this.container.clientWidth;
    const height = Math.max(this.container.clientHeight, 1);
    const dpr = Math.min(window.devicePixelRatio, this.qualityParams.pixelRatioMax);

    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  dispose(): void {
    this.renderer.domElement.removeEventListener("pointermove", this.handlePointerMove);
    this.renderer.domElement.removeEventListener("pointerleave", this.handlePointerLeave);

    this.controls.dispose();
    this.floorGeometry.dispose();
    this.floorMaterial.dispose();
    this.underlayGeometry.dispose();
    this.geometry.dispose();
    this.material.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }

  setShadingParam(key: keyof ShadingParams, value: number): void {
    this.shadingParams[key] = value;
    this.applyShadingUniforms();
  }
}
