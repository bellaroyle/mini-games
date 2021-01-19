let width = 624;
let height = 351;
export default class Ball {
  constructor(p) {
    this.r = 10;
    this.p = p;
    this.reset();
  }

  update(playerScore, aiScore) {
    // if it hits the top or bottom change direction
    if (this.y < this.r || this.y > height - this.r) {
      this.ySpeed = -this.ySpeed;
    }
    // if it goes to the end of the sreen restart the game
    if (this.x < this.r) {
      aiScore.increment();
      this.reset();
    } else if (this.x > width + this.r) {
      playerScore.increment();
      this.reset();
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;

    this.xSpeed = this.p.random(6, 7);

    // determines if it's going left or right
    let isLeft = this.p.random(1) > 0.5;
    if (isLeft) {
      this.xSpeed = -this.xSpeed;
    }

    this.ySpeed = this.p.random(-10, 10);
  }

  display() {
    this.p.fill('#86ffff');
    this.p.ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  hasHitPlayer(player) {
    if (this.x - this.r <= player.x + player.width && this.x > player.x) {
      if (this.isSameHeight(player)) {
        this.xSpeed = -this.xSpeed * 1.1;
      }
    }
  }

  hasHitAi(ai) {
    if (this.x + this.r >= ai.x && this.x <= ai.x + ai.width) {
      if (this.isSameHeight(ai)) {
        this.xSpeed = -this.xSpeed * 1.1;
      }
    }
  }

  isSameHeight(player) {
    return this.y >= player.y && this.y <= player.y + player.height;
  }
}
