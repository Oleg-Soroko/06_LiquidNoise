export type SourceMode = "none" | "file" | "mic";

const EMPTY_FFT = new Uint8Array(0);

export class AudioInputController {
  private readonly audioElement: HTMLAudioElement;
  private readonly fftSize: number;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private recordingDestination: MediaStreamAudioDestinationNode | null = null;
  private elementSource: MediaElementAudioSourceNode | null = null;
  private micSource: MediaStreamAudioSourceNode | null = null;
  private micGainNode: GainNode | null = null;
  private micStream: MediaStream | null = null;
  private currentSource: AudioNode | null = null;
  private monitorSource: AudioNode | null = null;
  private fftData = EMPTY_FFT;
  private fileUrl: string | null = null;
  private micSensitivity = 1;

  mode: SourceMode = "none";

  constructor(audioElement: HTMLAudioElement, fftSize = 2048) {
    this.audioElement = audioElement;
    this.fftSize = fftSize;
  }

  private getAudioContextCtor(): typeof AudioContext {
    const webkitWindow = window as Window & {
      webkitAudioContext?: typeof AudioContext;
    };
    const ctor = window.AudioContext ?? webkitWindow.webkitAudioContext;
    if (!ctor) {
      throw new Error("Web Audio API is not available in this browser.");
    }
    return ctor;
  }

  private async ensureContext(): Promise<void> {
    if (!this.audioContext) {
      const AudioContextCtor = this.getAudioContextCtor();
      this.audioContext = new AudioContextCtor();
      this.analyser = this.audioContext.createAnalyser();
      this.micGainNode = this.audioContext.createGain();
      this.micGainNode.gain.value = this.micSensitivity;
      this.recordingDestination = this.audioContext.createMediaStreamDestination();
      this.analyser.fftSize = this.fftSize;
      this.analyser.smoothingTimeConstant = 0.8;
      this.analyser.minDecibels = -100;
      this.analyser.maxDecibels = -10;
      this.fftData = new Uint8Array(this.analyser.frequencyBinCount);
    } else if (!this.micGainNode) {
      this.micGainNode = this.audioContext.createGain();
      this.micGainNode.gain.value = this.micSensitivity;
    }

    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    }
  }

  private getAnalyserOrThrow(): AnalyserNode {
    if (!this.analyser) {
      throw new Error("Audio analyser is not initialized.");
    }
    return this.analyser;
  }

  private connectSource(source: AudioNode, monitorOutput: boolean): void {
    const analyser = this.getAnalyserOrThrow();
    if (this.currentSource) {
      this.currentSource.disconnect();
    }

    source.connect(analyser);
    if (this.recordingDestination) {
      source.connect(this.recordingDestination);
    }
    if (monitorOutput && this.audioContext) {
      source.connect(this.audioContext.destination);
      this.monitorSource = source;
    } else {
      this.monitorSource = null;
    }
    this.currentSource = source;
  }

  private stopMicSource(): void {
    if (this.micSource) {
      this.micSource.disconnect();
      this.micSource = null;
    }
    if (this.micGainNode) {
      this.micGainNode.disconnect();
    }
    if (this.currentSource === this.micGainNode) {
      this.currentSource = null;
    }
    if (this.monitorSource === this.micGainNode) {
      this.monitorSource = null;
    }
    if (this.micStream) {
      for (const track of this.micStream.getTracks()) {
        track.stop();
      }
      this.micStream = null;
    }
    if (this.mode === "mic") {
      this.mode = "none";
    }
  }

  private async ensureElementSource(): Promise<void> {
    await this.ensureContext();
    this.stopMicSource();
    if (!this.audioContext) {
      throw new Error("Audio context is unavailable.");
    }

    if (!this.elementSource) {
      this.elementSource = this.audioContext.createMediaElementSource(this.audioElement);
    }
    this.connectSource(this.elementSource, true);
    this.mode = "file";
  }

  setSmoothing(value: number): void {
    if (this.analyser) {
      this.analyser.smoothingTimeConstant = value;
    }
  }

  setMicSensitivity(value: number): void {
    const next = Math.max(0.1, Math.min(4.0, Number.isFinite(value) ? value : 1));
    this.micSensitivity = next;
    if (this.micGainNode) {
      this.micGainNode.gain.value = next;
    }
  }

  hasLoadedFile(): boolean {
    return this.audioElement.src.length > 0;
  }

  isFilePlaying(): boolean {
    return this.mode === "file" && !this.audioElement.paused;
  }

  async loadFile(file: File): Promise<void> {
    await this.ensureElementSource();

    if (this.fileUrl) {
      URL.revokeObjectURL(this.fileUrl);
    }
    this.fileUrl = URL.createObjectURL(file);
    this.audioElement.src = this.fileUrl;
    this.audioElement.currentTime = 0;
    this.audioElement.loop = true;
    await this.audioElement.play();
  }

  async loadUrl(url: string): Promise<void> {
    await this.ensureElementSource();

    if (this.fileUrl) {
      URL.revokeObjectURL(this.fileUrl);
      this.fileUrl = null;
    }

    this.audioElement.src = url;
    this.audioElement.currentTime = 0;
    this.audioElement.loop = true;
    await this.audioElement.play();
  }

  async startMic(): Promise<void> {
    await this.ensureContext();
    this.audioElement.pause();
    this.audioElement.currentTime = 0;

    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error("Microphone capture is not supported in this browser.");
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false,
      },
      video: false,
    });

    this.stopMicSource();
    if (!this.audioContext) {
      throw new Error("Audio context is unavailable.");
    }
    if (this.monitorSource) {
      this.monitorSource.disconnect();
      this.monitorSource = null;
    }

    this.micStream = stream;
    this.micSource = this.audioContext.createMediaStreamSource(stream);
    if (!this.micGainNode) {
      this.micGainNode = this.audioContext.createGain();
      this.micGainNode.gain.value = this.micSensitivity;
    }
    this.micSource.connect(this.micGainNode);
    this.connectSource(this.micGainNode, false);
    this.mode = "mic";
  }

  async stopMic(): Promise<void> {
    this.stopMicSource();
    if (this.hasLoadedFile()) {
      await this.ensureElementSource();
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
  }

  async togglePlayback(): Promise<boolean> {
    if (!this.hasLoadedFile()) {
      return false;
    }

    await this.ensureElementSource();
    if (this.audioElement.paused) {
      await this.audioElement.play();
      return true;
    }

    this.audioElement.pause();
    return false;
  }

  readFrequencyData(): Uint8Array {
    if (!this.analyser || this.mode === "none") {
      if (this.fftData.length > 0) {
        this.fftData.fill(0);
      }
      return this.fftData;
    }

    this.analyser.getByteFrequencyData(this.fftData);
    return this.fftData;
  }

  getRecordingAudioTrack(): MediaStreamTrack | null {
    if (!this.recordingDestination) {
      return null;
    }
    const sourceTrack = this.recordingDestination.stream.getAudioTracks()[0];
    if (!sourceTrack) {
      return null;
    }
    return sourceTrack.clone();
  }

  dispose(): void {
    this.stopMicSource();
    this.audioElement.pause();

    if (this.currentSource) {
      this.currentSource.disconnect();
      this.currentSource = null;
    }
    if (this.monitorSource) {
      this.monitorSource.disconnect();
      this.monitorSource = null;
    }
    if (this.elementSource) {
      this.elementSource.disconnect();
      this.elementSource = null;
    }
    if (this.micGainNode) {
      this.micGainNode.disconnect();
      this.micGainNode = null;
    }
    if (this.analyser) {
      this.analyser.disconnect();
      this.analyser = null;
    }
    if (this.recordingDestination) {
      this.recordingDestination.disconnect();
      this.recordingDestination = null;
    }

    if (this.fileUrl) {
      URL.revokeObjectURL(this.fileUrl);
      this.fileUrl = null;
    }
    if (this.audioContext) {
      void this.audioContext.close();
      this.audioContext = null;
    }

    this.mode = "none";
  }
}
