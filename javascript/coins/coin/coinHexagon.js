import Coin from "../coin.js";
import SpriteAnimations from "../../spriteAnimation/spriteAnimations.js";

export default class CoinHexagon extends Coin {
  constructor(canvasWidth, canvasHeight) {
    super(canvasWidth, canvasHeight);
    this.coinValue = 9;
    this.speed = 2;
    this.coinType = new SpriteAnimations("Hexagon_?.png", 1, 4, "coin", true);
    this.xValue = this.x;
    this.dirX = this.xValue > this.canvasWidth / 2 ? -0.9 : 1.6;
  }
  update() {
    this.y += this.speed;
    this.x += this.dirX;
  }
}
