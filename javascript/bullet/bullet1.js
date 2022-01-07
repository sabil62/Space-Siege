import BulletSprite from "./bulletSpriteAnimation.js";

export default class Bullet1 {
  constructor(x, y, speed, harmLevel) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.harmLevel = harmLevel;
    this.bulletHeight = 20;
    this.bulletWidth = 24;

    //making bullet rectangle to test
    this.bulletWidth = 12;
    this.bulletHeight = 4;
    // this.colorFill = this.color[Math.floor(Math.random() * this.color.length)];
    //new BulletSprite(imageTemplateName, totalTemplateImages,animationSpeed,oneTime?)

    // this.bullet1Image = getBulletImage("bullet1-1.png");
    this.bulletSprite = new BulletSprite("bullet1-?.png", 4, 7);
  }

  draw(ctx) {
    // ctx.fillStyle = this.colorFill;
    this.x -= this.speed;

    let bullet1Image = this.bulletSprite.showImage();
    // ctx.fillRect(this.x, this.y, this.bulletWidth, this.bulletHeight);
    ctx.drawImage(bullet1Image, this.x, this.y);
  }

  isBulletCollided(enemy) {
    if (
      this.x < enemy.x + enemy.width / 1.2 && //front part
      this.x + this.bulletWidth > enemy.x && //back part
      this.y < enemy.y + enemy.height && //down part
      this.y + this.bulletHeight > enemy.y //up part
    ) {
      enemy.decreaseHealth(this.harmLevel);
      return true;
    } else {
      return false;
    }
  }
}
