import type {
  AudioMapParams,
  FogParams,
  HdriParams,
  HoudiniNoiseParams,
  InteractionParams,
  LiquidMetalParams,
  MaterialMode,
  MatcapOption,
  PostFxParams,
  QualityParams,
} from "../visual/DisplacedPlaneScene";

export interface ControlPanelState {
  noiseParams: HoudiniNoiseParams;
  audioMapParams: AudioMapParams;
  interactionParams: InteractionParams;
  qualityParams: QualityParams;
  fogParams: FogParams;
  liquidParams: LiquidMetalParams;
  hdriParams: HdriParams;
  postFxParams: PostFxParams;
  matcapOptions: MatcapOption[];
  selectedMatcapId: string;
  materialMode: MaterialMode;
}

export interface ControlCallbacks {
  onFileSelected(file: File): Promise<void> | void;
  onMicToggle(): Promise<void> | void;
  onPlayToggle(): Promise<void> | void;
  onMatcapPresetSelect(id: string): Promise<void> | void;
  onMatcapFileSelected(file: File): Promise<void> | void;
  onMaterialModeChange(mode: MaterialMode): void;
  onHdriFileSelected(file: File): Promise<void> | void;
  onNoiseParamChange(key: keyof HoudiniNoiseParams, value: number): void;
  onAudioMapParamChange(key: keyof AudioMapParams, value: number): void;
  onInteractionParamChange(key: keyof InteractionParams, value: number): void;
  onQualityParamChange(key: keyof QualityParams, value: number): void;
  onFogParamChange<K extends keyof FogParams>(key: K, value: FogParams[K]): void;
  onLiquidParamChange<K extends keyof LiquidMetalParams>(key: K, value: LiquidMetalParams[K]): void;
  onHdriParamChange<K extends keyof HdriParams>(key: K, value: HdriParams[K]): void;
  onPostFxParamChange<K extends keyof PostFxParams>(key: K, value: PostFxParams[K]): void;
}

export interface ControlPanelApi {
  setStatus(text: string, kind?: "info" | "error"): void;
  setEnergy(level: number): void;
  setMicActive(active: boolean): void;
  setPlayState(playing: boolean): void;
  setPlayEnabled(enabled: boolean): void;
  setMatcapSelection(id: string): void;
  setMaterialMode(mode: MaterialMode): void;
  dispose(): void;
}

interface RangeSpec {
  label: string;
  min: number;
  max: number;
  step: number;
  precision: number;
  suffix?: string;
  commitOnly?: boolean;
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
  const customMatcapId = "custom";

  root.innerHTML = `
    <section class="panel">
      <h1 class="title">Resonance Forge</h1>
      <p class="subtitle">Houdini-style displacement with switchable materials.</p>
      <div class="action-row">
        <label class="file-button">
          <input id="audio-file-input" type="file" accept="audio/*" />
          <span>Load Audio</span>
        </label>
        <button id="mic-toggle-btn" type="button">Use Microphone</button>
        <button id="play-toggle-btn" type="button" disabled>Play</button>
      </div>
      <div class="material-row">
        <label class="material-select-wrap">
          <span>Material Mode</span>
          <select id="material-mode-select">
            <option value="matcap">Matcap</option>
            <option value="liquid">Liquid Metal</option>
          </select>
        </label>
        <label class="material-select-wrap">
          <span>Matcap</span>
          <select id="matcap-select"></select>
        </label>
        <label class="matcap-upload-button">
          <input id="matcap-file-input" type="file" accept="image/png,image/jpeg,image/webp" />
          <span>Load Matcap</span>
        </label>
      </div>
      <div class="hdri-row">
        <label class="matcap-upload-button">
          <input id="hdri-file-input" type="file" accept=".hdr,.exr,image/png,image/jpeg,image/webp" />
          <span>Load HDRI</span>
        </label>
      </div>
      <div class="meter">
        <div id="energy-fill" class="meter-fill"></div>
      </div>
      <p id="status-line" class="status">Idle. Load a file, mic, or HDRI.</p>
      <div id="folders-root" class="folders-root"></div>
    </section>
    <div class="hint">Orbit: left drag | Pan: right drag | Zoom: wheel</div>
  `;

  const fileInput = requireElement<HTMLInputElement>(root, "#audio-file-input");
  const micButton = requireElement<HTMLButtonElement>(root, "#mic-toggle-btn");
  const playButton = requireElement<HTMLButtonElement>(root, "#play-toggle-btn");
  const materialModeSelect = requireElement<HTMLSelectElement>(root, "#material-mode-select");
  const matcapSelect = requireElement<HTMLSelectElement>(root, "#matcap-select");
  const matcapFileInput = requireElement<HTMLInputElement>(root, "#matcap-file-input");
  const hdriFileInput = requireElement<HTMLInputElement>(root, "#hdri-file-input");
  const energyFill = requireElement<HTMLDivElement>(root, "#energy-fill");
  const statusLine = requireElement<HTMLParagraphElement>(root, "#status-line");
  const foldersRoot = requireElement<HTMLDivElement>(root, "#folders-root");

  const noiseParams = { ...initialState.noiseParams };
  const audioMapParams = { ...initialState.audioMapParams };
  const interactionParams = { ...initialState.interactionParams };
  const qualityParams = { ...initialState.qualityParams };
  const fogParams = { ...initialState.fogParams };
  const liquidParams = { ...initialState.liquidParams };
  const hdriParams = { ...initialState.hdriParams };
  const postFxParams = { ...initialState.postFxParams };

  const cleanup: Array<() => void> = [];

  let micBusy = false;
  let playBusy = false;
  let materialBusy = false;
  let hdriBusy = false;
  let playEnabled = false;

  const refreshButtonState = (): void => {
    const lock = materialBusy || hdriBusy;
    micButton.disabled = micBusy || lock;
    playButton.disabled = playBusy || !playEnabled || lock;
    materialModeSelect.disabled = lock;
    matcapSelect.disabled = lock;
  };

  const ensureCustomMatcapOption = (): void => {
    const hasCustom = Array.from(matcapSelect.options).some((option) => option.value === customMatcapId);
    if (hasCustom) {
      return;
    }
    const option = document.createElement("option");
    option.value = customMatcapId;
    option.textContent = "Custom Upload";
    matcapSelect.appendChild(option);
  };

  const removeCustomMatcapOption = (): void => {
    const option = Array.from(matcapSelect.options).find((entry) => entry.value === customMatcapId);
    if (option) {
      option.remove();
    }
  };

  for (const option of initialState.matcapOptions) {
    const element = document.createElement("option");
    element.value = option.id;
    element.textContent = option.label;
    matcapSelect.appendChild(element);
  }
  if (initialState.selectedMatcapId === customMatcapId) {
    ensureCustomMatcapOption();
  }
  matcapSelect.value = initialState.selectedMatcapId;
  materialModeSelect.value = initialState.materialMode;

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
    input.value = String(Number(state[key]));

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
      applyValue(!spec.commitOnly);
    };
    const onChange = (): void => {
      if (spec.commitOnly) {
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

  const bindSelect = <T extends object, K extends keyof T>(
    body: HTMLElement,
    state: T,
    key: K,
    labelText: string,
    options: Array<{ label: string; value: string }>,
    onValue: (key: K, value: T[K]) => void,
  ): void => {
    const row = document.createElement("div");
    row.className = "control-row control-row-select";

    const label = document.createElement("label");
    label.className = "control-label";
    label.textContent = labelText;

    const select = document.createElement("select");
    for (const optionDef of options) {
      const option = document.createElement("option");
      option.value = optionDef.value;
      option.textContent = optionDef.label;
      select.appendChild(option);
    }
    select.value = String(state[key]);

    const onChange = (): void => {
      const value = select.value as T[K];
      state[key] = value;
      onValue(key, value);
    };

    select.addEventListener("change", onChange);
    cleanup.push(() => select.removeEventListener("change", onChange));

    row.appendChild(label);
    row.appendChild(select);
    body.appendChild(row);
  };

  const bindCheckbox = <T extends object, K extends keyof T>(
    body: HTMLElement,
    state: T,
    key: K,
    labelText: string,
    onValue: (key: K, value: boolean) => void,
  ): void => {
    const row = document.createElement("label");
    row.className = "checkbox-row";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = Boolean(state[key]);

    const text = document.createElement("span");
    text.textContent = labelText;

    const onChange = (): void => {
      const value = input.checked;
      state[key] = value as T[K];
      onValue(key, value);
    };

    input.addEventListener("change", onChange);
    cleanup.push(() => input.removeEventListener("change", onChange));

    row.appendChild(input);
    row.appendChild(text);
    body.appendChild(row);
  };

  const bindColor = <T extends object, K extends keyof T>(
    body: HTMLElement,
    state: T,
    key: K,
    labelText: string,
    onValue: (key: K, value: string) => void,
  ): void => {
    const row = document.createElement("div");
    row.className = "color-row";

    const label = document.createElement("label");
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = "color";
    input.value = String(state[key]);

    const onInput = (): void => {
      const value = input.value;
      state[key] = value as T[K];
      onValue(key, value);
    };

    input.addEventListener("input", onInput);
    cleanup.push(() => input.removeEventListener("input", onInput));

    row.appendChild(label);
    row.appendChild(input);
    body.appendChild(row);
  };

  const noiseFolder = createFolder("Unified Noise", true);
  const noiseBody = requireElement<HTMLDivElement>(noiseFolder, ".folder-body");
  bindRange(noiseBody, noiseParams, "baseFreq", { label: "Base Frequency", min: 0.1, max: 2.5, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "baseOffsetX", { label: "Offset X", min: -8, max: 8, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "baseOffsetY", { label: "Offset Y", min: -8, max: 8, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "baseOffsetZ", { label: "Offset Z", min: -8, max: 8, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "latticeWarp", { label: "Lattice Warp", min: 0, max: 1, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "latticeWarpFreq", { label: "Warp Frequency", min: 0.05, max: 2.5, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "complement", { label: "Complement", min: 0, max: 1, step: 1, precision: 0 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "baseWeight", { label: "Base Weight", min: 0, max: 2.5, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "turboWeight", { label: "Turbo Weight", min: 0, max: 2.5, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "contourFreq", { label: "Contour Freq", min: 1, max: 60, step: 0.1, precision: 1 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "contourStrength", { label: "Contour Strength", min: 0, max: 1.6, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "contourPower", { label: "Contour Power", min: 0.2, max: 4, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "elevation", { label: "Elevation", min: -4, max: 4, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(noiseBody, noiseParams, "finalAmp", { label: "Final Amplitude", min: 0, max: 8, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);

  const turboFolder = createFolder("Turbo Noise", true);
  const turboBody = requireElement<HTMLDivElement>(turboFolder, ".folder-body");
  bindRange(turboBody, noiseParams, "turboFreq", { label: "Frequency", min: 0.05, max: 2.5, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(turboBody, noiseParams, "turboAmp", { label: "Amplitude", min: 0, max: 3.5, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(turboBody, noiseParams, "roughness", { label: "Roughness", min: 0, max: 1, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(turboBody, noiseParams, "attenuation", { label: "Attenuation", min: 0.05, max: 0.98, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(turboBody, noiseParams, "turbulence", { label: "Turbulence", min: 1, max: 8, step: 1, precision: 0 }, callbacks.onNoiseParamChange);
  bindRange(turboBody, noiseParams, "detailScale", { label: "Detail Scale", min: 0.25, max: 8, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);
  bindRange(turboBody, noiseParams, "detailStrength", { label: "Detail Strength", min: 0, max: 1.5, step: 0.01, precision: 2 }, callbacks.onNoiseParamChange);

  const audioFolder = createFolder("Audio Mapping", true);
  const audioBody = requireElement<HTMLDivElement>(audioFolder, ".folder-body");
  bindRange(audioBody, audioMapParams, "lowGain", { label: "Low Gain", min: 0, max: 3, step: 0.01, precision: 2 }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "midGain", { label: "Mid Gain", min: 0, max: 3, step: 0.01, precision: 2 }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "highGain", { label: "High Gain", min: 0, max: 3, step: 0.01, precision: 2 }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "globalGain", { label: "Global Gain", min: 0, max: 3, step: 0.01, precision: 2 }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "attack", { label: "Attack", min: 0.02, max: 0.98, step: 0.01, precision: 2 }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "release", { label: "Release", min: 0.02, max: 0.98, step: 0.01, precision: 2 }, callbacks.onAudioMapParamChange);

  const interactionFolder = createFolder("Interaction", true);
  const interactionBody = requireElement<HTMLDivElement>(interactionFolder, ".folder-body");
  bindRange(interactionBody, interactionParams, "mouseRadius", { label: "Mouse Radius", min: 0.02, max: 0.6, step: 0.005, precision: 3 }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "mouseStrength", { label: "Mouse Strength", min: 0, max: 4, step: 0.01, precision: 2 }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "edgeFade", { label: "Edge Fade", min: 0.005, max: 0.4, step: 0.001, precision: 3 }, callbacks.onInteractionParamChange);
  bindRange(interactionBody, interactionParams, "driftSpeed", { label: "Drift Speed", min: 0, max: 0.65, step: 0.001, precision: 3 }, callbacks.onInteractionParamChange);

  const qualityFolder = createFolder("Quality / Render", true);
  const qualityBody = requireElement<HTMLDivElement>(qualityFolder, ".folder-body");
  bindRange(qualityBody, qualityParams, "subdivisions", { label: "Subdivisions", min: 64, max: 2000, step: 1, precision: 0, commitOnly: true }, callbacks.onQualityParamChange);
  bindRange(qualityBody, qualityParams, "pixelRatioMax", { label: "Pixel Ratio Max", min: 1, max: 2, step: 0.05, precision: 2 }, callbacks.onQualityParamChange);

  const liquidFolder = createFolder("Liquid Metal", false);
  const liquidBody = requireElement<HTMLDivElement>(liquidFolder, ".folder-body");
  bindColor(liquidBody, liquidParams, "baseColor", "Base Tint", callbacks.onLiquidParamChange);
  bindRange(liquidBody, liquidParams, "roughness", { label: "Roughness", min: 0.02, max: 1, step: 0.01, precision: 2 }, callbacks.onLiquidParamChange);
  bindRange(liquidBody, liquidParams, "metalness", { label: "Metalness", min: 0, max: 1, step: 0.01, precision: 2 }, callbacks.onLiquidParamChange);
  bindRange(liquidBody, liquidParams, "specular", { label: "Specular", min: 0, max: 3, step: 0.01, precision: 2 }, callbacks.onLiquidParamChange);
  bindRange(liquidBody, liquidParams, "fresnel", { label: "Fresnel", min: 0, max: 3, step: 0.01, precision: 2 }, callbacks.onLiquidParamChange);
  bindRange(liquidBody, liquidParams, "normalStrength", { label: "Normal Strength", min: 0, max: 4, step: 0.01, precision: 2 }, callbacks.onLiquidParamChange);
  bindRange(liquidBody, liquidParams, "envStrength", { label: "Env Strength", min: 0, max: 3, step: 0.01, precision: 2 }, callbacks.onLiquidParamChange);
  bindRange(liquidBody, liquidParams, "clearcoat", { label: "Clearcoat", min: 0, max: 2, step: 0.01, precision: 2 }, callbacks.onLiquidParamChange);
  bindRange(liquidBody, liquidParams, "clearcoatRoughness", { label: "Clearcoat Rough", min: 0.02, max: 1, step: 0.01, precision: 2 }, callbacks.onLiquidParamChange);
  bindRange(liquidBody, liquidParams, "rimStrength", { label: "Rim Strength", min: 0, max: 1.5, step: 0.01, precision: 2 }, callbacks.onLiquidParamChange);
  bindRange(liquidBody, liquidParams, "shadowStrength", { label: "Shadow Strength", min: 0, max: 1, step: 0.01, precision: 2 }, callbacks.onLiquidParamChange);

  const fogFolder = createFolder("Fog", false);
  const fogBody = requireElement<HTMLDivElement>(fogFolder, ".folder-body");
  bindCheckbox(fogBody, fogParams, "enabled", "Enable Fog", callbacks.onFogParamChange);
  bindColor(fogBody, fogParams, "color", "Fog Color", callbacks.onFogParamChange);
  bindSelect(
    fogBody,
    fogParams,
    "mode",
    "Fog Mode",
    [
      { label: "Exp2", value: "exp2" },
      { label: "Linear", value: "linear" },
    ],
    callbacks.onFogParamChange,
  );
  bindRange(fogBody, fogParams, "density", { label: "Density", min: 0, max: 0.6, step: 0.001, precision: 3 }, callbacks.onFogParamChange);
  bindRange(fogBody, fogParams, "falloff", { label: "Falloff Curve", min: 0.2, max: 4, step: 0.01, precision: 2 }, callbacks.onFogParamChange);
  bindRange(fogBody, fogParams, "near", { label: "Linear Near", min: 0, max: 6000, step: 1, precision: 0 }, callbacks.onFogParamChange);
  bindRange(fogBody, fogParams, "far", { label: "Linear Far", min: 1, max: 8000, step: 1, precision: 0 }, callbacks.onFogParamChange);
  bindRange(fogBody, fogParams, "amount", { label: "Fog Amount", min: 0, max: 2, step: 0.01, precision: 2 }, callbacks.onFogParamChange);
  bindRange(fogBody, fogParams, "height", { label: "Height Level", min: -40, max: 40, step: 0.01, precision: 2 }, callbacks.onFogParamChange);
  bindRange(fogBody, fogParams, "heightFalloff", { label: "Height Falloff", min: 0, max: 8, step: 0.01, precision: 2 }, callbacks.onFogParamChange);

  const hdriFolder = createFolder("HDRI", false);
  const hdriBody = requireElement<HTMLDivElement>(hdriFolder, ".folder-body");
  bindCheckbox(hdriBody, hdriParams, "enabled", "Enable HDRI Lighting", callbacks.onHdriParamChange);
  bindCheckbox(hdriBody, hdriParams, "showBackground", "Use HDRI Background", callbacks.onHdriParamChange);
  bindRange(hdriBody, hdriParams, "intensity", { label: "Intensity", min: 0, max: 4, step: 0.01, precision: 2 }, callbacks.onHdriParamChange);
  bindRange(hdriBody, hdriParams, "rotation", { label: "Rotation", min: -3.1416, max: 3.1416, step: 0.01, precision: 2, suffix: " rad" }, callbacks.onHdriParamChange);
  bindRange(hdriBody, hdriParams, "backgroundBlur", { label: "Background Blur", min: 0, max: 1, step: 0.01, precision: 2 }, callbacks.onHdriParamChange);
  bindRange(hdriBody, hdriParams, "backgroundIntensity", { label: "Background Intensity", min: 0, max: 3, step: 0.01, precision: 2 }, callbacks.onHdriParamChange);

  const postFolder = createFolder("Post FX", false);
  const postBody = requireElement<HTMLDivElement>(postFolder, ".folder-body");
  bindCheckbox(postBody, postFxParams, "enabled", "Enable Post FX", callbacks.onPostFxParamChange);
  bindRange(postBody, postFxParams, "sharpen", { label: "Sharpen", min: 0, max: 1.2, step: 0.001, precision: 3 }, callbacks.onPostFxParamChange);
  bindRange(postBody, postFxParams, "chromaticAberration", { label: "Chromatic", min: 0, max: 0.01, step: 0.0001, precision: 4 }, callbacks.onPostFxParamChange);
  bindRange(postBody, postFxParams, "vignette", { label: "Vignette", min: 0, max: 1, step: 0.001, precision: 3 }, callbacks.onPostFxParamChange);

  foldersRoot.appendChild(noiseFolder);
  foldersRoot.appendChild(turboFolder);
  foldersRoot.appendChild(audioFolder);
  foldersRoot.appendChild(interactionFolder);
  foldersRoot.appendChild(qualityFolder);
  foldersRoot.appendChild(liquidFolder);
  foldersRoot.appendChild(fogFolder);
  foldersRoot.appendChild(hdriFolder);
  foldersRoot.appendChild(postFolder);

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

  const onMatcapPresetChange = async (): Promise<void> => {
    const selectedId = matcapSelect.value;
    if (!selectedId || selectedId === customMatcapId) {
      return;
    }
    materialBusy = true;
    refreshButtonState();
    try {
      await callbacks.onMatcapPresetSelect(selectedId);
      removeCustomMatcapOption();
      matcapSelect.value = selectedId;
    } finally {
      materialBusy = false;
      refreshButtonState();
    }
  };

  const onMatcapFileChange = async (): Promise<void> => {
    const selected = matcapFileInput.files?.[0];
    if (!selected) {
      return;
    }
    materialBusy = true;
    refreshButtonState();
    try {
      await callbacks.onMatcapFileSelected(selected);
      ensureCustomMatcapOption();
      matcapSelect.value = customMatcapId;
    } finally {
      materialBusy = false;
      refreshButtonState();
      matcapFileInput.value = "";
    }
  };

  const onMaterialModeChange = (): void => {
    const mode = materialModeSelect.value === "liquid" ? "liquid" : "matcap";
    callbacks.onMaterialModeChange(mode);
  };

  const onHdriFileChange = async (): Promise<void> => {
    const selected = hdriFileInput.files?.[0];
    if (!selected) {
      return;
    }
    hdriBusy = true;
    refreshButtonState();
    try {
      await callbacks.onHdriFileSelected(selected);
    } finally {
      hdriBusy = false;
      refreshButtonState();
      hdriFileInput.value = "";
    }
  };

  const onMicButtonClick = (): void => {
    void onMicClick();
  };
  const onPlayButtonClick = (): void => {
    void onPlayClick();
  };
  const onMatcapSelectChange = (): void => {
    void onMatcapPresetChange();
  };
  const onMatcapFileInputChange = (): void => {
    void onMatcapFileChange();
  };
  const onHdriFileInputChange = (): void => {
    void onHdriFileChange();
  };

  fileInput.addEventListener("change", onFileChange);
  micButton.addEventListener("click", onMicButtonClick);
  playButton.addEventListener("click", onPlayButtonClick);
  matcapSelect.addEventListener("change", onMatcapSelectChange);
  matcapFileInput.addEventListener("change", onMatcapFileInputChange);
  materialModeSelect.addEventListener("change", onMaterialModeChange);
  hdriFileInput.addEventListener("change", onHdriFileInputChange);

  cleanup.push(() => fileInput.removeEventListener("change", onFileChange));
  cleanup.push(() => micButton.removeEventListener("click", onMicButtonClick));
  cleanup.push(() => playButton.removeEventListener("click", onPlayButtonClick));
  cleanup.push(() => matcapSelect.removeEventListener("change", onMatcapSelectChange));
  cleanup.push(() => matcapFileInput.removeEventListener("change", onMatcapFileInputChange));
  cleanup.push(() => materialModeSelect.removeEventListener("change", onMaterialModeChange));
  cleanup.push(() => hdriFileInput.removeEventListener("change", onHdriFileInputChange));

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
    setMatcapSelection(id: string): void {
      if (id === customMatcapId) {
        ensureCustomMatcapOption();
      } else {
        removeCustomMatcapOption();
      }
      matcapSelect.value = id;
    },
    setMaterialMode(mode: MaterialMode): void {
      materialModeSelect.value = mode;
    },
    dispose(): void {
      for (const remove of cleanup) {
        remove();
      }
      root.innerHTML = "";
    },
  };
}
