import Coin from "./coin.js";
import CoinSprite from "./coinSpriteAnimation.js";

export default class CoinDiamond extends Coin {
  constructor(canvasWidth, canvasHeight) {
    super(canvasWidth, canvasHeight);
    this.coinValue = 12;
    this.speed = 1.8;
    this.coinType = new CoinSprite("Yellow_?.png", 1, 4, false);
  }
}
