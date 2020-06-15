export class Color {
  constructor(public hex: number = 0) {}

  get red() { return this.hex >> 16 & 0xff; }

  set red(value: number) { this.hex = this.hex & ~0xff0000 | value << 16; }

  get green() { return this.hex >> 8 & 0xff; }

  set green(value: number) { this.hex = this.hex & ~0x00ff00 | value << 8; }

  get blue() { return this.hex & 0xff; }

  set blue(value: number) { this.hex = this.hex & ~0x0000ff | value; }

  toString() {
    return `#${ this.hex.toString(16).padStart(6, "0") }`;
  }


  get brightness() {
    const x = (this.red * 299) + (this.green * 587) + (this.blue * 114);
    return Math.round(x / 1000);
  }
}
