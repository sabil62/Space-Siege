import EnemySpriteAnimation from "./enemySpriteAnimation.js";

export default class Enemy4 {
  constructor(level) {
    this.level = level;
    this.x = -270;
    this.y = Math.random() * 150;
    this.health = 56;
    this.width = 150;
    this.height = 150;
    this.angle = 0;
    this.speed = this.level === 3 ? 0.35 : 0.32;
    this.enemyImageClass = new EnemySpriteAnimation("enemy4-?.png", 1, 5);
  }

  draw(ctx) {
    this.x += this.speed;
    this.y += Math.sin(this.angle) * (Math.random() * 2 + 2);
    this.angle += 0.018;

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
