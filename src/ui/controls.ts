import type {
  AmbientOcclusionMode,
  AmbientOcclusionParams,
  AudioMapParams,
  CameraParams,
  HoudiniNoiseParams,
  InteractionParams,
  MaterialMode,
  MaterialMapSlot,
  MaterialParams,
  QualityParams,
  ShadingParams,
} from "../visual/DisplacedPlaneScene";

export interface ControlPanelState {
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

export interface ControlCallbacks {
  onFileSelected(file: File): Promise<void> | void;
  onMicToggle(): Promise<void> | void;
  onPlayToggle(): Promise<void> | void;
  onNoiseParamChange(key: keyof HoudiniNoiseParams, value: number): void;
  onAudioMapParamChange(key: keyof AudioMapParams, value: number): void;
  onInteractionParamChange(key: keyof InteractionParams, value: number): void;
  onQualityParamChange(key: keyof QualityParams, value: number): void;
  onCameraParamChange(key: keyof CameraParams, value: number): void;
  onMaterialModeChange(mode: MaterialMode): void;
  onMaterialParamChange(key: keyof MaterialParams, value: number): void;
  onMaterialMapSelected(slot: MaterialMapSlot, file: File | null): Promise<void> | void;
  onAmbientOcclusionModeChange(mode: AmbientOcclusionMode): void;
  onAmbientOcclusionParamChange(key: Exclude<keyof AmbientOcclusionParams, "mode">, value: number): void;
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
  const cameraParams: CameraParams = { ...initialState.cameraParams };
  let materialMode: MaterialMode = initialState.materialMode;
  const materialParams: MaterialParams = { ...initialState.materialParams };
  let ambientOcclusionMode: AmbientOcclusionMode = initialState.ambientOcclusionParams.mode;
  const ambientOcclusionParams: AmbientOcclusionParams = { ...initialState.ambientOcclusionParams };
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
    input.className = "checkbox-input";
    input.checked = Number(state[key]) > 0.5;

    const toggle = document.createElement("span");
    toggle.className = "checkbox-toggle";
    toggle.setAttribute("aria-hidden", "true");

    const text = document.createElement("span");
    text.className = "checkbox-label";
    text.textContent = labelText;

    const onChange = (): void => {
      const value = input.checked ? 1 : 0;
      state[key] = value as T[K];
      onValue(key, value);
    };

    input.addEventListener("change", onChange);
    cleanup.push(() => input.removeEventListener("change", onChange));

    row.appendChild(input);
    row.appendChild(toggle);
    row.appendChild(text);
    body.appendChild(row);
  };

  const toHexChannel = (value: number): string => {
    const channel = Math.round(Math.max(0, Math.min(1, value)) * 255);
    return channel.toString(16).padStart(2, "0");
  };

  const toHexColor = (r: number, g: number, b: number): string => {
    return `#${toHexChannel(r)}${toHexChannel(g)}${toHexChannel(b)}`;
  };

  const fromHexColor = (hex: string): { r: number; g: number; b: number } => {
    const normalized = hex.startsWith("#") ? hex.slice(1) : hex;
    if (normalized.length !== 6) {
      return { r: 1, g: 1, b: 1 };
    }
    const r = Number.parseInt(normalized.slice(0, 2), 16);
    const g = Number.parseInt(normalized.slice(2, 4), 16);
    const b = Number.parseInt(normalized.slice(4, 6), 16);
    return {
      r: Number.isFinite(r) ? r / 255 : 1,
      g: Number.isFinite(g) ? g / 255 : 1,
      b: Number.isFinite(b) ? b / 255 : 1,
    };
  };

  const bindColor = (
    body: HTMLElement,
    labelText: string,
    color: { r: number; g: number; b: number },
    onValue: (next: { r: number; g: number; b: number }) => void,
  ): void => {
    const row = document.createElement("div");
    row.className = "control-row";

    const label = document.createElement("label");
    label.className = "control-label";
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = "color";
    input.className = "control-color";
    input.value = toHexColor(color.r, color.g, color.b);

    const onInput = (): void => {
      onValue(fromHexColor(input.value));
    };

    input.addEventListener("input", onInput);
    cleanup.push(() => input.removeEventListener("input", onInput));

    row.appendChild(label);
    row.appendChild(input);
    body.appendChild(row);
  };

  const bindTextureInput = (
    body: HTMLElement,
    labelText: string,
    slot: MaterialMapSlot,
  ): void => {
    const row = document.createElement("div");
    row.className = "control-row";

    const label = document.createElement("label");
    label.className = "control-label";
    label.textContent = labelText;

    const controls = document.createElement("div");
    controls.className = "texture-input-row";

    const fileButton = document.createElement("label");
    fileButton.className = "file-button texture-file-button";

    const fileButtonText = document.createElement("span");
    fileButtonText.textContent = "Choose File";

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    const filename = document.createElement("span");
    filename.className = "texture-file-name";
    filename.textContent = slot === "matcap" ? "Built-in default" : "No file chosen";

    const clearButton = document.createElement("button");
    clearButton.type = "button";
    clearButton.className = "texture-clear-button";
    clearButton.textContent = "Clear";

    const onFileChange = (): void => {
      const file = input.files?.[0] ?? null;
      if (!file) {
        return;
      }
      filename.textContent = file.name;
      void callbacks.onMaterialMapSelected(slot, file);
      input.value = "";
    };

    const onClearClick = (): void => {
      void callbacks.onMaterialMapSelected(slot, null);
      filename.textContent = slot === "matcap" ? "Built-in default" : "No file chosen";
      input.value = "";
    };

    input.addEventListener("change", onFileChange);
    clearButton.addEventListener("click", onClearClick);
    cleanup.push(() => input.removeEventListener("change", onFileChange));
    cleanup.push(() => clearButton.removeEventListener("click", onClearClick));

    fileButton.appendChild(input);
    fileButton.appendChild(fileButtonText);
    controls.appendChild(fileButton);
    controls.appendChild(filename);
    controls.appendChild(clearButton);
    row.appendChild(label);
    row.appendChild(controls);
    body.appendChild(row);
  };

  const bindSelect = <T extends string>(
    body: HTMLElement,
    labelText: string,
    options: Array<{ label: string; value: T }>,
    initialValue: T,
    onValue: (value: T) => void,
  ): void => {
    const row = document.createElement("div");
    row.className = "control-row";

    const label = document.createElement("label");
    label.className = "control-label";
    label.textContent = labelText;

    const select = document.createElement("select");
    select.className = "control-select";
    for (const optionData of options) {
      const option = document.createElement("option");
      option.value = optionData.value;
      option.textContent = optionData.label;
      option.selected = optionData.value === initialValue;
      select.appendChild(option);
    }

    const onChange = (): void => {
      onValue(select.value as T);
    };
    select.addEventListener("change", onChange);
    cleanup.push(() => select.removeEventListener("change", onChange));

    row.appendChild(label);
    row.appendChild(select);
    body.appendChild(row);
  };

  type TabKey = "noise" | "audio" | "shader" | "interation" | "camera";
  const tabsNav = document.createElement("div");
  tabsNav.className = "tabs-nav";
  const tabsPanels = document.createElement("div");
  tabsPanels.className = "tabs-panels";

  const tabButtons = {} as Record<TabKey, HTMLButtonElement>;
  const tabPanels = {} as Record<TabKey, HTMLDivElement>;

  const setActiveTab = (activeKey: TabKey): void => {
    for (const key of Object.keys(tabButtons) as TabKey[]) {
      const isActive = key === activeKey;
      tabButtons[key].dataset.active = isActive ? "true" : "false";
      tabPanels[key].hidden = !isActive;
    }
  };

  const createTab = (key: TabKey, labelText: string): void => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tab-button";
    button.textContent = labelText;

    const panel = document.createElement("div");
    panel.className = "tab-panel";

    const onClick = (): void => setActiveTab(key);
    button.addEventListener("click", onClick);
    cleanup.push(() => button.removeEventListener("click", onClick));

    tabButtons[key] = button;
    tabPanels[key] = panel;
    tabsNav.appendChild(button);
    tabsPanels.appendChild(panel);
  };

  createTab("noise", "Noise");
  createTab("audio", "Audio");
  createTab("shader", "Shader");
  createTab("interation", "Interation");
  createTab("camera", "Camera");

  const unifiedFolder = createFolder("Unified Noise", true);
  const unifiedBody = requireElement<HTMLDivElement>(unifiedFolder, ".folder-body");
  bindRange(unifiedBody, noiseParams, "baseFreq", {
    label: "Base Frequency",
    min: 0.05,
    max: 1.0,
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
  bindRange(unifiedBody, noiseParams, "driftSpeed", {
    label: "Drift Speed",
    min: 0,
    max: 0.65,
    step: 0.001,
    precision: 3,
  }, callbacks.onNoiseParamChange);
  bindRange(unifiedBody, qualityParams, "subdivisions", {
    label: "Subdivisions",
    min: 512,
    max: 1600,
    step: 1,
    precision: 0,
    changeOnly: true,
  }, callbacks.onQualityParamChange);
  bindRange(unifiedBody, qualityParams, "pixelRatioMax", {
    label: "Pixel Ratio Max",
    min: 1,
    max: 2,
    step: 0.05,
    precision: 2,
  }, callbacks.onQualityParamChange);

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
    max: 0.7,
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
    min: 0.5,
    max: 0.6,
    step: 0.005,
    precision: 3,
  }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "mouseStrength", {
    label: "Mouse Strength",
    min: 0.2,
    max: 2.2,
    step: 0.01,
    precision: 2,
  }, callbacks.onInteractionParamChange);
  bindCheckbox(
    interactionBody,
    interactionParams,
    "mouseNoiseOffset",
    "Mouse Noise Offset",
    callbacks.onInteractionParamChange,
  );
  bindRange(interactionBody, interactionParams, "edgeFade", {
    label: "Edge Fade",
    min: 0.1,
    max: 0.5,
    step: 0.001,
    precision: 3,
  }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "edgeRadius", {
    label: "Edge Radius",
    min: 0.1,
    max: 0.5,
    step: 0.001,
    precision: 3,
  }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "edgePower", {
    label: "Edge Power",
    min: 0.9,
    max: 4,
    step: 0.01,
    precision: 2,
  }, callbacks.onInteractionParamChange);

  const cameraFolder = createFolder("Camera", true);
  const cameraBody = requireElement<HTMLDivElement>(cameraFolder, ".folder-body");
  bindRange(cameraBody, cameraParams, "fov", {
    label: "FOV",
    min: 20,
    max: 100,
    step: 1,
    precision: 0,
    suffix: "deg",
  }, callbacks.onCameraParamChange);
  bindRange(cameraBody, cameraParams, "minDistance", {
    label: "Zoom Min",
    min: 1,
    max: 80,
    step: 0.1,
    precision: 1,
  }, callbacks.onCameraParamChange);
  bindRange(cameraBody, cameraParams, "maxDistance", {
    label: "Zoom Max",
    min: 1,
    max: 120,
    step: 0.1,
    precision: 1,
  }, callbacks.onCameraParamChange);
  bindRange(cameraBody, cameraParams, "minPolarDeg", {
    label: "Min Polar",
    min: 0,
    max: 89,
    step: 1,
    precision: 0,
    suffix: "deg",
  }, callbacks.onCameraParamChange);
  bindRange(cameraBody, cameraParams, "maxPolarDeg", {
    label: "Max Polar",
    min: 0,
    max: 89,
    step: 1,
    precision: 0,
    suffix: "deg",
  }, callbacks.onCameraParamChange);
  bindCheckbox(cameraBody, cameraParams, "centerLock", "Center Lock", callbacks.onCameraParamChange);
  bindRange(cameraBody, cameraParams, "panRange", {
    label: "Pan Range",
    min: 0,
    max: 10,
    step: 0.1,
    precision: 1,
  }, callbacks.onCameraParamChange);

  const materialFolder = createFolder("Material", true);
  const materialBody = requireElement<HTMLDivElement>(materialFolder, ".folder-body");
  const pbrMaterialBody = document.createElement("div");
  pbrMaterialBody.className = "mode-group";
  const matcapMaterialBody = document.createElement("div");
  matcapMaterialBody.className = "mode-group";

  const updateMaterialModeVisibility = (): void => {
    pbrMaterialBody.hidden = materialMode !== "pbr";
    matcapMaterialBody.hidden = materialMode !== "matcap";
  };

  bindSelect<MaterialMode>(
    materialBody,
    "Mode",
    [
      { label: "PBR", value: "pbr" },
      { label: "Matcap", value: "matcap" },
    ],
    materialMode,
    (value): void => {
      materialMode = value;
      callbacks.onMaterialModeChange(value);
      updateMaterialModeVisibility();
    },
  );

  bindColor(
    pbrMaterialBody,
    "PBR Color",
    {
      r: shadingParams.baseColorR,
      g: shadingParams.baseColorG,
      b: shadingParams.baseColorB,
    },
    (next): void => {
      shadingParams.baseColorR = next.r;
      shadingParams.baseColorG = next.g;
      shadingParams.baseColorB = next.b;
      callbacks.onShadingParamChange("baseColorR", next.r);
      callbacks.onShadingParamChange("baseColorG", next.g);
      callbacks.onShadingParamChange("baseColorB", next.b);
    },
  );

  bindRange(pbrMaterialBody, materialParams, "diffuse", {
    label: "Diffuse",
    min: 0,
    max: 2,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(pbrMaterialBody, materialParams, "roughness", {
    label: "Roughness",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(pbrMaterialBody, materialParams, "metalness", {
    label: "Metalness",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);

  bindRange(matcapMaterialBody, materialParams, "matcapBrightness", {
    label: "Matcap Brightness",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(matcapMaterialBody, materialParams, "matcapBlur", {
    label: "Matcap Blur",
    min: 0,
    max: 4,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(matcapMaterialBody, materialParams, "matcapContrast", {
    label: "Matcap Contrast",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(matcapMaterialBody, materialParams, "matcapSaturation", {
    label: "Matcap Saturation",
    min: 0,
    max: 2,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindTextureInput(matcapMaterialBody, "Matcap Map", "matcap");

  materialBody.appendChild(pbrMaterialBody);
  materialBody.appendChild(matcapMaterialBody);
  updateMaterialModeVisibility();

  const aoFolder = createFolder("AO", true);
  const aoBody = requireElement<HTMLDivElement>(aoFolder, ".folder-body");
  const shadingFolder = createFolder("Lighting", true);
  const shadingBody = requireElement<HTMLDivElement>(shadingFolder, ".folder-body");
  bindSelect<AmbientOcclusionMode>(
    aoBody,
    "AO Mode",
    [
      { label: "None", value: "none" },
      { label: "GTAO", value: "gtao" },
      { label: "SAO", value: "sao" },
    ],
    ambientOcclusionMode,
    (value): void => {
      ambientOcclusionMode = value;
      callbacks.onAmbientOcclusionModeChange(value);
    },
  );
  bindRange(aoBody, ambientOcclusionParams, "intensity", {
    label: "AO Intensity",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onAmbientOcclusionParamChange);
  bindRange(aoBody, ambientOcclusionParams, "radius", {
    label: "AO Radius",
    min: 0.01,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onAmbientOcclusionParamChange);
  bindRange(aoBody, ambientOcclusionParams, "thickness", {
    label: "AO Thickness",
    min: 0,
    max: 4,
    step: 0.01,
    precision: 2,
  }, callbacks.onAmbientOcclusionParamChange);
  bindRange(aoBody, ambientOcclusionParams, "falloff", {
    label: "AO Falloff",
    min: 0.1,
    max: 4,
    step: 0.01,
    precision: 2,
  }, callbacks.onAmbientOcclusionParamChange);
  bindRange(aoBody, ambientOcclusionParams, "denoiseRadius", {
    label: "AO Denoise",
    min: 1,
    max: 24,
    step: 1,
    precision: 0,
  }, callbacks.onAmbientOcclusionParamChange);
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
  tabPanels.noise.appendChild(unifiedFolder);
  tabPanels.noise.appendChild(turboFolder);
  tabPanels.audio.appendChild(audioFolder);
  tabPanels.shader.appendChild(materialFolder);
  tabPanels.shader.appendChild(aoFolder);
  tabPanels.shader.appendChild(shadingFolder);
  tabPanels.interation.appendChild(interactionFolder);
  tabPanels.camera.appendChild(cameraFolder);

  foldersRoot.appendChild(tabsNav);
  foldersRoot.appendChild(tabsPanels);
  setActiveTab("noise");

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
