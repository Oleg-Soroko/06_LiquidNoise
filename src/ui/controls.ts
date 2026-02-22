import type {
  AudioMapParams,
  HoudiniNoiseParams,
  InteractionParams,
  QualityParams,
  ShadingParams,
} from "../visual/DisplacedPlaneScene";

export interface ControlPanelState {
  noiseParams: HoudiniNoiseParams;
  audioMapParams: AudioMapParams;
  interactionParams: InteractionParams;
  qualityParams: QualityParams;
  shadingParams: ShadingParams;
}

export interface ControlCallbacks {
  onFileSelected(file: File): Promise<void> | void;
  onMicToggle(): Promise<void> | void;
  onPlayToggle(): Promise<void> | void;
  onNoiseParamChange(key: keyof HoudiniNoiseParams, value: number): void;
  onAudioMapParamChange(key: keyof AudioMapParams, value: number): void;
  onInteractionParamChange(key: keyof InteractionParams, value: number): void;
  onQualityParamChange(key: keyof QualityParams, value: number): void;
  onShadingParamChange(key: keyof ShadingParams, value: number): void;
}

export interface ControlPanelApi {
  setStatus(text: string, kind?: "info" | "error"): void;
  setEnergy(level: number): void;
  setMicActive(active: boolean): void;
  setPlayState(playing: boolean): void;
  setPlayEnabled(enabled: boolean): void;
  dispose(): void;
}

interface RangeSpec {
  label: string;
  min: number;
  max: number;
  step: number;
  precision: number;
  suffix?: string;
  changeOnly?: boolean;
}

function requireElement<T extends HTMLElement>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Missing required control element: ${selector}`);
  }
  return element;
}

function formatValue(value: number, precision: number, suffix = ""): string {
  return `${value.toFixed(precision)}${suffix}`;
}

function createFolder(title: string, open: boolean): HTMLDetailsElement {
  const details = document.createElement("details");
  details.className = "folder";
  details.open = open;

  const summary = document.createElement("summary");
  summary.textContent = title;
  details.appendChild(summary);

  const body = document.createElement("div");
  body.className = "folder-body";
  details.appendChild(body);
  return details;
}

export function createControlPanel(
  root: HTMLElement,
  initialState: ControlPanelState,
  callbacks: ControlCallbacks,
): ControlPanelApi {
  root.innerHTML = `
    <section class="panel">
      <h1 class="title">Resonance Forge</h1>
      <p class="subtitle">Houdini-style displaced plane, driven by audio bands.</p>
      <div class="action-row">
        <label class="file-button">
          <input id="audio-file-input" type="file" accept="audio/*" />
          <span>Load Audio</span>
        </label>
        <button id="mic-toggle-btn" type="button">Use Microphone</button>
        <button id="play-toggle-btn" type="button" disabled>Play</button>
      </div>
      <div class="meter">
        <div id="energy-fill" class="meter-fill"></div>
      </div>
      <p id="status-line" class="status">Idle. Load a file or enable your microphone.</p>
      <div id="folders-root" class="folders-root"></div>
    </section>
    <div class="hint">Orbit: left drag | Pan: right drag | Zoom: wheel</div>
  `;

  const fileInput = requireElement<HTMLInputElement>(root, "#audio-file-input");
  const micButton = requireElement<HTMLButtonElement>(root, "#mic-toggle-btn");
  const playButton = requireElement<HTMLButtonElement>(root, "#play-toggle-btn");
  const energyFill = requireElement<HTMLDivElement>(root, "#energy-fill");
  const statusLine = requireElement<HTMLParagraphElement>(root, "#status-line");
  const foldersRoot = requireElement<HTMLDivElement>(root, "#folders-root");

  const noiseParams: HoudiniNoiseParams = { ...initialState.noiseParams };
  const audioMapParams: AudioMapParams = { ...initialState.audioMapParams };
  const interactionParams: InteractionParams = { ...initialState.interactionParams };
  const qualityParams: QualityParams = { ...initialState.qualityParams };
  const shadingParams: ShadingParams = { ...initialState.shadingParams };

  const cleanup: Array<() => void> = [];

  let micBusy = false;
  let playBusy = false;
  let playEnabled = false;

  const refreshButtonState = (): void => {
    micButton.disabled = micBusy;
    playButton.disabled = playBusy || !playEnabled;
  };

  const bindRange = <T extends object, K extends keyof T>(
    body: HTMLElement,
    state: T,
    key: K,
    spec: RangeSpec,
    onValue: (key: K, value: number) => void,
  ): void => {
    const row = document.createElement("div");
    row.className = "control-row";

    const label = document.createElement("label");
    label.className = "control-label";
    label.textContent = spec.label;

    const output = document.createElement("output");
    output.className = "control-value";

    const input = document.createElement("input");
    input.type = "range";
    input.min = String(spec.min);
    input.max = String(spec.max);
    input.step = String(spec.step);
    input.value = String(state[key]);

    const setOutput = (value: number): void => {
      output.textContent = formatValue(value, spec.precision, spec.suffix);
    };

    const applyValue = (notify: boolean): void => {
      const value = Number(input.value);
      state[key] = value as T[K];
      setOutput(value);
      if (notify) {
        onValue(key, value);
      }
    };

    const onInput = (): void => {
      applyValue(!spec.changeOnly);
    };
    const onChange = (): void => {
      if (spec.changeOnly) {
        applyValue(true);
      }
    };

    setOutput(Number(input.value));
    input.addEventListener("input", onInput);
    input.addEventListener("change", onChange);
    cleanup.push(() => input.removeEventListener("input", onInput));
    cleanup.push(() => input.removeEventListener("change", onChange));

    row.appendChild(label);
    row.appendChild(output);
    row.appendChild(input);
    body.appendChild(row);
  };

  const bindCheckbox = <T extends object, K extends keyof T>(
    body: HTMLElement,
    state: T,
    key: K,
    labelText: string,
    onValue: (key: K, value: number) => void,
  ): void => {
    const row = document.createElement("label");
    row.className = "checkbox-row";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = Number(state[key]) > 0.5;

    const text = document.createElement("span");
    text.textContent = labelText;

    const onChange = (): void => {
      const value = input.checked ? 1 : 0;
      state[key] = value as T[K];
      onValue(key, value);
    };

    input.addEventListener("change", onChange);
    cleanup.push(() => input.removeEventListener("change", onChange));

    row.appendChild(input);
    row.appendChild(text);
    body.appendChild(row);
  };

  const unifiedFolder = createFolder("Unified Noise", true);
  const unifiedBody = requireElement<HTMLDivElement>(unifiedFolder, ".folder-body");
  bindRange(unifiedBody, noiseParams, "baseFreq", {
    label: "Base Frequency",
    min: 0.05,
    max: 1.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(unifiedBody, noiseParams, "baseOffsetX", {
    label: "Offset X",
    min: -8,
    max: 8,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(unifiedBody, noiseParams, "baseOffsetY", {
    label: "Offset Y",
    min: -8,
    max: 8,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(unifiedBody, noiseParams, "baseOffsetZ", {
    label: "Offset Z",
    min: -8,
    max: 8,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(unifiedBody, noiseParams, "latticeWarp", {
    label: "Lattice Warp",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(unifiedBody, noiseParams, "latticeWarpFreq", {
    label: "Warp Frequency",
    min: 0.05,
    max: 1.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindCheckbox(unifiedBody, noiseParams, "complement", "Complement", callbacks.onNoiseParamChange);
  bindRange(unifiedBody, noiseParams, "finalAmp", {
    label: "Final Amplitude",
    min: 0,
    max: 8,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(unifiedBody, noiseParams, "outputMin", {
    label: "Output Min",
    min: -2.0,
    max: 2.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(unifiedBody, noiseParams, "outputMax", {
    label: "Output Max",
    min: -2.0,
    max: 2.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);

  const turboFolder = createFolder("Turbo Noise", true);
  const turboBody = requireElement<HTMLDivElement>(turboFolder, ".folder-body");
  bindRange(turboBody, noiseParams, "turboFreq", {
    label: "Frequency",
    min: 0.05,
    max: 1.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(turboBody, noiseParams, "turboAmp", {
    label: "Amplitude",
    min: 0,
    max: 3.5,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(turboBody, noiseParams, "roughness", {
    label: "Roughness",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(turboBody, noiseParams, "attenuation", {
    label: "Attenuation",
    min: 0.05,
    max: 0.98,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(turboBody, noiseParams, "turbulence", {
    label: "Turbulence",
    min: 1,
    max: 8,
    step: 1,
    precision: 0,
  }, callbacks.onNoiseParamChange);

  const audioFolder = createFolder("Audio Mapping", true);
  const audioBody = requireElement<HTMLDivElement>(audioFolder, ".folder-body");
  bindRange(audioBody, audioMapParams, "lowGain", {
    label: "Low Gain",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "midGain", {
    label: "Mid Gain",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "highGain", {
    label: "High Gain",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "globalGain", {
    label: "Global Gain",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "attack", {
    label: "Attack",
    min: 0.02,
    max: 0.98,
    step: 0.01,
    precision: 2,
  }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "release", {
    label: "Release",
    min: 0.02,
    max: 0.98,
    step: 0.01,
    precision: 2,
  }, callbacks.onAudioMapParamChange);

  const interactionFolder = createFolder("Interaction", true);
  const interactionBody = requireElement<HTMLDivElement>(interactionFolder, ".folder-body");
  bindRange(interactionBody, interactionParams, "mouseRadius", {
    label: "Mouse Radius",
    min: 0.02,
    max: 0.6,
    step: 0.005,
    precision: 3,
  }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "mouseStrength", {
    label: "Mouse Strength",
    min: 0,
    max: 4,
    step: 0.01,
    precision: 2,
  }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "edgeFade", {
    label: "Edge Fade",
    min: 0.005,
    max: 0.5,
    step: 0.001,
    precision: 3,
  }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "edgeRadius", {
    label: "Edge Radius",
    min: 0.1,
    max: 0.71,
    step: 0.001,
    precision: 3,
  }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "edgePower", {
    label: "Edge Power",
    min: 0.1,
    max: 4,
    step: 0.01,
    precision: 2,
  }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "driftSpeed", {
    label: "Drift Speed",
    min: 0,
    max: 0.65,
    step: 0.001,
    precision: 3,
  }, callbacks.onInteractionParamChange);

  const shadingFolder = createFolder("Shader / Lighting", true);
  const shadingBody = requireElement<HTMLDivElement>(shadingFolder, ".folder-body");
  bindRange(shadingBody, shadingParams, "keyAzimuth", {
    label: "Key Azimuth",
    min: -180,
    max: 180,
    step: 1,
    precision: 0,
    suffix: "deg",
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "keyElevation", {
    label: "Key Elevation",
    min: -89,
    max: 89,
    step: 1,
    precision: 0,
    suffix: "deg",
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "keyStrength", {
    label: "Key Strength",
    min: 0,
    max: 1.5,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "fillAzimuth", {
    label: "Fill Azimuth",
    min: -180,
    max: 180,
    step: 1,
    precision: 0,
    suffix: "deg",
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "fillElevation", {
    label: "Fill Elevation",
    min: -89,
    max: 89,
    step: 1,
    precision: 0,
    suffix: "deg",
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "fillStrength", {
    label: "Fill Strength",
    min: 0,
    max: 1.5,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "hemiStrength", {
    label: "Hemi Strength",
    min: 0,
    max: 1.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "diffuseBase", {
    label: "Diffuse Base",
    min: 0,
    max: 1.2,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "baseColorR", {
    label: "Base Color R",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "baseColorG", {
    label: "Base Color G",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "baseColorB", {
    label: "Base Color B",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "cavitySlopeScale", {
    label: "Cavity Slope",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "cavityCurvatureScale", {
    label: "Cavity Curvature",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "cavityPower", {
    label: "Cavity Power",
    min: 0.1,
    max: 2.5,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "cavityStrength", {
    label: "Cavity Strength",
    min: 0,
    max: 2.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "cavityMax", {
    label: "Cavity Max",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "shadeMin", {
    label: "Shade Min",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);
  bindRange(shadingBody, shadingParams, "shadeMax", {
    label: "Shade Max",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onShadingParamChange);

  const qualityFolder = createFolder("Quality / Render", true);
  const qualityBody = requireElement<HTMLDivElement>(qualityFolder, ".folder-body");
  bindRange(qualityBody, qualityParams, "subdivisions", {
    label: "Subdivisions",
    min: 48,
    max: 1600,
    step: 1,
    precision: 0,
    changeOnly: true,
  }, callbacks.onQualityParamChange);
  bindRange(qualityBody, qualityParams, "pixelRatioMax", {
    label: "Pixel Ratio Max",
    min: 1,
    max: 2,
    step: 0.05,
    precision: 2,
  }, callbacks.onQualityParamChange);

  foldersRoot.appendChild(unifiedFolder);
  foldersRoot.appendChild(turboFolder);
  foldersRoot.appendChild(audioFolder);
  foldersRoot.appendChild(interactionFolder);
  foldersRoot.appendChild(shadingFolder);
  foldersRoot.appendChild(qualityFolder);

  const onFileChange = async (): Promise<void> => {
    const selected = fileInput.files?.[0];
    if (!selected) {
      return;
    }
    await callbacks.onFileSelected(selected);
    fileInput.value = "";
  };

  const onMicClick = async (): Promise<void> => {
    if (micBusy) {
      return;
    }
    micBusy = true;
    refreshButtonState();
    try {
      await callbacks.onMicToggle();
    } finally {
      micBusy = false;
      refreshButtonState();
    }
  };

  const onPlayClick = async (): Promise<void> => {
    if (playBusy || !playEnabled) {
      return;
    }
    playBusy = true;
    refreshButtonState();
    try {
      await callbacks.onPlayToggle();
    } finally {
      playBusy = false;
      refreshButtonState();
    }
  };

  const onMicButtonClick = (): void => {
    void onMicClick();
  };
  const onPlayButtonClick = (): void => {
    void onPlayClick();
  };

  fileInput.addEventListener("change", onFileChange);
  micButton.addEventListener("click", onMicButtonClick);
  playButton.addEventListener("click", onPlayButtonClick);
  cleanup.push(() => fileInput.removeEventListener("change", onFileChange));
  cleanup.push(() => micButton.removeEventListener("click", onMicButtonClick));
  cleanup.push(() => playButton.removeEventListener("click", onPlayButtonClick));

  refreshButtonState();

  return {
    setStatus(text: string, kind: "info" | "error" = "info"): void {
      statusLine.textContent = text;
      statusLine.dataset.kind = kind;
    },
    setEnergy(level: number): void {
      const clamped = Math.max(0, Math.min(1, level));
      energyFill.style.transform = `scaleX(${clamped.toFixed(3)})`;
    },
    setMicActive(active: boolean): void {
      micButton.dataset.active = active ? "true" : "false";
      micButton.textContent = active ? "Mic Live" : "Use Microphone";
    },
    setPlayState(playing: boolean): void {
      playButton.textContent = playing ? "Pause" : "Play";
    },
    setPlayEnabled(enabled: boolean): void {
      playEnabled = enabled;
      refreshButtonState();
    },
    dispose(): void {
      for (const remove of cleanup) {
        remove();
      }
      root.innerHTML = "";
    },
  };
}
