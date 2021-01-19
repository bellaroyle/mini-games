export default class Score {
  constructor(x, p) {
    this.x = x;
    this.p = p;
    this.score = 0;
  }

  display() {
    this.p.textSize(50);
    this.p.textAlign(this.p.CENTER);
    this.p.text(this.score, this.x, 60);
  }

  increment() {
    this.score++;
  }
}
