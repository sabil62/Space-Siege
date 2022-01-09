import SpriteAnimations from "../spriteAnimation/spriteAnimations.js";

export default class EnemyWeapon {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = -100;
    this.speed = 1;
    this.damage = 1;
    this.y = Math.random() * (this.canvasHeight - 60) + 40;
    this.imageType = new SpriteAnimations("bos-?.png", 4, 5, "enemyBullet");
    // this.imageType = new EnemySpriteAnimation("enemy1-?.png", 2, 5);
  }

  draw(ctx) {
    this.x += this.speed;
    let animationImage = this.imageType.showImage();
    ctx.drawImage(animationImage, this.x, this.y);
  }

  isEnemyBulletOut() {
    return this.x > this.canvasHeight + 10;
  }
}
