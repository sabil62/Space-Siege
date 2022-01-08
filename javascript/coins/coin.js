import CoinSprite from "./coinSpriteAnimation.js";

export default class Coin {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * (this.canvasWidth - 350) + 300;
    this.y = -60;
    this.speed = 1.8;
    this.height = 38;
    this.width = 38;
    this.coinValue = 3;
    this.coinType = new CoinSprite("Silver_?.png", 10, 4, false);
  }

  draw(ctx) {
    this.update();
    let coinImage = this.coinType.showImage();
    ctx.drawImage(coinImage, this.x, this.y, this.width, this.height);
  }

  update() {
    this.y += this.speed;
  }

  isCoinOutOfScreen() {
    return this.y > this.canvasHeight + 20;
  }
}
