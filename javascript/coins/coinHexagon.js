import Coin from "./coin.js";
import CoinSprite from "./coinSpriteAnimation.js";

export default class CoinHexagon extends Coin {
  constructor(canvasWidth, canvasHeight) {
    super(canvasWidth, canvasHeight);
    this.coinValue = 18;
    this.speed = 2;
    this.coinType = new CoinSprite("Hexagon_?.png", 1, 4, true);
    this.xValue = this.x;
    this.dirX = this.xValue > this.canvasWidth / 2 ? -0.9 : 1.6;
  }
  update() {
    this.y += this.speed;
    this.x += this.dirX;
  }
}
