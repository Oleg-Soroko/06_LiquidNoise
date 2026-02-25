import "./style.css";
import { Clock } from "three";
import { AudioInputController } from "./audio/AudioInputController";
import { BandAnalyzer } from "./audio/BandAnalyzer";
import { createControlPanel, type ControlPanelApi } from "./ui/controls";
import {
  DEFAULT_AMBIENT_OCCLUSION_PARAMS,
  DEFAULT_AUDIO_MAP_PARAMS,
  DEFAULT_CAMERA_PARAMS,
  DEFAULT_INTERACTION_PARAMS,
  DEFAULT_MATERIAL_MODE,
  DEFAULT_MATERIAL_PARAMS,
  DEFAULT_NOISE_PARAMS,
  DEFAULT_QUALITY_PARAMS,
  DEFAULT_SHADING_PARAMS,
  DisplacedPlaneScene,
  type AmbientOcclusionMode,
  type AmbientOcclusionParams,
  type AudioMapParams,
  type CameraParams,
  type HoudiniNoiseParams,
  type InteractionParams,
  type MaterialMode,
  type MaterialMapSlot,
  type MaterialParams,
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
const cameraParams: CameraParams = { ...DEFAULT_CAMERA_PARAMS };
let materialMode: MaterialMode = DEFAULT_MATERIAL_MODE;
const materialParams: MaterialParams = { ...DEFAULT_MATERIAL_PARAMS };
const ambientOcclusionParams: AmbientOcclusionParams = { ...DEFAULT_AMBIENT_OCCLUSION_PARAMS };
const shadingParams: ShadingParams = { ...DEFAULT_SHADING_PARAMS };

const audioElement = new Audio();
audioElement.preload = "auto";
audioElement.crossOrigin = "anonymous";
audioElement.loop = true;
const DEFAULT_AUDIO_URL = "/Noise_Default.mp3";
const RECORDING_FPS = 60;
type FpsLimitMode = "30" | "60" | "unlimited";
const DEFAULT_FPS_LIMIT_MODE: FpsLimitMode = "60";

const audioController = new AudioInputController(audioElement);
const bandAnalyzer = new BandAnalyzer(audioMapParams.attack, audioMapParams.release);

const supportsMediaRecording = typeof window !== "undefined" && "MediaRecorder" in window;
let mediaRecorder: MediaRecorder | null = null;
let recordingStream: MediaStream | null = null;
let recordingChunks: BlobPart[] = [];
let recordingObjectUrl: string | null = null;
let isRecording = false;
let fpsLimitMode: FpsLimitMode = DEFAULT_FPS_LIMIT_MODE;
let fpsLimiterLastTickMs = 0;
let fpsLimiterAccumulatorMs = 0;

const getFpsFrameIntervalMs = (mode: FpsLimitMode): number => {
  if (mode === "unlimited") {
    return 0;
  }
  return 1000 / Number(mode);
};

const getRecordingMimeType = (): string | null => {
  if (!supportsMediaRecording) {
    return null;
  }
  const candidates = [
    "video/webm;codecs=vp9,opus",
    "video/webm;codecs=vp8,opus",
    "video/webm",
  ];
  for (const candidate of candidates) {
    if (MediaRecorder.isTypeSupported(candidate)) {
      return candidate;
    }
  }
  return null;
};

const stopRecordingTracks = (): void => {
  if (!recordingStream) {
    return;
  }
  for (const track of recordingStream.getTracks()) {
    track.stop();
  }
  recordingStream = null;
};

const downloadRecording = (blob: Blob): void => {
  if (recordingObjectUrl) {
    URL.revokeObjectURL(recordingObjectUrl);
    recordingObjectUrl = null;
  }
  const now = new Date();
  const pad = (value: number): string => value.toString().padStart(2, "0");
  const filename = `after-form-noise-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}.webm`;
  recordingObjectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = recordingObjectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const startRecording = (): { hasAudio: boolean } => {
  if (!supportsMediaRecording) {
    throw new Error("Recording is not supported in this browser.");
  }
  const canvas = viewport.querySelector<HTMLCanvasElement>("canvas");
  if (!canvas) {
    throw new Error("Viewport canvas not found.");
  }

  const canvasStream = canvas.captureStream(RECORDING_FPS);
  const stream = new MediaStream();
  for (const track of canvasStream.getVideoTracks()) {
    stream.addTrack(track);
  }
  const audioTrack = audioController.getRecordingAudioTrack();
  if (audioTrack) {
    stream.addTrack(audioTrack);
  }
  const mimeType = getRecordingMimeType();
  const recorder = mimeType
    ? new MediaRecorder(stream, { mimeType })
    : new MediaRecorder(stream);

  recordingChunks = [];
  recordingStream = stream;
  mediaRecorder = recorder;

  recorder.addEventListener("dataavailable", (event: BlobEvent) => {
    if (event.data && event.data.size > 0) {
      recordingChunks.push(event.data);
    }
  });

  recorder.addEventListener("stop", () => {
    const blobType = recorder.mimeType || "video/webm";
    const blob = new Blob(recordingChunks, { type: blobType });
    recordingChunks = [];
    stopRecordingTracks();
    mediaRecorder = null;
    isRecording = false;
    controlPanel.setRecordState(false);
    if (blob.size > 0) {
      downloadRecording(blob);
      controlPanel.setStatus("Recording saved.");
    } else {
      controlPanel.setStatus("Recording stopped (empty output).", "error");
    }
  });

  recorder.addEventListener("error", () => {
    stopRecordingTracks();
    mediaRecorder = null;
    isRecording = false;
    controlPanel.setRecordState(false);
    controlPanel.setStatus("Recording failed.", "error");
  });

  recorder.start();
  isRecording = true;
  controlPanel.setRecordState(true);
  return { hasAudio: stream.getAudioTracks().length > 0 };
};

const stopRecording = (): void => {
  if (!mediaRecorder) {
    return;
  }
  if (mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  } else {
    stopRecordingTracks();
    mediaRecorder = null;
    isRecording = false;
    controlPanel.setRecordState(false);
  }
};

const scene = new DisplacedPlaneScene({
  container: viewport,
  noiseParams,
  audioMapParams,
  interactionParams,
  qualityParams,
  cameraParams,
  materialMode,
  materialParams,
  ambientOcclusionParams,
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
    cameraParams,
    materialMode,
    materialParams,
    ambientOcclusionParams,
    shadingParams,
  },
  {
    onDefaultSelected: async (): Promise<void> => {
      try {
        controlPanel.setStatus("Loading default track...");
        if (audioController.mode === "mic") {
          await audioController.stopMic();
          controlPanel.setMicActive(false);
        }
        await audioController.loadUrl(DEFAULT_AUDIO_URL);
        controlPanel.setPlayEnabled(true);
        controlPanel.setPlayState(true);
        controlPanel.setStatus("Now playing: default track.");
      } catch (error) {
        controlPanel.setStatus(`Default track failed: ${formatError(error)}`, "error");
      }
    },

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

    onRecordToggle: async (): Promise<void> => {
      try {
        if (isRecording) {
          controlPanel.setStatus("Stopping recording...");
          stopRecording();
          return;
        }

        const { hasAudio } = startRecording();
        controlPanel.setStatus(hasAudio ? "Recording video + audio..." : "Recording video (no audio source).");
      } catch (error) {
        controlPanel.setRecordState(false);
        controlPanel.setStatus(`Recording failed: ${formatError(error)}`, "error");
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

    onFpsLimitModeChange: (mode: FpsLimitMode): void => {
      fpsLimitMode = mode;
      fpsLimiterLastTickMs = 0;
      fpsLimiterAccumulatorMs = 0;
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

    onCameraParamChange: (key, value): void => {
      cameraParams[key] = value;
      scene.setCameraParam(key, value);
    },

    onMaterialParamChange: (key, value): void => {
      materialParams[key] = value;
      scene.setMaterialParam(key, value);
    },

    onMaterialModeChange: (mode: MaterialMode): void => {
      materialMode = mode;
      scene.setMaterialMode(mode);
    },

    onMaterialMapSelected: async (slot: MaterialMapSlot, file: File | null): Promise<void> => {
      const mapLabel: Record<MaterialMapSlot, string> = {
        albedo: "Albedo",
        roughness: "Roughness",
        metalness: "Metalness",
        clearcoat: "Clearcoat",
        normal: "Normal",
        matcap: "Matcap",
      };

      try {
        if (file) {
          controlPanel.setStatus(`Loading ${mapLabel[slot]} map...`);
        } else {
          controlPanel.setStatus(`Clearing ${mapLabel[slot]} map...`);
        }
        await scene.setMaterialMap(slot, file);
        controlPanel.setStatus(file ? `${mapLabel[slot]} map loaded.` : `${mapLabel[slot]} map cleared.`);
      } catch (error) {
        controlPanel.setStatus(`${mapLabel[slot]} map failed: ${formatError(error)}`, "error");
      }
    },

    onAmbientOcclusionModeChange: (mode: AmbientOcclusionMode): void => {
      ambientOcclusionParams.mode = mode;
      scene.setAmbientOcclusionMode(mode);
    },

    onAmbientOcclusionParamChange: (key, value): void => {
      ambientOcclusionParams[key] = value;
      scene.setAmbientOcclusionParam(key, value);
    },

    onShadingParamChange: (key, value): void => {
      shadingParams[key] = value;
      scene.setShadingParam(key, value);
    },

    onSoloNoisePlaneToggle: (enabled): void => {
      scene.setSoloNoisePlane(enabled);
    },
  },
);

controlPanel.setMicActive(false);
controlPanel.setRecordEnabled(supportsMediaRecording);
controlPanel.setRecordState(false);
controlPanel.setPlayState(false);
controlPanel.setPlayEnabled(false);

const clock = new Clock();
let animationFrameId = 0;
let smoothedFps = 60;

function animate(timestampMs: number): void {
  if (fpsLimiterLastTickMs === 0) {
    fpsLimiterLastTickMs = timestampMs;
  }
  const tickDeltaMs = Math.max(0, timestampMs - fpsLimiterLastTickMs);
  fpsLimiterLastTickMs = timestampMs;

  const frameIntervalMs = getFpsFrameIntervalMs(fpsLimitMode);
  if (frameIntervalMs > 0) {
    fpsLimiterAccumulatorMs += tickDeltaMs;
    if (fpsLimiterAccumulatorMs < frameIntervalMs) {
      animationFrameId = window.requestAnimationFrame(animate);
      return;
    }
    fpsLimiterAccumulatorMs %= frameIntervalMs;
  } else {
    fpsLimiterAccumulatorMs = 0;
  }

  const delta = clock.getDelta();
  const elapsed = clock.elapsedTime;
  const instantFps = delta > 0 ? 1 / delta : 0;
  smoothedFps += (instantFps - smoothedFps) * 0.12;
  const fftData = audioController.readFrequencyData();
  const bands = bandAnalyzer.update(fftData);

  scene.setAudioBands(bands);
  controlPanel.setEnergy(bands.level);
  controlPanel.setFps(smoothedFps);
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
  stopRecording();
  stopRecordingTracks();
  if (recordingObjectUrl) {
    URL.revokeObjectURL(recordingObjectUrl);
    recordingObjectUrl = null;
  }
  window.cancelAnimationFrame(animationFrameId);
  window.removeEventListener("resize", handleResize);
  controlPanel.dispose();
  scene.dispose();
  audioController.dispose();
}

if (import.meta.hot) {
  import.meta.hot.dispose(dispose);
}
