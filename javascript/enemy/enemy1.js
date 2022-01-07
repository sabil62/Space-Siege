import EnemySpriteAnimation from "./enemySpriteAnimation.js";

export default class Enemy1 {
  constructor(level) {
    this.level = level;
    this.x = -190;
    this.y = Math.random() * 500;
    this.health = 10;
    this.width = 150;
    this.height = 150;
    this.speed = this.level === 3 ? 0.4 : 0.32;
    this.enemyImageClass = new EnemySpriteAnimation("enemy1-?.png", 2, 5);
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
