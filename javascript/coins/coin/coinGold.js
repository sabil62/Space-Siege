import Coin from "../coin.js";
import SpriteAnimations from "../../spriteAnimation/spriteAnimations.js";

export default class CoinGold extends Coin {
  constructor(canvasWidth, canvasHeight) {
    super(canvasWidth, canvasHeight);
    this.speed = 3;
    this.coinValue = 5;
    this.coinType = new SpriteAnimations("Gold_?.png", 10, 4, "coin", false);
  }
}
