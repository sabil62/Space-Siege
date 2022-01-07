import EnemySpriteAnimation from "./enemySpriteAnimation.js";

export default class Enemy3 {
  constructor(level) {
    this.level = level;
    this.x = -220;
    this.y = Math.random() * 500;
    this.health = this.level === 3 ? 32 : 26;
    this.width = 150;
    this.height = 150;
    this.speed = this.level === 3 ? 0.7 : 0.6;
    this.enemyImageClass = new EnemySpriteAnimation("enemy3-?.png", 1, 5);
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
