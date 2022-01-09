export default class EnemyWeapon {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = -100;
    this.y = Math.random() * (this.canvasHeight - 60) + 40;
  }
}
