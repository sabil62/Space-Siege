import Coin from "./coin.js";
import CoinGold from "./coinGold.js";
import CoinBronze from "./coinBronze.js";
import CoinHexagon from "./coinHexagon.js";
import CoinDiamond from "./coinDiamond.js";

export default function coinController(
  coinArray,
  level,
  canvasWidth,
  canvasHeight
) {
  let randomCoinNumber = Math.floor(Math.random() * 16);
  if (level === 1) {
    switch (randomCoinNumber) {
      case 1:
      case 2:
      case 3:
      case 4:
        coinArray.push(new Coin(canvasWidth, canvasHeight));
        break;

      case 5:
      case 6:
      case 7:
      case 8:
        coinArray.push(new CoinBronze(canvasWidth, canvasHeight));
        break;

      case 9:
        coinArray.push(new CoinHexagon(canvasWidth, canvasHeight));
        break;

      case 10:
        coinArray.push(new CoinGold(canvasWidth, canvasHeight));
        break;

      default:
        coinArray.push(new CoinDiamond(canvasWidth, canvasHeight));
        break;
    }
  } else {
    coinArray.push(new CoinGold(canvasWidth, canvasHeight));
  }
}
