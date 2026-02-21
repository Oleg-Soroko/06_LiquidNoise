import "./style.css";
import { Clock } from "three";
import { AudioInputController } from "./audio/AudioInputController";
import { BandAnalyzer } from "./audio/BandAnalyzer";
import { createControlPanel, type ControlPanelApi } from "./ui/controls";
import {
  CUSTOM_MATCAP_ID,
  DEFAULT_AUDIO_MAP_PARAMS,
  DEFAULT_FOG_PARAMS,
  DEFAULT_HDRI_PARAMS,
  DEFAULT_INTERACTION_PARAMS,
  DEFAULT_LIQUID_METAL_PARAMS,
  DEFAULT_MATERIAL_MODE,
  DEFAULT_MATCAP_ID,
  DEFAULT_NOISE_PARAMS,
  DEFAULT_POST_FX_PARAMS,
  DEFAULT_QUALITY_PARAMS,
  DisplacedPlaneScene,
  MATCAP_OPTIONS,
  type AudioMapParams,
  type FogParams,
  type HdriParams,
  type HoudiniNoiseParams,
  type InteractionParams,
  type LiquidMetalParams,
  type MaterialMode,
  type PostFxParams,
  type QualityParams,
} from "./visual/DisplacedPlaneScene";

function requireElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Missing required element: ${selector}`);
  }
  return element;
}

function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "Unknown error";
}

const app = requireElement<HTMLDivElement>("#app");
app.innerHTML = `
  <main class="app-shell">
    <div id="viewport" class="viewport"></div>
    <div id="overlay" class="overlay"></div>
  </main>
`;

const viewport = requireElement<HTMLDivElement>("#viewport");
const overlay = requireElement<HTMLDivElement>("#overlay");

const noiseParams: HoudiniNoiseParams = { ...DEFAULT_NOISE_PARAMS };
const audioMapParams: AudioMapParams = { ...DEFAULT_AUDIO_MAP_PARAMS };
const interactionParams: InteractionParams = { ...DEFAULT_INTERACTION_PARAMS };
const qualityParams: QualityParams = { ...DEFAULT_QUALITY_PARAMS };
const fogParams: FogParams = { ...DEFAULT_FOG_PARAMS };
const liquidParams: LiquidMetalParams = { ...DEFAULT_LIQUID_METAL_PARAMS };
const hdriParams: HdriParams = { ...DEFAULT_HDRI_PARAMS };
const postFxParams: PostFxParams = { ...DEFAULT_POST_FX_PARAMS };
let selectedMatcapId = DEFAULT_MATCAP_ID;
let materialMode: MaterialMode = DEFAULT_MATERIAL_MODE;

const audioElement = new Audio();
audioElement.preload = "auto";
audioElement.crossOrigin = "anonymous";
audioElement.loop = true;

const audioController = new AudioInputController(audioElement);
const bandAnalyzer = new BandAnalyzer(audioMapParams.attack, audioMapParams.release);

const scene = new DisplacedPlaneScene({
  container: viewport,
  noiseParams,
  audioMapParams,
  interactionParams,
  qualityParams,
  fogParams,
  liquidMetalParams: liquidParams,
  hdriParams,
  postFxParams,
  materialMode,
});

let controlPanel: ControlPanelApi;
controlPanel = createControlPanel(
  overlay,
  {
    noiseParams,
    audioMapParams,
    interactionParams,
    qualityParams,
    fogParams,
    liquidParams,
    hdriParams,
    postFxParams,
    matcapOptions: MATCAP_OPTIONS,
    selectedMatcapId,
    materialMode,
  },
  {
    onFileSelected: async (file: File): Promise<void> => {
      try {
        controlPanel.setStatus(`Loading ${file.name}...`);
        if (audioController.mode === "mic") {
          await audioController.stopMic();
          controlPanel.setMicActive(false);
        }
        await audioController.loadFile(file);
        controlPanel.setPlayEnabled(true);
        controlPanel.setPlayState(true);
        controlPanel.setStatus(`Now playing: ${file.name}`);
      } catch (error) {
        controlPanel.setStatus(`Audio load failed: ${formatError(error)}`, "error");
      }
    },

    onMicToggle: async (): Promise<void> => {
      try {
        if (audioController.mode === "mic") {
          await audioController.stopMic();
          controlPanel.setMicActive(false);
          controlPanel.setPlayEnabled(audioController.hasLoadedFile());
          controlPanel.setPlayState(audioController.isFilePlaying());
          controlPanel.setStatus("Microphone stopped.");
          return;
        }

        await audioController.startMic();
        controlPanel.setMicActive(true);
        controlPanel.setPlayEnabled(false);
        controlPanel.setPlayState(false);
        controlPanel.setStatus("Microphone capture is active.");
      } catch (error) {
        controlPanel.setStatus(`Mic access failed: ${formatError(error)}`, "error");
      }
    },

    onPlayToggle: async (): Promise<void> => {
      try {
        const playing = await audioController.togglePlayback();
        if (!audioController.hasLoadedFile()) {
          controlPanel.setStatus("Load an audio file before playing.", "error");
          return;
        }
        controlPanel.setPlayState(playing);
        controlPanel.setStatus(playing ? "File playback active." : "File playback paused.");
      } catch (error) {
        controlPanel.setStatus(`Playback failed: ${formatError(error)}`, "error");
      }
    },

    onMatcapPresetSelect: async (id: string): Promise<void> => {
      try {
        controlPanel.setStatus(`Switching matcap to ${id}...`);
        await scene.setMatcapPreset(id);
        selectedMatcapId = scene.getActiveMatcapId();
        controlPanel.setMatcapSelection(selectedMatcapId);
        controlPanel.setStatus(`Matcap preset: ${id}`);
      } catch (error) {
        controlPanel.setStatus(`Matcap load failed: ${formatError(error)}`, "error");
      }
    },

    onMatcapFileSelected: async (file: File): Promise<void> => {
      try {
        controlPanel.setStatus(`Loading custom matcap: ${file.name}...`);
        await scene.setCustomMatcap(file);
        selectedMatcapId = CUSTOM_MATCAP_ID;
        controlPanel.setMatcapSelection(selectedMatcapId);
        controlPanel.setStatus(`Custom matcap loaded: ${file.name}`);
      } catch (error) {
        controlPanel.setStatus(`Custom matcap failed: ${formatError(error)}`, "error");
      }
    },

    onMaterialModeChange: (mode: MaterialMode): void => {
      materialMode = mode;
      scene.setMaterialMode(mode);
      controlPanel.setMaterialMode(mode);
      controlPanel.setStatus(mode === "liquid" ? "Material mode: Liquid Metal." : "Material mode: Matcap.");
    },

    onHdriFileSelected: async (file: File): Promise<void> => {
      try {
        controlPanel.setStatus(`Loading HDRI: ${file.name}...`);
        await scene.loadHdriFile(file);
        controlPanel.setStatus(`HDRI loaded: ${file.name}. Enable HDRI Lighting in the HDRI panel.`);
      } catch (error) {
        controlPanel.setStatus(`HDRI load failed: ${formatError(error)}`, "error");
      }
    },

    onNoiseParamChange: (key, value): void => {
      noiseParams[key] = value;
      scene.setNoiseParam(key, value);
    },

    onAudioMapParamChange: (key, value): void => {
      audioMapParams[key] = value;
      scene.setAudioMapParam(key, value);
      bandAnalyzer.setEnvelope(audioMapParams.attack, audioMapParams.release);
    },

    onInteractionParamChange: (key, value): void => {
      interactionParams[key] = value;
      scene.setInteractionParam(key, value);
    },

    onQualityParamChange: (key, value): void => {
      qualityParams[key] = value;
      scene.setQualityParam(key, value);
    },

    onFogParamChange: (key, value): void => {
      fogParams[key] = value;
      scene.setFogParam(key, value);
    },

    onLiquidParamChange: (key, value): void => {
      liquidParams[key] = value;
      scene.setLiquidParam(key, value);
    },

    onHdriParamChange: (key, value): void => {
      hdriParams[key] = value;
      scene.setHdriParam(key, value);
    },

    onPostFxParamChange: (key, value): void => {
      postFxParams[key] = value;
      scene.setPostFxParam(key, value);
    },
  },
);

controlPanel.setMicActive(false);
controlPanel.setPlayState(false);
controlPanel.setPlayEnabled(false);
controlPanel.setMatcapSelection(selectedMatcapId);
controlPanel.setMaterialMode(materialMode);

const clock = new Clock();
let animationFrameId = 0;

function animate(): void {
  const delta = clock.getDelta();
  const elapsed = clock.elapsedTime;
  const fftData = audioController.readFrequencyData();
  const bands = bandAnalyzer.update(fftData);

  scene.setAudioBands(bands);
  controlPanel.setEnergy(bands.level);
  scene.render(delta, elapsed);

  animationFrameId = window.requestAnimationFrame(animate);
}

const handleResize = (): void => {
  scene.resize();
};

window.addEventListener("resize", handleResize);
scene.resize();
animationFrameId = window.requestAnimationFrame(animate);

function dispose(): void {
  window.cancelAnimationFrame(animationFrameId);
  window.removeEventListener("resize", handleResize);
  controlPanel.dispose();
  scene.dispose();
  audioController.dispose();
}

if (import.meta.hot) {
  import.meta.hot.dispose(dispose);
}
