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
  onDefaultSelected(): Promise<void> | void;
  onFileSelected(file: File): Promise<void> | void;
  onMicToggle(): Promise<void> | void;
  onRecordToggle(): Promise<void> | void;
  onPlayToggle(): Promise<void> | void;
  onSeekNormalized(value: number): Promise<void> | void;
  onFpsLimitModeChange(mode: "30" | "60" | "unlimited"): void;
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
  onSoloNoisePlaneToggle(enabled: boolean): void;
}

export interface ControlPanelApi {
  setStatus(text: string, kind?: "info" | "error"): void;
  setEnergy(level: number): void;
  setFps(fps: number): void;
  setMicActive(active: boolean): void;
  setRecordState(recording: boolean): void;
  setRecordEnabled(enabled: boolean): void;
  setPlayState(playing: boolean): void;
  setPlayEnabled(enabled: boolean): void;
  setPlaybackProgress(value: number): void;
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
    <div class="panel-dock" data-ui-hidden="false">
      <section class="panel">
        <div class="panel-head">
          <h1 class="title">LIQUID NOISE</h1>
          <div class="project-description" aria-label="Project description">
            <p class="project-description-line">Audio-reactive procedural displacement playground.</p>
            <p class="project-description-line">Use Default loop, load your own track, or drive with Mic.</p>
          </div>
          <div class="action-row">
            <button id="default-audio-btn" type="button">Default sound</button>
            <label class="file-button">
              <input id="audio-file-input" type="file" accept="audio/*" />
              <span>Load mp3</span>
            </label>
            <button id="mic-toggle-btn" type="button">Mic</button>
            <button id="record-toggle-btn" type="button">Record video</button>
          </div>
          <div class="meter-row">
            <button id="play-toggle-btn" type="button" disabled>Play</button>
            <div class="playback-bars">
              <div class="meter">
                <div id="energy-fill" class="meter-fill"></div>
              </div>
              <input id="seek-slider" class="seek-slider" type="range" min="0" max="1" step="0.001" value="0" disabled aria-label="Playback position" />
            </div>
          </div>
          <p id="status-line" class="status">Idle. Choose Default/Load or enable microphone.</p>
          <div id="tabs-nav-slot" class="tabs-nav-slot"></div>
        </div>
        <div id="folders-root" class="folders-root"></div>
      </section>
      <button id="ui-visibility-btn" class="ui-visibility-btn" type="button" aria-label="Hide UI">
        <span class="ui-visibility-icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="hint-row">
      <div id="fps-readout" class="fps-readout">FPS: --</div>
      <div class="hint">Orbit: left drag | Pan: right drag | Zoom: wheel</div>
    </div>
  `;

  const panelDockElement = requireElement<HTMLDivElement>(root, ".panel-dock");
  const uiVisibilityButton = requireElement<HTMLButtonElement>(root, "#ui-visibility-btn");
  const titleElement = requireElement<HTMLHeadingElement>(root, ".title");
  const projectDescriptionElement = requireElement<HTMLDivElement>(root, ".project-description");
  const defaultButton = requireElement<HTMLButtonElement>(root, "#default-audio-btn");
  const fileInput = requireElement<HTMLInputElement>(root, "#audio-file-input");
  const micButton = requireElement<HTMLButtonElement>(root, "#mic-toggle-btn");
  const recordButton = requireElement<HTMLButtonElement>(root, "#record-toggle-btn");
  const playButton = requireElement<HTMLButtonElement>(root, "#play-toggle-btn");
  const energyFill = requireElement<HTMLDivElement>(root, "#energy-fill");
  const seekSlider = requireElement<HTMLInputElement>(root, "#seek-slider");
  const statusLine = requireElement<HTMLParagraphElement>(root, "#status-line");
  const tabsNavSlot = requireElement<HTMLDivElement>(root, "#tabs-nav-slot");
  const foldersRoot = requireElement<HTMLDivElement>(root, "#folders-root");
  const hintRowElement = requireElement<HTMLDivElement>(root, ".hint-row");
  const fpsReadoutElement = requireElement<HTMLDivElement>(root, "#fps-readout");
  const panelElement = requireElement<HTMLElement>(root, ".panel");
  const panelHeadElement = requireElement<HTMLElement>(root, ".panel-head");
  const panelScrollbar = document.createElement("div");
  panelScrollbar.className = "panel-scrollbar";
  panelScrollbar.setAttribute("aria-hidden", "true");
  panelScrollbar.dataset.hidden = "true";
  const panelScrollbarThumb = document.createElement("div");
  panelScrollbarThumb.className = "panel-scrollbar-thumb";
  panelScrollbar.appendChild(panelScrollbarThumb);
  panelElement.appendChild(panelScrollbar);

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
  const soloNoisePlaneToggleState = { enabled: 0 };

  const cleanup: Array<() => void> = [];

  type UiDepthMode = "soft" | "medium" | "deep";
  const normalizeUiDepth = (value: string | undefined): UiDepthMode => {
    if (value === "soft" || value === "deep" || value === "medium") {
      return value;
    }
    return "medium";
  };
  const uiDepthState = {
    value: normalizeUiDepth(root.dataset.uiDepth),
  };
  const setUiDepth = (mode: UiDepthMode): void => {
    uiDepthState.value = mode;
    root.dataset.uiDepth = mode;
  };

  let defaultBusy = false;
  let micBusy = false;
  let recordBusy = false;
  let recordEnabled = true;
  let playBusy = false;
  let playEnabled = false;
  let seekBusy = false;
  let uiHidden = false;
  const defaultProjectTitle = "LIQUID NOISE";
  const defaultProjectDescriptionLines = [
    "Audio-reactive procedural displacement playground.",
    "Use Default loop, load your own track, or drive with Mic.",
  ];
  const initialProjectDescriptionLines = Array.from(
    projectDescriptionElement.querySelectorAll<HTMLParagraphElement>(".project-description-line"),
  )
    .map((lineElement) => lineElement.textContent?.trim() ?? "")
    .filter((line) => line.length > 0);
  let projectTitleText = (titleElement.textContent?.trim() ?? "") || defaultProjectTitle;
  let projectDescriptionText = (
    initialProjectDescriptionLines.length > 0 ? initialProjectDescriptionLines : defaultProjectDescriptionLines
  ).join("\n");
  const applyUiVisibility = (): void => {
    root.dataset.uiHidden = uiHidden ? "true" : "false";
    panelDockElement.dataset.uiHidden = uiHidden ? "true" : "false";
    uiVisibilityButton.setAttribute("aria-label", uiHidden ? "Show UI" : "Hide UI");
    scheduleScrollbarTrackAnchorsUpdate(false);
  };

  const refreshButtonState = (): void => {
    defaultButton.disabled = defaultBusy;
    micButton.disabled = micBusy;
    recordButton.disabled = recordBusy || !recordEnabled;
    playButton.disabled = playBusy || !playEnabled;
    seekSlider.disabled = seekBusy || !playEnabled;
  };

  const setSeekProgress = (value: number): void => {
    const clamped = Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
    seekSlider.value = clamped.toFixed(4);
    seekSlider.style.setProperty("--seek-progress", `${(clamped * 100).toFixed(2)}%`);
  };

  const applyProjectTitle = (value: string): void => {
    const normalized = value.trim();
    titleElement.textContent = normalized.length > 0 ? normalized : defaultProjectTitle;
  };

  const applyProjectDescription = (value: string): void => {
    const normalized = value.replace(/\r\n/g, "\n");
    const lines = normalized
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
    const finalLines = lines.length > 0 ? lines : defaultProjectDescriptionLines;
    while (projectDescriptionElement.firstChild) {
      projectDescriptionElement.removeChild(projectDescriptionElement.firstChild);
    }
    for (const line of finalLines) {
      const lineElement = document.createElement("p");
      lineElement.className = "project-description-line";
      lineElement.textContent = line;
      projectDescriptionElement.appendChild(lineElement);
    }
  };

  const createRangeRow = <T extends object, K extends keyof T>(
    state: T,
    key: K,
    spec: RangeSpec,
    onValue: (key: K, value: number) => void,
  ): HTMLDivElement => {
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

    const setRangeProgress = (): void => {
      const min = Number.parseFloat(input.min);
      const max = Number.parseFloat(input.max);
      const current = Number.parseFloat(input.value);
      const span = max - min;
      const progress = span > 0 ? (current - min) / span : 0;
      const clamped = Math.max(0, Math.min(1, Number.isFinite(progress) ? progress : 0));
      input.style.setProperty("--range-progress", `${(clamped * 100).toFixed(2)}%`);
    };

    const setOutput = (value: number): void => {
      output.textContent = formatValue(value, spec.precision, spec.suffix);
    };

    const applyValue = (notify: boolean): void => {
      const value = Number(input.value);
      state[key] = value as T[K];
      setOutput(value);
      setRangeProgress();
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
    setRangeProgress();
    input.addEventListener("input", onInput);
    input.addEventListener("change", onChange);
    cleanup.push(() => input.removeEventListener("input", onInput));
    cleanup.push(() => input.removeEventListener("change", onChange));

    row.appendChild(label);
    row.appendChild(output);
    row.appendChild(input);
    return row;
  };

  const bindRange = <T extends object, K extends keyof T>(
    body: HTMLElement,
    state: T,
    key: K,
    spec: RangeSpec,
    onValue: (key: K, value: number) => void,
  ): void => {
    const row = createRangeRow(state, key, spec, onValue);
    body.appendChild(row);
  };

  const bindCheckbox = <T extends object, K extends keyof T>(
    body: HTMLElement,
    state: T,
    key: K,
    labelText: string,
    onValue: (key: K, value: number) => void,
    options?: { hidden?: boolean },
  ): void => {
    const row = document.createElement("label");
    row.className = "checkbox-row";
    if (options?.hidden) {
      row.hidden = true;
    }

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

  const normalizeHexColor = (value: string, fallback: string): string => {
    const trimmed = value.trim().toLowerCase();
    if (/^#[0-9a-f]{6}$/.test(trimmed)) {
      return trimmed;
    }
    if (/^#[0-9a-f]{3}$/.test(trimmed)) {
      return `#${trimmed[1]}${trimmed[1]}${trimmed[2]}${trimmed[2]}${trimmed[3]}${trimmed[3]}`;
    }
    const rgbMatch = trimmed.match(/^rgba?\(([^)]+)\)$/);
    if (rgbMatch) {
      const channels = rgbMatch[1]
        .split(",")
        .slice(0, 3)
        .map((part) => Number.parseFloat(part.trim()));
      if (channels.length === 3 && channels.every((channel) => Number.isFinite(channel))) {
        const r = Math.max(0, Math.min(255, Math.round(channels[0])));
        const g = Math.max(0, Math.min(255, Math.round(channels[1])));
        const b = Math.max(0, Math.min(255, Math.round(channels[2])));
        return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
      }
    }
    return fallback;
  };

  const toRgbChannel = (value: number): number => {
    return Math.round(Math.max(0, Math.min(1, value)) * 255);
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
  ): HTMLInputElement => {
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
    return input;
  };

  const bindTextField = (
    body: HTMLElement,
    labelText: string,
    value: string,
    onValue: (next: string) => void,
    options?: { multiline?: boolean; rows?: number; placeholder?: string },
  ): void => {
    const row = document.createElement("div");
    row.className = "control-row";

    const label = document.createElement("label");
    label.className = "control-label";
    label.textContent = labelText;

    if (options?.multiline) {
      const textarea = document.createElement("textarea");
      textarea.className = "control-textarea";
      textarea.rows = options.rows ?? 3;
      textarea.value = value;
      if (options.placeholder) {
        textarea.placeholder = options.placeholder;
      }
      const onInput = (): void => {
        onValue(textarea.value);
      };
      textarea.addEventListener("input", onInput);
      cleanup.push(() => textarea.removeEventListener("input", onInput));
      row.appendChild(label);
      row.appendChild(textarea);
      body.appendChild(row);
      return;
    }

    const input = document.createElement("input");
    input.type = "text";
    input.className = "control-text";
    input.value = value;
    if (options?.placeholder) {
      input.placeholder = options.placeholder;
    }
    const onInput = (): void => {
      onValue(input.value);
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

  const createSelectRow = <T extends string>(
    labelText: string,
    options: Array<{ label: string; value: T }>,
    initialValue: T,
    onValue: (value: T) => void,
  ): HTMLDivElement => {
    const row = document.createElement("div");
    row.className = "control-row";

    const label = document.createElement("label");
    label.className = "control-label";
    label.textContent = labelText;

    const selectRoot = document.createElement("div");
    selectRoot.className = "control-select";
    selectRoot.dataset.open = "false";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "control-select-trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");

    const valueElement = document.createElement("span");
    valueElement.className = "control-select-value";
    trigger.appendChild(valueElement);

    const menu = document.createElement("div");
    menu.className = "control-select-menu";
    menu.setAttribute("role", "listbox");

    const resolveOption = (value: T): { label: string; value: T } => {
      return options.find((optionData) => optionData.value === value) ?? options[0];
    };

    let currentValue = resolveOption(initialValue).value;

    const optionButtons: Array<{ value: T; element: HTMLButtonElement }> = [];

    const setOpen = (open: boolean): void => {
      selectRoot.dataset.open = open ? "true" : "false";
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    };

    const setValue = (value: T, emit: boolean): void => {
      const option = resolveOption(value);
      currentValue = option.value;
      valueElement.textContent = option.label;
      for (const optionButton of optionButtons) {
        const selected = optionButton.value === currentValue;
        optionButton.element.dataset.selected = selected ? "true" : "false";
        optionButton.element.setAttribute("aria-selected", selected ? "true" : "false");
      }
      if (emit) {
        onValue(currentValue);
      }
    };

    for (const optionData of options) {
      const optionButton = document.createElement("button");
      optionButton.type = "button";
      optionButton.className = "control-select-option";
      optionButton.textContent = optionData.label;
      optionButton.dataset.value = optionData.value;
      optionButton.dataset.selected = "false";
      optionButton.setAttribute("role", "option");
      optionButton.setAttribute("aria-selected", "false");

      const onOptionClick = (): void => {
        setValue(optionData.value, true);
        setOpen(false);
        trigger.focus();
      };

      optionButton.addEventListener("click", onOptionClick);
      cleanup.push(() => optionButton.removeEventListener("click", onOptionClick));
      optionButtons.push({ value: optionData.value, element: optionButton });
      menu.appendChild(optionButton);
    }

    const onTriggerClick = (): void => {
      const isOpen = selectRoot.dataset.open === "true";
      setOpen(!isOpen);
    };

    const onTriggerKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const isOpen = selectRoot.dataset.open === "true";
        setOpen(!isOpen);
        return;
      }
      if (event.key === "Escape") {
        if (selectRoot.dataset.open === "true") {
          event.preventDefault();
          setOpen(false);
        }
        return;
      }
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
        return;
      }
      event.preventDefault();
      const currentIndex = options.findIndex((optionData) => optionData.value === currentValue);
      const fallbackIndex = currentIndex >= 0 ? currentIndex : 0;
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = (fallbackIndex + direction + options.length) % options.length;
      setValue(options[nextIndex].value, true);
    };

    const onDocumentPointerDown = (event: PointerEvent): void => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }
      if (!selectRoot.contains(target)) {
        setOpen(false);
      }
    };

    trigger.addEventListener("click", onTriggerClick);
    trigger.addEventListener("keydown", onTriggerKeyDown);
    document.addEventListener("pointerdown", onDocumentPointerDown);
    cleanup.push(() => trigger.removeEventListener("click", onTriggerClick));
    cleanup.push(() => trigger.removeEventListener("keydown", onTriggerKeyDown));
    cleanup.push(() => document.removeEventListener("pointerdown", onDocumentPointerDown));

    setValue(initialValue, false);

    selectRoot.appendChild(trigger);
    selectRoot.appendChild(menu);

    row.appendChild(label);
    row.appendChild(selectRoot);
    return row;
  };

  const bindSelect = <T extends string>(
    body: HTMLElement,
    labelText: string,
    options: Array<{ label: string; value: T }>,
    initialValue: T,
    onValue: (value: T) => void,
  ): void => {
    body.appendChild(createSelectRow(labelText, options, initialValue, onValue));
  };

  type TabKey = "noise" | "audio" | "shader" | "interation" | "camera" | "ui";
  const tabsNav = document.createElement("div");
  tabsNav.className = "tabs-nav";
  const tabsPanels = document.createElement("div");
  tabsPanels.className = "tabs-panels";

  const tabButtons = {} as Record<TabKey, HTMLButtonElement>;
  const tabPanels = {} as Record<TabKey, HTMLDivElement>;
  const hiddenTabKeys = new Set<TabKey>(["camera", "ui"]);

  const setActiveTab = (activeKey: TabKey): void => {
    const keys = Object.keys(tabButtons) as TabKey[];
    const visibleKeys = keys.filter((key) => !hiddenTabKeys.has(key));
    const resolvedActiveKey = visibleKeys.includes(activeKey) ? activeKey : (visibleKeys[0] ?? activeKey);
    tabsNav.style.gridTemplateColumns = `repeat(${Math.max(1, visibleKeys.length)}, minmax(0, 1fr))`;
    for (const key of keys) {
      const isVisible = !hiddenTabKeys.has(key);
      const isActive = isVisible && key === resolvedActiveKey;
      tabButtons[key].hidden = !isVisible;
      tabButtons[key].dataset.active = isActive ? "true" : "false";
      tabPanels[key].hidden = !isActive;
    }
    scheduleScrollbarTrackAnchorsUpdate();
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
  createTab("ui", "UI");

  const documentStyle = document.documentElement.style;
  const rootComputedStyle = getComputedStyle(document.documentElement);
  const initialTextColor = normalizeHexColor(rootComputedStyle.getPropertyValue("--text"), "#c5cfdf");
  const initialFolderTitleColor = normalizeHexColor(
    rootComputedStyle.getPropertyValue("--folder-title-color"),
    "#c3cedf",
  );
  const initialMainUiColor = normalizeHexColor(rootComputedStyle.getPropertyValue("--ui-main-color"), "#253041");
  const initialPanelHeadColor = normalizeHexColor(
    rootComputedStyle.getPropertyValue("--panel-head-color"),
    "#1f2836",
  );
  const initialUiColor = normalizeHexColor(rootComputedStyle.getPropertyValue("--accent"), "#96c6ff");
  const initialSliderColor = normalizeHexColor(rootComputedStyle.getPropertyValue("--slider-fill"), initialUiColor);
  const initialScrollbarColor = normalizeHexColor(rootComputedStyle.getPropertyValue("--ui-scrollbar-color"), "#7e8999");
  const parsedUiScale = Number.parseFloat(rootComputedStyle.getPropertyValue("--ui-scale"));
  const parsedUiWidthScale = Number.parseFloat(rootComputedStyle.getPropertyValue("--ui-width-scale"));
  const parsedUiBevelStrength = Number.parseFloat(rootComputedStyle.getPropertyValue("--ui-bevel-strength"));
  const parsedMenuSectionGap = Number.parseFloat(rootComputedStyle.getPropertyValue("--menu-section-gap"));
  const parsedMenuPaddingTop = Number.parseFloat(rootComputedStyle.getPropertyValue("--panel-content-pad-top"));
  const parsedMenuPaddingBottom = Number.parseFloat(rootComputedStyle.getPropertyValue("--panel-content-pad-bottom"));
  const parsedHeadFolderLightness = Number.parseFloat(rootComputedStyle.getPropertyValue("--head-folder-lightness"));
  const uiScaleState = {
    value: Number.isFinite(parsedUiScale) && parsedUiScale > 0 ? parsedUiScale : 1,
  };
  const uiWidthScaleState = {
    value: Number.isFinite(parsedUiWidthScale) && parsedUiWidthScale > 0 ? parsedUiWidthScale : 1,
  };
  const uiBevelStrengthState = {
    value: Number.isFinite(parsedUiBevelStrength) && parsedUiBevelStrength > 0 ? parsedUiBevelStrength : 1,
  };
  const menuSectionGapState = {
    value: Number.isFinite(parsedMenuSectionGap) ? parsedMenuSectionGap : 1,
  };
  const menuPaddingTopState = {
    value: Number.isFinite(parsedMenuPaddingTop) ? parsedMenuPaddingTop : 1,
  };
  const menuPaddingBottomState = {
    value: Number.isFinite(parsedMenuPaddingBottom) ? parsedMenuPaddingBottom : 1,
  };
  const headFolderLightnessState = {
    value: Number.isFinite(parsedHeadFolderLightness) && parsedHeadFolderLightness > 0 ? parsedHeadFolderLightness : 1,
  };
  const uiTextColor = fromHexColor(initialTextColor);
  const uiFolderTitleColor = fromHexColor(initialFolderTitleColor);
  const uiMainColor = fromHexColor(initialMainUiColor);
  const panelHeadColor = fromHexColor(initialPanelHeadColor);
  const uiAccentColor = fromHexColor(initialUiColor);
  const uiSliderColor = fromHexColor(initialSliderColor);
  const uiScrollbarColor = fromHexColor(initialScrollbarColor);
  const panelHeadShadow = { r: 11 / 255, g: 17 / 255, b: 26 / 255 };
  type UiThemePreset = {
    text: string;
    folderTitle: string;
    main: string;
    head: string;
    accent: string;
    sliderFill: string;
    scrollbar: string;
  };
  const uiThemePresets: Record<MaterialMode, UiThemePreset> = {
    matcap: {
      text: "#d5deeb",
      folderTitle: "#d2dbe9",
      main: "#3a3b42",
      head: "#26303d",
      accent: "#a8d2ff",
      sliderFill: "#a8d2ff",
      scrollbar: "#97a3b4",
    },
    pbr: {
      text: "#dde3ea",
      folderTitle: "#d8dee6",
      main: "#454545",
      head: "#3f454d",
      accent: "#f3f6fa",
      sliderFill: "#9ec7f4",
      scrollbar: "#b8bec6",
    },
  };
  let uiTextColorInput: HTMLInputElement | null = null;
  let folderTitleColorInput: HTMLInputElement | null = null;
  let mainUiColorInput: HTMLInputElement | null = null;
  let headColorInput: HTMLInputElement | null = null;
  let accentColorInput: HTMLInputElement | null = null;
  let sliderFillColorInput: HTMLInputElement | null = null;
  let scrollbarColorInput: HTMLInputElement | null = null;

  const clamp = (value: number, min: number, max: number): number => {
    return Math.max(min, Math.min(max, value));
  };

  const syncScrollbarFit = (): void => {
    const scale = clamp(uiScaleState.value, 0.75, 1.6);
    const bevel = clamp(uiBevelStrengthState.value, 0.6, 1.8);
    const sizePx = clamp(6.8 * scale, 6, 11);
    const topOffsetPx = clamp((4.5 + (bevel - 1) * 5.2) * scale, 4, 14);
    const bottomOffsetPx = clamp((11 + (bevel - 1) * 8) * scale, 10, 26);
    const thumbMinPx = clamp((34 + (bevel - 1) * 12) * scale, 26, 54);
    const panelStyles = getComputedStyle(panelElement);
    const panelInlinePadPx = Number.parseFloat(panelStyles.paddingRight);
    const rightOffsetPx = clamp(
      ((Number.isFinite(panelInlinePadPx) ? panelInlinePadPx : 15) - sizePx) * 0.5,
      0,
      40,
    );

    documentStyle.setProperty("--ui-scrollbar-size", `${sizePx.toFixed(1)}px`);
    documentStyle.setProperty("--ui-scrollbar-right-offset", `${rightOffsetPx.toFixed(1)}px`);
    documentStyle.setProperty("--ui-scrollbar-top-offset", `${topOffsetPx.toFixed(1)}px`);
    documentStyle.setProperty("--ui-scrollbar-bottom-offset", `${bottomOffsetPx.toFixed(1)}px`);
    documentStyle.setProperty("--ui-scrollbar-thumb-min", `${thumbMinPx.toFixed(1)}px`);
  };

  let scrollbarAnchorRafId = 0;
  let scrollbarSyncRafId = 0;
  let hintPositionRafId = 0;
  let scrollbarDragPointerId: number | null = null;
  let scrollbarDragStartClientY = 0;
  let scrollbarDragStartScrollTop = 0;
  let lastScrollbarScrollTop = -1;
  let lastScrollbarClientHeight = -1;
  let lastScrollbarScrollHeight = -1;
  let lastScrollbarTrackHeight = -1;
  const parseCssPx = (value: string, fallback: number): number => {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  };
  const parseCssRadiusPx = (value: string, fallback: number): number => {
    const token = value.trim().split(/\s+/)[0] ?? "";
    const parsed = Number.parseFloat(token);
    return Number.isFinite(parsed) ? parsed : fallback;
  };
  const getScrollbarMetrics = (): {
    scrollRange: number;
    trackHeight: number;
    thumbSize: number;
    maxThumbOffset: number;
  } | null => {
    const scrollRange = tabsPanels.scrollHeight - tabsPanels.clientHeight;
    if (scrollRange <= 0) {
      return null;
    }

    const rootStyles = getComputedStyle(document.documentElement);
    const fallbackTrackHeight = Math.max(tabsPanels.clientHeight, 0);
    const trackHeight = panelScrollbar.clientHeight > 0 ? panelScrollbar.clientHeight : fallbackTrackHeight;
    if (trackHeight <= 0) {
      return null;
    }

    const minThumb = parseCssPx(rootStyles.getPropertyValue("--ui-scrollbar-thumb-min"), 26);
    const visibleRatio = tabsPanels.clientHeight / tabsPanels.scrollHeight;
    const thumbSize = clamp(trackHeight * visibleRatio, Math.min(minThumb, trackHeight), trackHeight);
    const maxThumbOffset = Math.max(trackHeight - thumbSize, 0);

    return {
      scrollRange,
      trackHeight,
      thumbSize,
      maxThumbOffset,
    };
  };
  const updateCustomScrollbarThumb = (): void => {
    const metrics = getScrollbarMetrics();
    const scrollTop = tabsPanels.scrollTop;
    panelScrollbar.style.transform = "translateY(0)";
    if (!metrics) {
      panelScrollbar.dataset.hidden = "true";
      panelScrollbarThumb.style.height = "";
      panelScrollbarThumb.style.transform = "translateY(0)";
      return;
    }

    panelScrollbar.dataset.hidden = "false";
    const scrollRatio = clamp(scrollTop / metrics.scrollRange, 0, 1);
    const thumbSize = metrics.thumbSize;
    const maxThumbOffset = metrics.maxThumbOffset;
    const thumbOffset = maxThumbOffset * scrollRatio;

    panelScrollbarThumb.style.height = `${thumbSize.toFixed(1)}px`;
    panelScrollbarThumb.style.transform = `translateY(${thumbOffset.toFixed(1)}px)`;
  };

  const updateHintPosition = (): void => {
    if (uiHidden) {
      return;
    }
    if (!root.isConnected || !panelElement.isConnected || !hintRowElement.isConnected) {
      return;
    }

    const rootRect = root.getBoundingClientRect();
    if (rootRect.width <= 0) {
      return;
    }

    const panelRect = panelElement.getBoundingClientRect();
    const panelRight = Math.max(0, Math.min(rootRect.width, panelRect.right - rootRect.left));
    const hintCenterX = panelRight + (rootRect.width - panelRight) * 0.5;
    root.style.setProperty("--hint-center-x", `${hintCenterX.toFixed(1)}px`);
  };

  const scheduleHintPositionUpdate = (): void => {
    if (hintPositionRafId !== 0) {
      window.cancelAnimationFrame(hintPositionRafId);
    }
    hintPositionRafId = window.requestAnimationFrame(() => {
      hintPositionRafId = 0;
      updateHintPosition();
    });
  };

  const stopScrollbarThumbDrag = (pointerId?: number): void => {
    if (scrollbarDragPointerId === null) {
      return;
    }
    if (pointerId !== undefined && pointerId !== scrollbarDragPointerId) {
      return;
    }

    const activePointerId = scrollbarDragPointerId;
    scrollbarDragPointerId = null;
    panelScrollbarThumb.dataset.dragging = "false";
    if (panelScrollbarThumb.hasPointerCapture(activePointerId)) {
      panelScrollbarThumb.releasePointerCapture(activePointerId);
    }
  };

  const onScrollbarThumbPointerDown = (event: PointerEvent): void => {
    if (event.button !== 0) {
      return;
    }
    const metrics = getScrollbarMetrics();
    if (!metrics) {
      return;
    }

    event.preventDefault();
    scrollbarDragPointerId = event.pointerId;
    scrollbarDragStartClientY = event.clientY;
    scrollbarDragStartScrollTop = tabsPanels.scrollTop;
    panelScrollbarThumb.dataset.dragging = "true";
    panelScrollbarThumb.setPointerCapture(event.pointerId);
  };

  const onScrollbarThumbPointerMove = (event: PointerEvent): void => {
    if (scrollbarDragPointerId === null || event.pointerId !== scrollbarDragPointerId) {
      return;
    }
    const metrics = getScrollbarMetrics();
    if (!metrics || metrics.maxThumbOffset <= 0 || metrics.scrollRange <= 0) {
      return;
    }

    event.preventDefault();
    const deltaY = event.clientY - scrollbarDragStartClientY;
    const scrollDelta = (deltaY / metrics.maxThumbOffset) * metrics.scrollRange;
    tabsPanels.scrollTop = clamp(scrollbarDragStartScrollTop + scrollDelta, 0, metrics.scrollRange);
    updateCustomScrollbarThumb();
  };

  const onScrollbarThumbPointerUp = (event: PointerEvent): void => {
    stopScrollbarThumbDrag(event.pointerId);
  };

  const onScrollbarThumbPointerCancel = (event: PointerEvent): void => {
    stopScrollbarThumbDrag(event.pointerId);
  };

  const onScrollbarThumbLostPointerCapture = (event: PointerEvent): void => {
    stopScrollbarThumbDrag(event.pointerId);
  };

  panelScrollbarThumb.dataset.dragging = "false";
  panelScrollbarThumb.addEventListener("pointerdown", onScrollbarThumbPointerDown);
  panelScrollbarThumb.addEventListener("pointermove", onScrollbarThumbPointerMove);
  panelScrollbarThumb.addEventListener("pointerup", onScrollbarThumbPointerUp);
  panelScrollbarThumb.addEventListener("pointercancel", onScrollbarThumbPointerCancel);
  panelScrollbarThumb.addEventListener("lostpointercapture", onScrollbarThumbLostPointerCapture);
  cleanup.push(() => panelScrollbarThumb.removeEventListener("pointerdown", onScrollbarThumbPointerDown));
  cleanup.push(() => panelScrollbarThumb.removeEventListener("pointermove", onScrollbarThumbPointerMove));
  cleanup.push(() => panelScrollbarThumb.removeEventListener("pointerup", onScrollbarThumbPointerUp));
  cleanup.push(() => panelScrollbarThumb.removeEventListener("pointercancel", onScrollbarThumbPointerCancel));
  cleanup.push(() => panelScrollbarThumb.removeEventListener("lostpointercapture", onScrollbarThumbLostPointerCapture));
  cleanup.push(() => stopScrollbarThumbDrag());

  const startScrollbarSyncLoop = (): void => {
    const tick = (): void => {
      const currentScrollTop = tabsPanels.scrollTop;
      const currentClientHeight = tabsPanels.clientHeight;
      const currentScrollHeight = tabsPanels.scrollHeight;
      const currentTrackHeight = panelScrollbar.clientHeight;

      if (
        currentScrollTop !== lastScrollbarScrollTop ||
        currentClientHeight !== lastScrollbarClientHeight ||
        currentScrollHeight !== lastScrollbarScrollHeight ||
        currentTrackHeight !== lastScrollbarTrackHeight
      ) {
        lastScrollbarScrollTop = currentScrollTop;
        lastScrollbarClientHeight = currentClientHeight;
        lastScrollbarScrollHeight = currentScrollHeight;
        lastScrollbarTrackHeight = currentTrackHeight;
        updateCustomScrollbarThumb();
      }

      scrollbarSyncRafId = window.requestAnimationFrame(tick);
    };

    if (scrollbarSyncRafId !== 0) {
      window.cancelAnimationFrame(scrollbarSyncRafId);
    }
    scrollbarSyncRafId = window.requestAnimationFrame(tick);
  };

  const updateScrollbarTrackAnchors = (): void => {
    if (!tabsPanels.isConnected) {
      return;
    }
    const panelRect = panelElement.getBoundingClientRect();
    const panelHeadRect = panelHeadElement.getBoundingClientRect();
    const tabsPanelsRect = tabsPanels.getBoundingClientRect();
    const panelStyles = getComputedStyle(panelElement);
    const tabsPanelsStyles = getComputedStyle(tabsPanels);
    if (panelRect.height <= 0 || tabsPanelsRect.height <= 0 || panelHeadRect.height <= 0) {
      return;
    }

    const tabsPaddingTop = parseCssPx(tabsPanelsStyles.paddingTop, 0);
    const tabsPaddingBottom = parseCssPx(tabsPanelsStyles.paddingBottom, 0);
    const topInset = panelHeadRect.bottom - panelRect.top + tabsPaddingTop;
    const bottomInset = panelRect.bottom - tabsPanelsRect.bottom + tabsPaddingBottom;
    const topRightRadius = parseCssRadiusPx(panelStyles.borderTopRightRadius, 0);
    const bottomRightRadius = parseCssRadiusPx(panelStyles.borderBottomRightRadius, 0);

    const topOffset = clamp(Math.max(topInset, topRightRadius), 0, panelRect.height * 0.46);
    const bottomOffset = clamp(Math.max(bottomInset, bottomRightRadius), 0, panelRect.height * 0.46);

    documentStyle.setProperty("--ui-scrollbar-top-offset", `${topOffset.toFixed(1)}px`);
    documentStyle.setProperty("--ui-scrollbar-bottom-offset", `${bottomOffset.toFixed(1)}px`);
    updateCustomScrollbarThumb();
  };

  const scheduleScrollbarTrackAnchorsUpdate = (syncHint = true): void => {
    if (scrollbarAnchorRafId !== 0) {
      window.cancelAnimationFrame(scrollbarAnchorRafId);
    }
    scrollbarAnchorRafId = window.requestAnimationFrame(() => {
      scrollbarAnchorRafId = 0;
      updateScrollbarTrackAnchors();
      if (syncHint) {
        updateHintPosition();
      }
    });
  };

  const applyUiTextColor = (color: { r: number; g: number; b: number }): void => {
    const hex = toHexColor(color.r, color.g, color.b);
    const r = toRgbChannel(color.r);
    const g = toRgbChannel(color.g);
    const b = toRgbChannel(color.b);
    documentStyle.setProperty("--text", hex);
    documentStyle.setProperty("--muted", `rgba(${r}, ${g}, ${b}, 0.72)`);
  };

  const applyFolderTitleColor = (color: { r: number; g: number; b: number }): void => {
    const hex = toHexColor(color.r, color.g, color.b);
    documentStyle.setProperty("--folder-title-color", hex);
  };

  const derivePanelHeadColorFromMain = (color: { r: number; g: number; b: number }): { r: number; g: number; b: number } => {
    const mainMix = 0.74;
    const shadowMix = 1 - mainMix;
    return {
      r: color.r * mainMix + panelHeadShadow.r * shadowMix,
      g: color.g * mainMix + panelHeadShadow.g * shadowMix,
      b: color.b * mainMix + panelHeadShadow.b * shadowMix,
    };
  };

  const applyUiMainColor = (color: { r: number; g: number; b: number }): void => {
    uiMainColor.r = color.r;
    uiMainColor.g = color.g;
    uiMainColor.b = color.b;
    documentStyle.setProperty("--ui-main-color", toHexColor(color.r, color.g, color.b));
    applyPanelHeadColor(derivePanelHeadColorFromMain(color));
  };

  const applyPanelHeadColor = (color: { r: number; g: number; b: number }): void => {
    panelHeadColor.r = color.r;
    panelHeadColor.g = color.g;
    panelHeadColor.b = color.b;
    documentStyle.setProperty("--panel-head-color", toHexColor(color.r, color.g, color.b));
  };

  const applyHeadFolderLightness = (value: number): void => {
    const clamped = clamp(value, 0.7, 1.35);
    documentStyle.setProperty("--head-folder-lightness", clamped.toFixed(2));
  };

  const applyUiColor = (color: { r: number; g: number; b: number }): void => {
    const hex = toHexColor(color.r, color.g, color.b);
    const r = toRgbChannel(color.r);
    const g = toRgbChannel(color.g);
    const b = toRgbChannel(color.b);
    documentStyle.setProperty("--accent", hex);
    documentStyle.setProperty("--line", `rgba(${r}, ${g}, ${b}, 0.18)`);
    documentStyle.setProperty("--line-strong", `rgba(${r}, ${g}, ${b}, 0.32)`);
  };

  const applyUiScale = (value: number): void => {
    const clamped = Math.max(0.75, Math.min(1.6, value));
    documentStyle.setProperty("--ui-scale", clamped.toFixed(2));
    syncScrollbarFit();
    scheduleScrollbarTrackAnchorsUpdate();
  };

  const applyUiWidthScale = (value: number): void => {
    const clamped = clamp(value, 0.6, 1.8);
    documentStyle.setProperty("--ui-width-scale", clamped.toFixed(2));
    syncScrollbarFit();
    scheduleScrollbarTrackAnchorsUpdate();
  };

  const applyUiBevelStrength = (value: number): void => {
    const clamped = clamp(value, 0.6, 1.8);
    documentStyle.setProperty("--ui-bevel-strength", clamped.toFixed(2));
    syncScrollbarFit();
    scheduleScrollbarTrackAnchorsUpdate();
  };

  const applyUiSliderColor = (color: { r: number; g: number; b: number }): void => {
    const hex = toHexColor(color.r, color.g, color.b);
    documentStyle.setProperty("--slider-fill", hex);
  };

  const applyUiScrollbarColor = (color: { r: number; g: number; b: number }): void => {
    const hex = toHexColor(color.r, color.g, color.b);
    documentStyle.setProperty("--ui-scrollbar-color", hex);
  };

  const applyMenuSectionGap = (value: number): void => {
    const clamped = clamp(value, 0.2, 1.8);
    documentStyle.setProperty("--menu-section-gap", `${clamped.toFixed(2)}rem`);
    updateCustomScrollbarThumb();
  };

  const applyMenuPaddingTop = (value: number): void => {
    const clamped = clamp(value, 0, 2);
    documentStyle.setProperty("--panel-content-pad-top", `${clamped.toFixed(2)}rem`);
    scheduleScrollbarTrackAnchorsUpdate();
  };

  const applyMenuPaddingBottom = (value: number): void => {
    const clamped = clamp(value, 0, 2);
    documentStyle.setProperty("--panel-content-pad-bottom", `${clamped.toFixed(2)}rem`);
    scheduleScrollbarTrackAnchorsUpdate();
  };

  const setColorStateFromHex = (state: { r: number; g: number; b: number }, hex: string): void => {
    const next = fromHexColor(hex);
    state.r = next.r;
    state.g = next.g;
    state.b = next.b;
  };

  const syncThemeColorInputs = (): void => {
    if (uiTextColorInput) {
      uiTextColorInput.value = toHexColor(uiTextColor.r, uiTextColor.g, uiTextColor.b);
    }
    if (folderTitleColorInput) {
      folderTitleColorInput.value = toHexColor(uiFolderTitleColor.r, uiFolderTitleColor.g, uiFolderTitleColor.b);
    }
    if (mainUiColorInput) {
      mainUiColorInput.value = toHexColor(uiMainColor.r, uiMainColor.g, uiMainColor.b);
    }
    if (headColorInput) {
      headColorInput.value = toHexColor(panelHeadColor.r, panelHeadColor.g, panelHeadColor.b);
    }
    if (accentColorInput) {
      accentColorInput.value = toHexColor(uiAccentColor.r, uiAccentColor.g, uiAccentColor.b);
    }
    if (sliderFillColorInput) {
      sliderFillColorInput.value = toHexColor(uiSliderColor.r, uiSliderColor.g, uiSliderColor.b);
    }
    if (scrollbarColorInput) {
      scrollbarColorInput.value = toHexColor(uiScrollbarColor.r, uiScrollbarColor.g, uiScrollbarColor.b);
    }
  };

  const applyUiThemePreset = (mode: MaterialMode): void => {
    const preset = uiThemePresets[mode];
    setColorStateFromHex(uiTextColor, preset.text);
    applyUiTextColor(uiTextColor);
    setColorStateFromHex(uiFolderTitleColor, preset.folderTitle);
    applyFolderTitleColor(uiFolderTitleColor);
    setColorStateFromHex(uiMainColor, preset.main);
    applyUiMainColor(uiMainColor);
    setColorStateFromHex(uiAccentColor, preset.accent);
    applyUiColor(uiAccentColor);
    setColorStateFromHex(uiSliderColor, preset.sliderFill);
    applyUiSliderColor(uiSliderColor);
    setColorStateFromHex(uiScrollbarColor, preset.scrollbar);
    applyUiScrollbarColor(uiScrollbarColor);
    syncThemeColorInputs();
  };

  applyUiBevelStrength(uiBevelStrengthState.value);
  applyUiWidthScale(uiWidthScaleState.value);
  applyUiScale(uiScaleState.value);
  applyMenuSectionGap(menuSectionGapState.value);
  applyMenuPaddingTop(menuPaddingTopState.value);
  applyMenuPaddingBottom(menuPaddingBottomState.value);
  applyHeadFolderLightness(headFolderLightnessState.value);
  applyProjectTitle(projectTitleText);
  applyProjectDescription(projectDescriptionText);

  const unifiedFolder = createFolder("MAIN NOISE", true);
  const unifiedBody = requireElement<HTMLDivElement>(unifiedFolder, ".folder-body");
  type NoiseCoreOption = "simplex" | "openSimplex" | "openSimplexFixed";
  const toNoiseCoreOption = (value: number): NoiseCoreOption => {
    const mode = Math.round(value);
    if (mode === 1) {
      return "openSimplex";
    }
    if (mode >= 2) {
      return "openSimplexFixed";
    }
    return "simplex";
  };
  bindSelect<NoiseCoreOption>(
    unifiedBody,
    "Noise Core",
    [
      { label: "Type 1", value: "simplex" },
      { label: "Type 2", value: "openSimplex" },
      { label: "Type 3", value: "openSimplexFixed" },
    ],
    toNoiseCoreOption(noiseParams.noiseCore),
    (value): void => {
      const numericValue = value === "openSimplex" ? 1 : value === "openSimplexFixed" ? 2 : 0;
      noiseParams.noiseCore = numericValue;
      callbacks.onNoiseParamChange("noiseCore", numericValue);
    },
  );
  bindRange(unifiedBody, noiseParams, "baseFreq", {
    label: "Main Noise Size",
    min: 0.05,
    max: 1.0,
    step: 0.001,
    precision: 3,
  }, callbacks.onNoiseParamChange);
  const outputPairRow = document.createElement("div");
  outputPairRow.className = "control-row-pair";
  const outputMinRow = createRangeRow(noiseParams, "outputMin", {
    label: "Output Min",
    min: -2.0,
    max: 2.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  const outputMaxRow = createRangeRow(noiseParams, "outputMax", {
    label: "Output Max",
    min: -2.0,
    max: 2.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  outputPairRow.appendChild(outputMinRow);
  outputPairRow.appendChild(outputMaxRow);
  unifiedBody.appendChild(outputPairRow);
  bindRange(unifiedBody, noiseParams, "finalAmp", {
    label: "Final Amplitude",
    min: 0,
    max: 8,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  const latticePairRow = document.createElement("div");
  latticePairRow.className = "control-row-pair";
  const latticeWarpRow = createRangeRow(noiseParams, "latticeWarp", {
    label: "Lattice Warp",
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  const latticeWarpFreqRow = createRangeRow(noiseParams, "latticeWarpFreq", {
    label: "Warp Frequency",
    min: 0.05,
    max: 1.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  latticePairRow.appendChild(latticeWarpRow);
  latticePairRow.appendChild(latticeWarpFreqRow);
  unifiedBody.appendChild(latticePairRow);
  type SymmetryModeOption = "0" | "1" | "2";
  const toSymmetryModeOption = (value: number): SymmetryModeOption => {
    const mode = Math.round(value);
    if (mode === 1) {
      return "1";
    }
    if (mode >= 2) {
      return "2";
    }
    return "0";
  };
  const symmetryModeRow = createSelectRow<SymmetryModeOption>(
    "Symmetry",
    [
      { label: "Off", value: "0" },
      { label: "Single", value: "1" },
      { label: "Cross", value: "2" },
    ],
    toSymmetryModeOption(noiseParams.symmetryMode),
    (value): void => {
      const numericValue = Number(value);
      noiseParams.symmetryMode = numericValue;
      callbacks.onNoiseParamChange("symmetryMode", numericValue);
    },
  );
  const symmetryPairRow = document.createElement("div");
  symmetryPairRow.className = "control-row-pair";
  const symmetryWidthRow = createRangeRow(noiseParams, "symmetryWidth", {
    label: "Symmetry Width",
    min: 0.001,
    max: 1.0,
    step: 0.001,
    precision: 3,
  }, callbacks.onNoiseParamChange);
  symmetryPairRow.appendChild(symmetryModeRow);
  symmetryPairRow.appendChild(symmetryWidthRow);
  unifiedBody.appendChild(symmetryPairRow);
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

  const turboFolder = createFolder("DISTORTION NOISE", true);
  const turboBody = requireElement<HTMLDivElement>(turboFolder, ".folder-body");
  bindRange(turboBody, noiseParams, "turboFreq", {
    label: "Distortion Noise Size",
    min: 0.05,
    max: 1.0,
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
  bindCheckbox(turboBody, noiseParams, "complement", "Complement", callbacks.onNoiseParamChange);

  const audioFolder = createFolder("AUDIO MAPPING", true);
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
  bindRange(audioBody, audioMapParams, "micSensitivity", {
    label: "Mic Sensitivity",
    min: 0.1,
    max: 4.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, noiseParams, "baseOffsetZ", {
    label: "Z Offset",
    min: -8,
    max: 8,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(audioBody, audioMapParams, "driftAudioAmount", {
    label: "Drift Audio",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "offsetZAudioAmount", {
    label: "Z Offset Audio",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
  }, callbacks.onAudioMapParamChange);
  bindRange(audioBody, audioMapParams, "finalAmpAudioAmount", {
    label: "Final Amp Audio",
    min: 0,
    max: 1,
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

  const interactionFolder = createFolder("INTERACTION", true);
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

  const cameraFolder = createFolder("CAMERA", true);
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
  bindRange(cameraBody, cameraParams, "orbitTail", {
    label: "Orbit Tail",
    min: 0,
    max: 3.0,
    step: 0.01,
    precision: 2,
    suffix: "s",
  }, callbacks.onCameraParamChange);
  bindRange(cameraBody, cameraParams, "panTail", {
    label: "Pan Tail",
    min: 0,
    max: 3.0,
    step: 0.01,
    precision: 2,
    suffix: "s",
  }, callbacks.onCameraParamChange);

  const uiFolder = createFolder("UI CONFIG", true);
  const uiBody = requireElement<HTMLDivElement>(uiFolder, ".folder-body");
  bindSelect<UiDepthMode>(
    uiBody,
    "UI Bevel",
    [
      { label: "Soft", value: "soft" },
      { label: "Medium", value: "medium" },
      { label: "Deep", value: "deep" },
    ],
    uiDepthState.value,
    (value): void => {
      setUiDepth(value);
    },
  );
  bindCheckbox(uiBody, soloNoisePlaneToggleState, "enabled", "Solo Noise Plane", (_key, value): void => {
    soloNoisePlaneToggleState.enabled = value;
    callbacks.onSoloNoisePlaneToggle(value >= 0.5);
  });
  bindRange(uiBody, uiBevelStrengthState, "value", {
    label: "Bevel Shape",
    min: 0.6,
    max: 1.8,
    step: 0.01,
    precision: 2,
  }, (_key, value): void => {
    uiBevelStrengthState.value = value;
    applyUiBevelStrength(value);
  });
  bindTextField(
    uiBody,
    "Main Title",
    projectTitleText,
    (next): void => {
      projectTitleText = next;
      applyProjectTitle(next);
    },
    { placeholder: defaultProjectTitle },
  );
  bindTextField(
    uiBody,
    "Description",
    projectDescriptionText,
    (next): void => {
      projectDescriptionText = next;
      applyProjectDescription(next);
    },
    { multiline: true, rows: 3, placeholder: defaultProjectDescriptionLines.join("\n") },
  );
  uiTextColorInput = bindColor(uiBody, "UI Text Color", uiTextColor, (next): void => {
    uiTextColor.r = next.r;
    uiTextColor.g = next.g;
    uiTextColor.b = next.b;
    applyUiTextColor(uiTextColor);
  });
  folderTitleColorInput = bindColor(uiBody, "Folder Name Color", uiFolderTitleColor, (next): void => {
    uiFolderTitleColor.r = next.r;
    uiFolderTitleColor.g = next.g;
    uiFolderTitleColor.b = next.b;
    applyFolderTitleColor(uiFolderTitleColor);
  });
  mainUiColorInput = bindColor(uiBody, "Main UI Color", uiMainColor, (next): void => {
    uiMainColor.r = next.r;
    uiMainColor.g = next.g;
    uiMainColor.b = next.b;
    applyUiMainColor(uiMainColor);
  });
  headColorInput = bindColor(uiBody, "Head Color", panelHeadColor, (next): void => {
    panelHeadColor.r = next.r;
    panelHeadColor.g = next.g;
    panelHeadColor.b = next.b;
    applyPanelHeadColor(panelHeadColor);
  });
  bindRange(uiBody, headFolderLightnessState, "value", {
    label: "Head/Folder Lightness",
    min: 0.7,
    max: 1.35,
    step: 0.01,
    precision: 2,
  }, (_key, value): void => {
    headFolderLightnessState.value = value;
    applyHeadFolderLightness(value);
  });
  accentColorInput = bindColor(uiBody, "Accent Color", uiAccentColor, (next): void => {
    uiAccentColor.r = next.r;
    uiAccentColor.g = next.g;
    uiAccentColor.b = next.b;
    applyUiColor(uiAccentColor);
  });
  sliderFillColorInput = bindColor(uiBody, "Slider Fill", uiSliderColor, (next): void => {
    uiSliderColor.r = next.r;
    uiSliderColor.g = next.g;
    uiSliderColor.b = next.b;
    applyUiSliderColor(uiSliderColor);
  });
  scrollbarColorInput = bindColor(uiBody, "Scrollbar Color", uiScrollbarColor, (next): void => {
    uiScrollbarColor.r = next.r;
    uiScrollbarColor.g = next.g;
    uiScrollbarColor.b = next.b;
    applyUiScrollbarColor(uiScrollbarColor);
  });
  bindRange(uiBody, uiScaleState, "value", {
    label: "UI Size",
    min: 0.75,
    max: 1.6,
    step: 0.01,
    precision: 2,
  }, (_key, value): void => {
    uiScaleState.value = value;
    applyUiScale(value);
  });
  bindRange(uiBody, uiWidthScaleState, "value", {
    label: "UI Width",
    min: 0.6,
    max: 1.8,
    step: 0.01,
    precision: 2,
  }, (_key, value): void => {
    uiWidthScaleState.value = value;
    applyUiWidthScale(value);
  });
  bindRange(uiBody, menuSectionGapState, "value", {
    label: "Folder Gap",
    min: 0.2,
    max: 1.8,
    step: 0.01,
    precision: 2,
  }, (_key, value): void => {
    menuSectionGapState.value = value;
    applyMenuSectionGap(value);
  });
  bindRange(uiBody, menuPaddingTopState, "value", {
    label: "Menu Padding Top",
    min: 0,
    max: 2,
    step: 0.01,
    precision: 2,
  }, (_key, value): void => {
    menuPaddingTopState.value = value;
    applyMenuPaddingTop(value);
  });
  bindRange(uiBody, menuPaddingBottomState, "value", {
    label: "Menu Padding Bottom",
    min: 0,
    max: 2,
    step: 0.01,
    precision: 2,
  }, (_key, value): void => {
    menuPaddingBottomState.value = value;
    applyMenuPaddingBottom(value);
  });

  const materialFolder = createFolder("MATERIAL", true);
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
      applyUiThemePreset(value);
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
  applyUiThemePreset(materialMode);

  const aoFolder = createFolder("AO", true);
  const aoBody = requireElement<HTMLDivElement>(aoFolder, ".folder-body");
  const shadingFolder = createFolder("LIGHTING", true);
  const shadingBody = requireElement<HTMLDivElement>(shadingFolder, ".folder-body");
  const performanceFolder = createFolder("PERFORMANCE", true);
  const performanceBody = requireElement<HTMLDivElement>(performanceFolder, ".folder-body");
  const aoToggleState = { enabled: ambientOcclusionMode === "gtao" ? 1 : 0 };
  bindCheckbox(aoBody, aoToggleState, "enabled", "AO", (_key, value): void => {
    const nextMode: AmbientOcclusionMode = value > 0.5 ? "gtao" : "none";
    ambientOcclusionMode = nextMode;
    callbacks.onAmbientOcclusionModeChange(nextMode);
  });
  let fpsLimitMode: "30" | "60" | "unlimited" = "60";
  bindSelect<"30" | "60" | "unlimited">(
    performanceBody,
    "FPS Limit",
    [
      { label: "30 FPS", value: "30" },
      { label: "60 FPS", value: "60" },
      { label: "Unlimited", value: "unlimited" },
    ],
    fpsLimitMode,
    (value): void => {
      fpsLimitMode = value;
      callbacks.onFpsLimitModeChange(value);
    },
  );
  bindRange(aoBody, ambientOcclusionParams, "intensity", {
    label: "AO Intensity",
    min: 0,
    max: 3,
    step: 0.01,
    precision: 2,
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
  tabPanels.shader.appendChild(performanceFolder);
  tabPanels.interation.appendChild(interactionFolder);
  tabPanels.camera.appendChild(cameraFolder);
  tabPanels.ui.appendChild(uiFolder);

  tabsNavSlot.appendChild(tabsNav);
  foldersRoot.appendChild(tabsPanels);
  setActiveTab("noise");
  scheduleScrollbarTrackAnchorsUpdate();
  startScrollbarSyncLoop();

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

  const onDefaultClick = async (): Promise<void> => {
    if (defaultBusy) {
      return;
    }
    defaultBusy = true;
    refreshButtonState();
    try {
      await callbacks.onDefaultSelected();
    } finally {
      defaultBusy = false;
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

  const onRecordClick = async (): Promise<void> => {
    if (recordBusy || !recordEnabled) {
      return;
    }
    recordBusy = true;
    refreshButtonState();
    try {
      await callbacks.onRecordToggle();
    } finally {
      recordBusy = false;
      refreshButtonState();
    }
  };

  const onDefaultButtonClick = (): void => {
    void onDefaultClick();
  };
  const onMicButtonClick = (): void => {
    void onMicClick();
  };
  const onPlayButtonClick = (): void => {
    void onPlayClick();
  };
  const onRecordButtonClick = (): void => {
    void onRecordClick();
  };
  const onSeekSliderInput = (): void => {
    const value = Number(seekSlider.value);
    seekBusy = true;
    setSeekProgress(value);
    void Promise.resolve(callbacks.onSeekNormalized(Math.max(0, Math.min(1, value))))
      .finally(() => {
        seekBusy = false;
        refreshButtonState();
      });
  };
  const onUiVisibilityToggleClick = (): void => {
    uiHidden = !uiHidden;
    applyUiVisibility();
  };
  const onWindowResize = (): void => {
    scheduleScrollbarTrackAnchorsUpdate();
    scheduleHintPositionUpdate();
  };
  const onPanelScroll = (): void => {
    updateCustomScrollbarThumb();
  };

  defaultButton.addEventListener("click", onDefaultButtonClick);
  fileInput.addEventListener("change", onFileChange);
  micButton.addEventListener("click", onMicButtonClick);
  recordButton.addEventListener("click", onRecordButtonClick);
  playButton.addEventListener("click", onPlayButtonClick);
  seekSlider.addEventListener("input", onSeekSliderInput);
  uiVisibilityButton.addEventListener("click", onUiVisibilityToggleClick);
  tabsPanels.addEventListener("scroll", onPanelScroll, { passive: true });
  window.addEventListener("resize", onWindowResize);
  cleanup.push(() => defaultButton.removeEventListener("click", onDefaultButtonClick));
  cleanup.push(() => fileInput.removeEventListener("change", onFileChange));
  cleanup.push(() => micButton.removeEventListener("click", onMicButtonClick));
  cleanup.push(() => recordButton.removeEventListener("click", onRecordButtonClick));
  cleanup.push(() => playButton.removeEventListener("click", onPlayButtonClick));
  cleanup.push(() => seekSlider.removeEventListener("input", onSeekSliderInput));
  cleanup.push(() => uiVisibilityButton.removeEventListener("click", onUiVisibilityToggleClick));
  cleanup.push(() => tabsPanels.removeEventListener("scroll", onPanelScroll));
  cleanup.push(() => window.removeEventListener("resize", onWindowResize));
  cleanup.push(() => {
    if (hintPositionRafId !== 0) {
      window.cancelAnimationFrame(hintPositionRafId);
      hintPositionRafId = 0;
    }
  });
  cleanup.push(() => {
    if (scrollbarAnchorRafId !== 0) {
      window.cancelAnimationFrame(scrollbarAnchorRafId);
      scrollbarAnchorRafId = 0;
    }
    if (scrollbarSyncRafId !== 0) {
      window.cancelAnimationFrame(scrollbarSyncRafId);
      scrollbarSyncRafId = 0;
    }
  });
  setUiDepth(uiDepthState.value);
  applyUiVisibility();
  scheduleHintPositionUpdate();

  refreshButtonState();
  setSeekProgress(0);

  return {
    setStatus(text: string, kind: "info" | "error" = "info"): void {
      statusLine.textContent = text;
      statusLine.dataset.kind = kind;
    },
    setEnergy(level: number): void {
      const clamped = Math.max(0, Math.min(1, level));
      energyFill.style.transform = `scaleX(${clamped.toFixed(3)})`;
    },
    setFps(fps: number): void {
      const safeFps = Number.isFinite(fps) ? Math.max(0, fps) : 0;
      fpsReadoutElement.textContent = `FPS: ${safeFps.toFixed(0)}`;
    },
    setMicActive(active: boolean): void {
      micButton.dataset.active = active ? "true" : "false";
      micButton.textContent = active ? "Mic Live" : "Mic";
    },
    setRecordState(recording: boolean): void {
      recordButton.dataset.active = recording ? "true" : "false";
      recordButton.textContent = recording ? "Stop video" : "Record video";
    },
    setRecordEnabled(enabled: boolean): void {
      recordEnabled = enabled;
      refreshButtonState();
    },
    setPlayState(playing: boolean): void {
      playButton.textContent = playing ? "Pause" : "Play";
    },
    setPlayEnabled(enabled: boolean): void {
      playEnabled = enabled;
      refreshButtonState();
    },
    setPlaybackProgress(value: number): void {
      if (seekBusy) {
        return;
      }
      setSeekProgress(value);
    },
    dispose(): void {
      for (const remove of cleanup) {
        remove();
      }
      root.innerHTML = "";
    },
  };
}
