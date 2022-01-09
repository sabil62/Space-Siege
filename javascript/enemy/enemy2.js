import EnemySpriteAnimation from "./enemySpriteAnimation.js";

export default class Enemy2 {
  constructor(level) {
    this.level = level;
    this.x = -200;
    this.y = Math.random() * 500;
    this.health = this.level === 3 ? 18 : 16;
    this.width = 180;
    this.height = 120;
    this.speed = this.level === 3 ? 0.5 : 0.4;
    this.enemyImageClass = new EnemySpriteAnimation("enemy2-?.png", 2, 5);
  }

  draw(ctx) {
    this.x += this.speed;
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
