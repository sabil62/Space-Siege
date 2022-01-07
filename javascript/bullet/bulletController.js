import Bullet1 from "./bullet1.js";

export default class BulletController {
  bullets = [];
  nextBulletDelay = 0;

  shoot(x, y, bulletSpeed, harmLevel, delay) {
    if (this.nextBulletDelay <= 0) {
      //hit bullet = bullets.push
      this.bullets.push(new Bullet1(x, y, bulletSpeed, harmLevel));
      //this will delay bullet
      this.nextBulletDelay = delay;
    } else {
      //bullet will not come out until nextBulletDelay is 0 or less
      this.nextBulletDelay--;
    }
  }
  draw(ctx) {
    // console.log(this.bullets.length);
    this.bullets.forEach((bullet) => {
      if (this.isBulletOutScreen(bullet)) {
        const index = this.bullets.indexOf(bullet);
        this.bullets.splice(index, 1);
      }
      bullet.draw(ctx);
    });
  }
  isBulletOutScreen(bullet) {
    //is bullet out of screen
    return bullet.x <= -bullet.bulletWidth;
  }

  enemyCollision(enemy) {
    return this.bullets.some((bullet) => {
      if (bullet.isBulletCollided(enemy)) {
        let removeIndex = this.bullets.indexOf(bullet);
        this.bullets.splice(removeIndex, 1);
        return true;
      } else {
        return false;
      }
    });
  }
}
