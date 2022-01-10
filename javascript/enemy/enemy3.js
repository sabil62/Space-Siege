import Enemy1 from "./enemy1.js";
import SpriteAnimations from "../spriteAnimation/spriteAnimations.js";

export default class Enemy3 extends Enemy1 {
  constructor(level) {
    super(level);
    this.x = -220;
    this.y = Math.random() * 536;
    this.health = this.level === 3 ? 32 : 26;
    this.width = 236;
    this.height = 86;
    this.speed = this.level === 3 ? 0.7 : 0.6;
    this.enemyImageClass = new SpriteAnimations("enemy3-?.png", 1, 5, "enemy");
  }
}
