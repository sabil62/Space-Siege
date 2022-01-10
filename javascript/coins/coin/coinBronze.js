import Coin from "../coin.js";

import SpriteAnimations from "../../spriteAnimation/spriteAnimations.js";

export default class CoinBronze extends Coin {
  constructor(canvasWidth, canvasHeight) {
    super(canvasWidth, canvasHeight);
    this.coinValue = 1;
    this.speed = 1.5;
    this.coinType = new SpriteAnimations("Bronze_?.png", 10, 4, "coin", false);
  }
}
