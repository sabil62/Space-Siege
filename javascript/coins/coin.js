export default class Coin {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * (this.canvasWidth - 300) + 250;
    this.y = -60;
    this.radius = 40;
    this.speed = 1.7;
  }

  draw(ctx) {
    this.update();
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  update() {
    this.y += this.speed;
  }
}
