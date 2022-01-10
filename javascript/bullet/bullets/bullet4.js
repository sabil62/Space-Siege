import Bullet1 from "../bullet1.js";
import SpriteAnimations from "../../spriteAnimation/spriteAnimations.js";

export default class Bullet4 extends Bullet1 {
  constructor(x, y) {
    super(x, y);
    this.harmLevel = 6;
    this.bulletHeight = 53;
    this.bulletWidth = 53;

    this.bulletSprite = new SpriteAnimations("bullet4-?.png", 5, 7, "bullet");
  }
}
