import EnemySpriteAnimation from "./enemySpriteAnimation.js";

export default class Enemy {
  constructor(game) {
    this.game = game;
    this.x = -100;
    this.y = Math.random() * 500;
    this.health = 30;
    this.width = 150;
    this.height = 150;
    this.speed = 0.4;
    this.enemyImageClass = new EnemySpriteAnimation("enemy4-?.png", 1, 5);
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
