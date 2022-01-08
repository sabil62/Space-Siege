import Bullet1 from "./bullet1.js";

export default class BulletController {
  bullets = [];
  nextBulletDelay = 0;

  constructor(bulletCount) {
    this.bulletCount = bulletCount;
  }

  //Pass level in shoot and determine what type of bullet to be used
  shoot(x, y, bulletSpeed, harmLevel, delay) {
    if (this.bulletCount > 0) {
      if (this.nextBulletDelay <= 0) {
        //hit bullet = bullets.push
        if (this.bullets.length < 9) {
          //main work of this function
          this.bullets.push(new Bullet1(x, y, bulletSpeed, harmLevel));
          this.bulletCount--;
        }
        //this will delay bullet}
        this.nextBulletDelay = delay;
      } else {
        //bullet will not come out until nextBulletDelay is 0 or less
        this.nextBulletDelay--;
      }
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
    ctx.font = "17px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Bullets: " + this.bulletCount, 220, 20);
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

  addBullets(totalBullet) {
    this.bulletCount += totalBullet;
  }
}
