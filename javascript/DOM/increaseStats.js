import audios from "./sounds.js";

let healthStat = document.getElementById("health-increase");
let bulletStat = document.getElementById("bullet-increase");

export default function increaseStats(gameObj) {
  healthStat.onclick = (e) => {
    if (gameObj.coinCount > 10) {
      audios[22].play();
      audios[22].volume = 0.24;
      gameObj.decreaseCoinCount(10);
      gameObj.player.increaseHealth(2);
    }
  };

  bulletStat.onclick = (e) => {
    if (gameObj.coinCount > 3) {
      audios[22].play();
      audios[22].volume = 0.24;
      gameObj.decreaseCoinCount(3);
      gameObj.bulletController.addBullets(3);
    }
  };
}
