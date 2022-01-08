export default class EnemyBullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 3;
    this.harmLevel = 1;

    this.bulletHeight = 4;
    this.bulletWidth = 12;
  }
  draw(ctx) {
    this.x += this.speed;
    ctx.fillRect(this.x, this.y, this.bulletWidth, this.bulletWidth);
  }
}
