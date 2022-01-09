import Bullet1 from "../bullet1.js";
import BulletSprite from "../bulletSpriteAnimation.js";

export default class Bullet3 extends Bullet1 {
  constructor(x, y) {
    super(x, y);
    this.harmLevel = 5;
    this.bulletHeight = 51;
    this.bulletWidth = 52;

    this.bulletSprite = new BulletSprite("bullet3-?.png", 5, 7);
  }
}
