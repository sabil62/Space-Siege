import { getBulletImage } from "../getImage/getImage.js";
import BulletSprite from "./bulletSpriteAnimation.js";

export default class Bullet1 {
  // color = [
  //   "yellow",
  //   "#FFBF00",
  //   "#FFEA00",
  //   "#FDDA0D",
  //   "#FFD700",
  //   "#FCF55F",
  //   "#FAFA33",
  //   "#FBEC5D",
  // ];
  constructor(x, y, speed, harmLevel) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.harmLevel = harmLevel;

    //making bullet rectangle to test
    this.bulletWidth = 12;
    this.bulletHeight = 4;
    // this.colorFill = this.color[Math.floor(Math.random() * this.color.length)];
    //new BulletSprite(imageTemplateName, totalTemplateImages,animationSpeed,oneTime?)
    this.bulletSprite = new BulletSprite("bullet1-?.png", 4, 2, false);
    this.bullet1Image = this.bulletSprite.showImage();
    // this.bullet1Image = getBulletImage("bullet1-1.png");
  }
  draw(ctx) {
    // ctx.fillStyle = this.colorFill;
    this.x -= this.speed;
    // ctx.fillRect(this.x, this.y, this.bulletWidth, this.bulletHeight);
    ctx.drawImage(this.bullet1Image, this.x, this.y);
  }
}
