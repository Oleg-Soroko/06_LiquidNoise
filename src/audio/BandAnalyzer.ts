export interface AudioBands {
  low: number;
  mid: number;
  high: number;
  level: number;
}

export class BandAnalyzer {
  private attack: number;
  private release: number;
  private readonly bands: AudioBands = {
    low: 0,
    mid: 0,
    high: 0,
    level: 0,
  };

  constructor(attack = 0.42, release = 0.12) {
    this.attack = attack;
    this.release = release;
  }

  setEnvelope(attack: number, release: number): void {
    this.attack = attack;
    this.release = release;
  }

  private getRangeAverage(data: Uint8Array, fromRatio: number, toRatio: number): number {
    if (data.length === 0) {
      return 0;
    }

    const start = Math.max(0, Math.floor(data.length * fromRatio));
    const end = Math.max(start + 1, Math.floor(data.length * toRatio));
    let sum = 0;
    let count = 0;

    for (let i = start; i < end; i += 1) {
      sum += data[i];
      count += 1;
    }
    if (count === 0) {
      return 0;
    }
    return sum / (count * 255);
  }

  private envelope(current: number, target: number): number {
    const blend = target > current ? this.attack : this.release;
    return current + (target - current) * blend;
  }

  private normalize(value: number, curve: number): number {
    return Math.pow(Math.max(0, Math.min(1, value)), curve);
  }

  update(data: Uint8Array): AudioBands {
    const lowRaw = this.normalize(this.getRangeAverage(data, 0.01, 0.12), 1.05);
    const midRaw = this.normalize(this.getRangeAverage(data, 0.12, 0.45), 1.15);
    const highRaw = this.normalize(this.getRangeAverage(data, 0.45, 0.96), 1.2);

    this.bands.low = this.envelope(this.bands.low, lowRaw);
    this.bands.mid = this.envelope(this.bands.mid, midRaw);
    this.bands.high = this.envelope(this.bands.high, highRaw);

    const levelTarget =
      this.bands.low * 0.52 + this.bands.mid * 0.33 + this.bands.high * 0.15;
    this.bands.level = this.envelope(this.bands.level, Math.min(1, levelTarget * 1.35));

    return this.bands;
  }
}
