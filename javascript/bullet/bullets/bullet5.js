import Bullet1 from "../bullet1.js";
import SpriteAnimations from "../../spriteAnimation/spriteAnimations.js";

export default class Bullet5 extends Bullet1 {
  constructor(x, y) {
    super(x, y);
    this.harmLevel = 2;
    this.bulletHeight = 53;
    this.bulletWidth = 53;

    this.bulletSprite = new SpriteAnimations("bullet5-?.png", 10, 7, "bullet");
  }
}
