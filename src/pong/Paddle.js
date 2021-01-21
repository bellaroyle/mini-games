// let width = 624;
let height = 351;
export default class Paddle {
  constructor(x, p) {
    this.x = x;
    this.y = height / 2;
    this.p = p;
    this.height = 80;
    this.width = 20;

    this.isUp = false;
    this.isDown = false;
  }

  update() {
    if (this.isUp) {
      this.up();
    } else if (this.isDown) {
      this.down();
    }
  }

  display() {
    this.p.fill('#66ff33');
    this.p.rect(this.x, this.y, 20, 80);
  }

  up() {
    if (this.y > 0) {
      this.y -= 4;
    }
  }

  down() {
    if (this.y < height - this.height) {
      this.y += 4;
    }
  }
}
