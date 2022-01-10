import Coin from "./coin.js";
import CoinGold from "./coin/coinGold.js";
import CoinBronze from "./coin/coinBronze.js";
import CoinHexagon from "./coin/coinHexagon.js";
import CoinDiamond from "./coin/coinDiamond.js";

export default function coinController(
  coinArray,
  level,
  canvasWidth,
  canvasHeight
) {
  let randomCoinNumber = Math.floor(Math.random() * 16);
  if (level === 2) {
    if (randomCoinNumber <= 4 && randomCoinNumber >= 1) {
      coinArray.push(new Coin(canvasWidth, canvasHeight));
    } else if (randomCoinNumber > 4 && randomCoinNumber <= 8) {
      coinArray.push(new CoinBronze(canvasWidth, canvasHeight));
    } else if (randomCoinNumber > 8 && randomCoinNumber <= 12) {
      coinArray.push(new CoinGold(canvasWidth, canvasHeight));
    } else if (randomCoinNumber > 12 && randomCoinNumber <= 14) {
      coinArray.push(new CoinHexagon(canvasWidth, canvasHeight));
    } else {
      coinArray.push(new CoinDiamond(canvasWidth, canvasHeight));
    }
  } else if (level === 1) {
    if (randomCoinNumber <= 4 && randomCoinNumber >= 1) {
      coinArray.push(new Coin(canvasWidth, canvasHeight));
    } else if (randomCoinNumber > 4 && randomCoinNumber <= 10) {
      coinArray.push(new CoinBronze(canvasWidth, canvasHeight));
    } else if (randomCoinNumber > 10 && randomCoinNumber <= 14) {
      coinArray.push(new CoinGold(canvasWidth, canvasHeight));
    } else if (randomCoinNumber === 15) {
      coinArray.push(new CoinHexagon(canvasWidth, canvasHeight));
    } else {
      coinArray.push(new CoinDiamond(canvasWidth, canvasHeight));
    }
  } else {
    if (randomCoinNumber <= 3 && randomCoinNumber >= 1) {
      coinArray.push(new Coin(canvasWidth, canvasHeight));
    } else if (randomCoinNumber > 3 && randomCoinNumber <= 6) {
      coinArray.push(new CoinBronze(canvasWidth, canvasHeight));
    } else if (randomCoinNumber > 6 && randomCoinNumber <= 11) {
      coinArray.push(new CoinGold(canvasWidth, canvasHeight));
    } else if (randomCoinNumber > 11 && randomCoinNumber <= 14) {
      coinArray.push(new CoinHexagon(canvasWidth, canvasHeight));
    } else {
      coinArray.push(new CoinDiamond(canvasWidth, canvasHeight));
    }
  }
}
