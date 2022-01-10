import Coin from "./coin.js";
import SpriteAnimations from "../spriteAnimation/spriteAnimations.js";

export default class CoinDiamond extends Coin {
  constructor(canvasWidth, canvasHeight) {
    super(canvasWidth, canvasHeight);
    this.coinValue = 12;
    this.speed = 1.3;
    this.height = 42;
    this.width = 36;
    this.angle = 0;
    this.coinType = new SpriteAnimations("Yellow_?.png", 1, 4, "coin", false);
  }

  update() {
    this.y += this.speed;
    this.x += Math.cos(this.angle) * (Math.random() * 2 + 2);
    this.angle += 0.0202;
  }
}
