import SpriteAnimations from "../spriteAnimation/spriteAnimations.js";

export default class Bullet1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 7;
    this.harmLevel = 2;
    this.bulletHeight = 20;
    this.bulletWidth = 24;

    // this.bullet1Image = getBulletImage("bullet1-1.png");
    this.bulletSprite = new SpriteAnimations("bullet1-?.png", 4, 7, "bullet");
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
      this.x < enemy.x + enemy.width / 1.12 && //front part
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
