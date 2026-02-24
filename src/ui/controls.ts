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
      <div class="panel-head">
        <h1 class="title">AFTER FORM NOISE</h1>
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
        <div id="tabs-nav-slot" class="tabs-nav-slot"></div>
      </div>
      <div id="folders-root" class="folders-root"></div>
    </section>
    <div class="hint">Orbit: left drag | Pan: right drag | Zoom: wheel</div>
  `;

  const fileInput = requireElement<HTMLInputElement>(root, "#audio-file-input");
  const micButton = requireElement<HTMLButtonElement>(root, "#mic-toggle-btn");
  const playButton = requireElement<HTMLButtonElement>(root, "#play-toggle-btn");
  const energyFill = requireElement<HTMLDivElement>(root, "#energy-fill");
  const statusLine = requireElement<HTMLParagraphElement>(root, "#status-line");
  const tabsNavSlot = requireElement<HTMLDivElement>(root, "#tabs-nav-slot");
  const foldersRoot = requireElement<HTMLDivElement>(root, "#folders-root");
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

  type TabKey = "noise" | "audio" | "shader" | "interation" | "camera" | "ui";
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
  const initialMainUiColor = normalizeHexColor(rootComputedStyle.getPropertyValue("--ui-main-color"), "#253041");
  const initialPanelHeadColor = normalizeHexColor(
    rootComputedStyle.getPropertyValue("--panel-head-color"),
    "#1f2836",
  );
  const initialUiColor = normalizeHexColor(rootComputedStyle.getPropertyValue("--accent"), "#96c6ff");
  const initialSliderColor = normalizeHexColor(rootComputedStyle.getPropertyValue("--slider-fill"), initialUiColor);
  const initialScrollbarColor = normalizeHexColor(rootComputedStyle.getPropertyValue("--ui-scrollbar-color"), "#7e8999");
  const parsedUiScale = Number.parseFloat(rootComputedStyle.getPropertyValue("--ui-scale"));
  const parsedUiBevelStrength = Number.parseFloat(rootComputedStyle.getPropertyValue("--ui-bevel-strength"));
  const parsedMenuSectionGap = Number.parseFloat(rootComputedStyle.getPropertyValue("--menu-section-gap"));
  const parsedMenuPaddingTop = Number.parseFloat(rootComputedStyle.getPropertyValue("--panel-content-pad-top"));
  const parsedMenuPaddingBottom = Number.parseFloat(rootComputedStyle.getPropertyValue("--panel-content-pad-bottom"));
  const uiScaleState = {
    value: Number.isFinite(parsedUiScale) && parsedUiScale > 0 ? parsedUiScale : 1,
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
  const uiTextColor = fromHexColor(initialTextColor);
  const uiMainColor = fromHexColor(initialMainUiColor);
  const panelHeadColor = fromHexColor(initialPanelHeadColor);
  const uiAccentColor = fromHexColor(initialUiColor);
  const uiSliderColor = fromHexColor(initialSliderColor);
  const uiScrollbarColor = fromHexColor(initialScrollbarColor);

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

  const scheduleScrollbarTrackAnchorsUpdate = (): void => {
    if (scrollbarAnchorRafId !== 0) {
      window.cancelAnimationFrame(scrollbarAnchorRafId);
    }
    scrollbarAnchorRafId = window.requestAnimationFrame(() => {
      scrollbarAnchorRafId = 0;
      updateScrollbarTrackAnchors();
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

  const applyUiMainColor = (color: { r: number; g: number; b: number }): void => {
    uiMainColor.r = color.r;
    uiMainColor.g = color.g;
    uiMainColor.b = color.b;
    documentStyle.setProperty("--ui-main-color", toHexColor(color.r, color.g, color.b));
  };

  const applyPanelHeadColor = (color: { r: number; g: number; b: number }): void => {
    panelHeadColor.r = color.r;
    panelHeadColor.g = color.g;
    panelHeadColor.b = color.b;
    documentStyle.setProperty("--panel-head-color", toHexColor(color.r, color.g, color.b));
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

  applyUiTextColor(uiTextColor);
  applyUiMainColor(uiMainColor);
  applyPanelHeadColor(panelHeadColor);
  applyUiColor(uiAccentColor);
  applyUiBevelStrength(uiBevelStrengthState.value);
  applyUiScale(uiScaleState.value);
  applyUiSliderColor(uiSliderColor);
  applyUiScrollbarColor(uiScrollbarColor);
  applyMenuSectionGap(menuSectionGapState.value);
  applyMenuPaddingTop(menuPaddingTopState.value);
  applyMenuPaddingBottom(menuPaddingBottomState.value);

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
  const turboFolder = createFolder("AFTER FORM NOISE", true);
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

  const advancedNoiseFolder = createFolder("Advanced Noise", false);
  const advancedNoiseBody = requireElement<HTMLDivElement>(advancedNoiseFolder, ".folder-body");
  const symmetryModeRow = document.createElement("div");
  symmetryModeRow.className = "control-row";
  const symmetryModeLabel = document.createElement("label");
  symmetryModeLabel.className = "control-label";
  symmetryModeLabel.textContent = "Symmetry";
  const symmetryModeSelect = document.createElement("select");
  symmetryModeSelect.className = "control-select";
  const symmetryModeOptions: Array<{ label: string; value: number }> = [
    { label: "Off", value: 0 },
    { label: "Single", value: 1 },
    { label: "Cross", value: 2 },
  ];
  for (const optionData of symmetryModeOptions) {
    const option = document.createElement("option");
    option.value = String(optionData.value);
    option.textContent = optionData.label;
    option.selected = Math.round(noiseParams.symmetryMode) === optionData.value;
    symmetryModeSelect.appendChild(option);
  }
  const onSymmetryModeChange = (): void => {
    const value = Number(symmetryModeSelect.value);
    noiseParams.symmetryMode = value;
    callbacks.onNoiseParamChange("symmetryMode", value);
  };
  symmetryModeSelect.addEventListener("change", onSymmetryModeChange);
  cleanup.push(() => symmetryModeSelect.removeEventListener("change", onSymmetryModeChange));
  symmetryModeRow.appendChild(symmetryModeLabel);
  symmetryModeRow.appendChild(symmetryModeSelect);
  advancedNoiseBody.appendChild(symmetryModeRow);
  bindRange(advancedNoiseBody, noiseParams, "symmetryWidth", {
    label: "Symmetry Width",
    min: 0.001,
    max: 1.0,
    step: 0.001,
    precision: 3,
  }, callbacks.onNoiseParamChange);
  bindRange(advancedNoiseBody, noiseParams, "symmetryStretch", {
    label: "Symmetry Stretch",
    min: 0,
    max: 3.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(advancedNoiseBody, noiseParams, "domainScaleX", {
    label: "Domain Scale X",
    min: 0.1,
    max: 4.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(advancedNoiseBody, noiseParams, "domainScaleY", {
    label: "Domain Scale Y",
    min: 0.1,
    max: 4.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(advancedNoiseBody, noiseParams, "domainRotationDeg", {
    label: "Domain Rotate",
    min: -180,
    max: 180,
    step: 1,
    precision: 0,
    suffix: "deg",
  }, callbacks.onNoiseParamChange);
  bindRange(advancedNoiseBody, noiseParams, "turboLacunarity", {
    label: "Turbo Lacunarity",
    min: 1.01,
    max: 3.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(advancedNoiseBody, noiseParams, "detailFreq", {
    label: "Detail Frequency",
    min: 0.5,
    max: 8.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(advancedNoiseBody, noiseParams, "detailStrength", {
    label: "Detail Strength",
    min: 0,
    max: 2.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(advancedNoiseBody, noiseParams, "audioMacroReactivity", {
    label: "Macro Reactivity",
    min: 0,
    max: 4.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onNoiseParamChange);
  bindRange(advancedNoiseBody, noiseParams, "audioDetailReactivity", {
    label: "Detail Reactivity",
    min: 0,
    max: 4.0,
    step: 0.01,
    precision: 2,
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
  bindRange(interactionBody, interactionParams, "parallaxStrength", {
    label: "Parallax",
    min: 0,
    max: 2.0,
    step: 0.01,
    precision: 2,
  }, callbacks.onInteractionParamChange);
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

  const uiFolder = createFolder("UI Config", true);
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
  bindColor(uiBody, "UI Text Color", uiTextColor, (next): void => {
    uiTextColor.r = next.r;
    uiTextColor.g = next.g;
    uiTextColor.b = next.b;
    applyUiTextColor(uiTextColor);
  });
  bindColor(uiBody, "Main UI Color", uiMainColor, (next): void => {
    uiMainColor.r = next.r;
    uiMainColor.g = next.g;
    uiMainColor.b = next.b;
    applyUiMainColor(uiMainColor);
  });
  bindColor(uiBody, "Head Color", panelHeadColor, (next): void => {
    panelHeadColor.r = next.r;
    panelHeadColor.g = next.g;
    panelHeadColor.b = next.b;
    applyPanelHeadColor(panelHeadColor);
  });
  bindColor(uiBody, "Accent Color", uiAccentColor, (next): void => {
    uiAccentColor.r = next.r;
    uiAccentColor.g = next.g;
    uiAccentColor.b = next.b;
    applyUiColor(uiAccentColor);
  });
  bindColor(uiBody, "Slider Fill", uiSliderColor, (next): void => {
    uiSliderColor.r = next.r;
    uiSliderColor.g = next.g;
    uiSliderColor.b = next.b;
    applyUiSliderColor(uiSliderColor);
  });
  bindColor(uiBody, "Scrollbar Color", uiScrollbarColor, (next): void => {
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
  bindRange(pbrMaterialBody, materialParams, "curvatureAmount", {
    label: "Curvature Amount",
    min: 0,
    max: 1.5,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(pbrMaterialBody, materialParams, "curvatureScale", {
    label: "Curvature Scale",
    min: 0,
    max: 16,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(pbrMaterialBody, materialParams, "curvaturePower", {
    label: "Curvature Power",
    min: 0.1,
    max: 4,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(pbrMaterialBody, materialParams, "edgeWearStrength", {
    label: "Edge Wear",
    min: 0,
    max: 2,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(pbrMaterialBody, materialParams, "cavityWearStrength", {
    label: "Cavity Wear",
    min: 0,
    max: 2,
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
  bindRange(matcapMaterialBody, materialParams, "curvatureAmount", {
    label: "Curvature Amount",
    min: 0,
    max: 1.5,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(matcapMaterialBody, materialParams, "curvatureScale", {
    label: "Curvature Scale",
    min: 0,
    max: 16,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(matcapMaterialBody, materialParams, "curvaturePower", {
    label: "Curvature Power",
    min: 0.1,
    max: 4,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(matcapMaterialBody, materialParams, "edgeWearStrength", {
    label: "Edge Wear",
    min: 0,
    max: 2,
    step: 0.01,
    precision: 2,
  }, callbacks.onMaterialParamChange);
  bindRange(matcapMaterialBody, materialParams, "cavityWearStrength", {
    label: "Cavity Wear",
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
  tabPanels.noise.appendChild(advancedNoiseFolder);
  tabPanels.audio.appendChild(audioFolder);
  tabPanels.shader.appendChild(materialFolder);
  tabPanels.shader.appendChild(aoFolder);
  tabPanels.shader.appendChild(shadingFolder);
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
  const onWindowResize = (): void => {
    scheduleScrollbarTrackAnchorsUpdate();
  };
  const onPanelScroll = (): void => {
    updateCustomScrollbarThumb();
  };

  fileInput.addEventListener("change", onFileChange);
  micButton.addEventListener("click", onMicButtonClick);
  playButton.addEventListener("click", onPlayButtonClick);
  tabsPanels.addEventListener("scroll", onPanelScroll, { passive: true });
  window.addEventListener("resize", onWindowResize);
  cleanup.push(() => fileInput.removeEventListener("change", onFileChange));
  cleanup.push(() => micButton.removeEventListener("click", onMicButtonClick));
  cleanup.push(() => playButton.removeEventListener("click", onPlayButtonClick));
  cleanup.push(() => tabsPanels.removeEventListener("scroll", onPanelScroll));
  cleanup.push(() => window.removeEventListener("resize", onWindowResize));
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
