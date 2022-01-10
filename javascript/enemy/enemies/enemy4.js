import Enemy1 from "../enemy1.js";
import SpriteAnimations from "../../spriteAnimation/spriteAnimations.js";

export default class Enemy4 extends Enemy1 {
  constructor(level) {
    super(level);
    this.x = -220;
    this.randomNum = Math.floor(Math.random() * 2);
    this.y = this.randomNum === 0 ? Math.random() * 190 : Math.random() * 450;
    this.health = 56;
    this.width = 198;
    this.height = 143;
    this.angle = 0;
    this.speed = this.level === 3 ? 0.35 : 0.32;
    this.enemyImageClass = new SpriteAnimations("enemy4-?.png", 1, 5, "enemy");
    this.animSpeed = 3;
    this.animSpeedDefault = 3;
  }

  draw(ctx) {
    this.x += this.speed;
    if (this.animSpeed <= 0) {
      this.animSpeed = this.animSpeedDefault;
      let randomtwo = Math.random() * 2 + 2;
      this.y +=
        this.randomNum === 0
          ? Math.sin(this.angle) * (randomtwo - 1.6)
          : Math.cos(this.angle) * randomtwo;

      this.angle += this.randomNum === 0 ? 0.01 : 0.1;
    }
    this.animSpeed--;

    let enemyImage = this.enemyImageClass.showImage();
    ctx.drawImage(enemyImage, this.x, this.y);
  }
}
