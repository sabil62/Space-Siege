import EnemySpriteAnimation from "./enemySpriteAnimation.js";

export default class Enemy {
  constructor(game) {
    this.game = game;
    this.x = -100;
    this.y = Math.random() * 500;
    this.health = 10;
    this.width = 150;
    this.height = 150;
    this.speed = 0.25;
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
