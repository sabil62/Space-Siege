import Bullet1 from "../bullet1.js";
import BulletSprite from "../bulletSpriteAnimation.js";

export default class Bullet2 extends Bullet1 {
  constructor(x, y) {
    super(x, y);
    this.harmLevel = 3;
    this.bulletHeight = 16;
    this.bulletWidth = 50;

    this.bulletSprite = new BulletSprite("bullet2-?.png", 5, 6);
  }
}
