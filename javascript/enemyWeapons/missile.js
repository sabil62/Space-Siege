import EnemyWeapon from "./enemyWeapon.js";
import SpriteAnimations from "../spriteAnimation/spriteAnimations.js";

export default class Missile extends EnemyWeapon {
  constructor(canvasWidth, canvasHeight) {
    super(canvasWidth, canvasHeight);
    this.speed = 4;
    this.width = 142;
    this.height = 30;
    this.damage = 5;
    this.imageType = new SpriteAnimations(
      "missile-?.png",
      4,
      12,
      "enemyBullet"
    );
  }
}
