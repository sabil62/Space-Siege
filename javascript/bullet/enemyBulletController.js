import EnemyBullet from "./enemyBullet.js";

export default class EnemyBulletController {
  bullets = [];
  nextBulletDelay = 0;

  constructor(canvasWidth) {
    this.canvasWidth = canvasWidth;
  }

  shoot(x, y) {
    if (this.nextBulletDelay <= 0) {
      this.bullets.push(new EnemyBullet(x, y));
      this.nextBulletDelay = 42;
    } else {
      this.nextBulletDelay--;
    }
  }

  draw(ctx) {
    // console.log(this.bullets.length);
    this.bullets.forEach((bullet) => {
      if (this.isBulletOutOfScreen(bullet)) {
        let index = this.bullets.indexOf(bullet);
        this.bullets.splice(index, 1);
      }
      bullet.draw(ctx);
    });
  }

  isBulletOutOfScreen(bullet) {
    return bullet.x >= this.canvasWidth + bullet.bulletWidth;
  }

  isPlayerCollision(player) {
    return this.bullets.some((bullet) => {
      if (bullet.isEnemyBulletCollision(player)) {
        let index = this.bullets.indexOf(bullet);
        this.bullets.splice(index, 1);
        return true;
      } else {
        return false;
      }
    });
  }
}
