import "./style.css";
import { Clock } from "three";
import { AudioInputController } from "./audio/AudioInputController";
import { BandAnalyzer } from "./audio/BandAnalyzer";
import { createControlPanel, type ControlPanelApi } from "./ui/controls";
import {
  DEFAULT_AUDIO_MAP_PARAMS,
  DEFAULT_INTERACTION_PARAMS,
  DEFAULT_NOISE_PARAMS,
  DEFAULT_QUALITY_PARAMS,
  DEFAULT_SHADING_PARAMS,
  DisplacedPlaneScene,
  type AudioMapParams,
  type HoudiniNoiseParams,
  type InteractionParams,
  type QualityParams,
  type ShadingParams,
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
const shadingParams: ShadingParams = { ...DEFAULT_SHADING_PARAMS };

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
  shadingParams,
});

let controlPanel: ControlPanelApi;
controlPanel = createControlPanel(
  overlay,
  {
    noiseParams,
    audioMapParams,
    interactionParams,
    qualityParams,
    shadingParams,
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

    onShadingParamChange: (key, value): void => {
      shadingParams[key] = value;
      scene.setShadingParam(key, value);
    },
  },
);

controlPanel.setMicActive(false);
controlPanel.setPlayState(false);
controlPanel.setPlayEnabled(false);

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
