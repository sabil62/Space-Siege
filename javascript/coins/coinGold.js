import Coin from "./coin.js";
import CoinSprite from "./coinSpriteAnimation.js";

export default class CoinGold extends Coin {
  constructor(canvasWidth, canvasHeight) {
    super(canvasWidth, canvasHeight);
    this.speed = 3;
    this.coinValue = 5;
    this.coinType = new CoinSprite("Gold_?.png", 10, 4, false);
  }
}
