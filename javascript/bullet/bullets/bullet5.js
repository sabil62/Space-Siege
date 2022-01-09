import Bullet1 from "../bullet1.js";
import BulletSprite from "../bulletSpriteAnimation.js";

export default class Bullet5 extends Bullet1 {
  constructor(x, y) {
    super(x, y);
    this.harmLevel = 2;
    this.bulletHeight = 53;
    this.bulletWidth = 53;

    this.bulletSprite = new BulletSprite("bullet5-?.png", 10, 7);
  }
}
