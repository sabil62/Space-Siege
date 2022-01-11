let healthStat = document.getElementById("health-increase");
let bulletStat = document.getElementById("bullet-increase");

export default function increaseStats(gameObj) {
  healthStat.onclick = (e) => {
    if (gameObj.coinCount > 10) {
      gameObj.decreaseCoinCount(10);
      gameObj.player.increaseHealth(2);
    }
  };

  bulletStat.onclick = (e) => {
    if (gameObj.coinCount > 3) {
      gameObj.decreaseCoinCount(3);
      gameObj.bulletController.addBullets(3);
    }
  };
}
