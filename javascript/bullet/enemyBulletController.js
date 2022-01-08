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
      this.nextBulletDelay = 16;
    } else {
      this.nextBulletDelay--;
    }
  }

  draw(ctx) {
    this.bullets.forEach((bullet) => {
      //   if (isBulletOutOfScreen(bullet)) {
      //     let index = this.bullets.indexOf(bullet);
      //     this.bullets.splice(index, 1);
      //   }
      bullet.draw(ctx);
    });
  }

  isBulletOutOfScreen(bullet) {
    return bullet.x >= this.canvasWidth + bullet.bulletWidth;
  }
}
