export default class Coin {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * (this.canvasWidth - 300) + 250;
    this.y = -60;
    this.radius = 15;
    this.speed = 1.7;
    this.height = 30;
    this.width = 30;
  }

  draw(ctx) {
    this.#update();
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  #update() {
    this.y += this.speed;
  }

  isCoinOutOfScreen() {
    return this.y > this.canvasHeight + 20;
  }
}
