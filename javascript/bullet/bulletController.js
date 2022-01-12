import Bullet1 from "./bullet1.js";
import Bullet2 from "./bullets/bullet2.js";
import Bullet3 from "./bullets/bullet3.js";
import Bullet4 from "./bullets/bullet4.js";
import Bullet5 from "./bullets/bullet5.js";

export default class BulletController {
  bullets = [];
  nextBulletDelay = 0;

  constructor(bulletCount) {
    this.bulletCount = bulletCount;
  }

  //Pass level in shoot and determine what type of bullet to be used
  shoot(x, y, bulletType) {
    let newBulletClass = this.#bulletType(x, y, bulletType);
    if (this.bulletCount > 0) {
      if (this.nextBulletDelay <= 0) {
        //hit bullet = bullets.push
        if (this.bullets.length < 9) {
          //main work of this function
          this.bullets.push(newBulletClass);
          this.bulletCount--;
        }
        //this will delay bullet}
        this.nextBulletDelay = 8;
      } else {
        //bullet will not come out until nextBulletDelay is 0 or less
        this.nextBulletDelay--;
      }
    }
  }

  #bulletType(x, y, bulletType) {
    switch (bulletType) {
      case 1:
        return new Bullet1(x, y);
        break;
      case 2:
        return new Bullet2(x, y);
        break;
      case 3:
        return new Bullet3(x, y);
        break;
      case 4:
        return new Bullet4(x, y);
        break;
      case 5:
        return new Bullet5(x, y);
        break;

      default:
        return new Bullet1(x, y);
        break;
    }
  }

  draw(ctx) {
    // console.log(this.bullets.length);
    this.bullets.forEach((bullet) => {
      if (this.isBulletOutScreen(bullet)) {
        let index = this.bullets.indexOf(bullet);
        this.bullets.splice(index, 1);
      }
      bullet.draw(ctx);
    });
    ctx.font = "13px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Bullets: " + this.bulletCount, 170, 20);
  }

  isBulletOutScreen(bullet) {
    //is bullet out of screen
    return bullet.x <= -bullet.bulletWidth;
  }

  enemyCollision(enemy) {
    return this.bullets.some((bullet) => {
      if (bullet.isBulletCollided(enemy)) {
        setTimeout(() => {
          let removeIndex = this.bullets.indexOf(bullet);
          this.bullets.splice(removeIndex, 1);
          removeIndex--;
        }, 0);

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
