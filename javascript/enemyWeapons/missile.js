import EnemyWeapon from "./enemyWeapon.js";
import SpriteAnimations from "../spriteAnimation/spriteAnimations.js";

export default class Missile extends EnemyWeapon {
  constructor(canvasWidth, canvasHeight) {
    super(canvasWidth, canvasHeight);
    this.speed = 4;
    this.width = 142;
    this.height = 30;
    this.damage = 6;
    this.health = 8;
    this.imageType = new SpriteAnimations(
      "missile-?.png",
      4,
      12,
      "enemyBullet"
    );
  }
}

// if (this.bulletController.enemyCollision(enemy)) {
//     if (enemy.health <= 0) {
//       setTimeout(() => {
//         const enemyIndex = this.enemies.indexOf(enemy);
//         this.enemies.splice(enemyIndex, 1);
//       }, 0);
//     }
//   } else {
//     enemy.draw(this.ctx);
//   }
