import Enemy1 from "../enemy1.js";
import SpriteAnimations from "../../spriteAnimation/spriteAnimations.js";

export default class Enemy2 extends Enemy1 {
  constructor(level) {
    super(level);
    this.x = -200;
    this.y = Math.random() * 528;
    this.health = this.level === 3 ? 18 : 16;
    this.width = 180;
    this.height = 120;
    this.speed = this.level === 3 ? 0.5 : 0.4;
    this.enemyImageClass = new SpriteAnimations("enemy2-?.png", 2, 5, "enemy");
  }
}
