export class AudioGarden {
  private ctx?: AudioContext;
  private timer?: ReturnType<typeof setInterval>;
  private gain?: GainNode;
  private media?: HTMLAudioElement;
  private step = 0;
  constructor(private url: string) {}
  async toggle(on: boolean) {
    if (!on) {
      if (this.timer) clearInterval(this.timer);
      this.timer = undefined;
      this.media?.pause();
      if (this.ctx) await this.ctx.suspend();
      return;
    }
    if (this.url) {
      this.media ??= new Audio(this.url);
      this.media.loop = true;
      this.media.volume = 0.18;
      await this.media.play();
      return;
    }
    this.ctx ??= new AudioContext();
    this.gain ??= this.ctx.createGain();
    this.gain.gain.value = 0.055;
    this.gain.connect(this.ctx.destination);
    await this.ctx.resume();
    const notes = [261.63, 329.63, 392, 493.88, 440, 392, 329.63, 293.66];
    const play = () => {
      this.note(notes[this.step++ % notes.length], 2.8);
      if (this.step % 4 === 1) this.note(130.81, 4);
    };
    play();
    this.timer = setInterval(play, 850);
  }
  note(freq = 880, duration = 0.7) {
    if (!this.ctx || this.ctx.state !== "running" || !this.gain) return;
    const o = this.ctx.createOscillator(),
      g = this.ctx.createGain(),
      t = this.ctx.currentTime;
    o.type = "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.3, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.001, t + duration);
    o.connect(g);
    g.connect(this.gain);
    o.start(t);
    o.stop(t + duration);
  }
  dispose() {
    if (this.timer) clearInterval(this.timer);
    this.media?.pause();
    void this.ctx?.close();
  }
}
