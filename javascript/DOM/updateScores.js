let scoreUp = document.getElementById("score-Up");
let scoreMainStat = document.getElementById("score-main");
let healthMainStat = document.getElementById("health-stat");
let bulletMainStat = document.getElementById("bullet-stat");
let coinMainStat = document.getElementById("coin-stat");

let healthBar = document.getElementsByClassName("health-bar")[0];
let bulletBar = document.getElementsByClassName("bullet-bar")[0];
let coinBar = document.getElementsByClassName("coin-bar")[0];

export default function updateScoreAndStatusBar(gameObj) {
  scoreUp.innerHTML = gameObj.score;
  scoreMainStat.innerHTML = gameObj.score;

  healthMainStat.innerHTML = gameObj.player.playerHealth;
  bulletMainStat.innerHTML = gameObj.bulletController.bulletCount;
  coinMainStat.innerHTML = gameObj.coinCount;
  // gameStates[levelClicked].score;
  updateHealthBar(gameObj);
  updateBulletBar(gameObj);
  updateCoinBar(gameObj);
}

function updateHealthBar(gameObj) {
  let health = gameObj.player.playerHealth;
  let healthBarWidth;

  if (health <= 60 && health >= 20) {
    healthBar.style.backgroundColor = "#07d289";
    healthBarWidth = Math.floor((190 / 60) * health);
  } else if (health > 60) {
    //to prevent width from going further
    healthBarWidth = 190;
  } else {
    healthBarWidth = Math.floor((190 / 60) * health);
    healthBar.style.backgroundColor = "#FB6363";
  }

  healthBar.style.width = healthBarWidth + "px";
}

function updateBulletBar(gameObj) {
  let bullet = gameObj.bulletController.bulletCount;
  let bulletBarWidth;

  if (bullet <= 300 && bullet >= 100) {
    bulletBar.style.backgroundColor = "#fdca77";
    bulletBarWidth = Math.floor((190 / 300) * bullet);
  } else if (bullet > 300) {
    bulletBarWidth = 190;
  } else {
    bulletBarWidth = Math.floor((190 / 300) * bullet);
    bulletBar.style.backgroundColor = "#FB6363";
  }

  bulletBar.style.width = bulletBarWidth + "px";
}

function updateCoinBar(gameObj) {
  let coin = gameObj.coinCount;
  let coinBarWidth = coin;

  if (coin <= 190 && coin >= 30) {
    coinBar.style.backgroundColor = "#01c3c3";
  } else if (coin > 190) {
    coinBarWidth = 190;
  } else {
    coinBar.style.backgroundColor = "#FB6363";
  }

  coinBar.style.width = coinBarWidth + "px";
}
