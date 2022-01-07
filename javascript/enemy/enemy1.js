export default class Enemy1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health = 10;
    this.width = 150;
    this.height = 150;
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  decreaseHealth(bulletDamageLevel) {
    this.health -= bulletDamageLevel;
  }
}
