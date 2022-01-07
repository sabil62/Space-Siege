import EnemySpriteAnimation from "./enemySpriteAnimation.js";

export default class Enemy1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health = 10;
    this.width = 150;
    this.height = 150;
    this.speed = 0.2;
    this.enemyImageClass = new EnemySpriteAnimation("enemy2-?.png", 2, 5);
  }

  draw(ctx) {
    // ctx.fillStyle = "red";
    this.x += this.speed;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    let enemyImage = this.enemyImageClass.showImage();
    ctx.drawImage(enemyImage, this.x, this.y);
  }

  decreaseHealth(bulletDamageLevel) {
    this.health -= bulletDamageLevel;
  }

  hasReachedEnd() {
    if (this.x >= 1745 / 1.6 - 30) {
      return true;
    } else {
      return false;
    }
  }
}
