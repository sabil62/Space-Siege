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
  let healthBarWidth = Math.floor((190 / 42) * health);

  if (health <= 42 && health >= 16) {
    healthBar.style.backgroundColor = "#07d289";
    healthBar.style.boxShadow = " 0 2px 12px -2px #07d288e0";
  } else if (health > 42) {
    //to prevent width from going further
    healthBarWidth = 190;
  } else {
    healthBar.style.backgroundColor = "#FB6363";
    healthBar.style.boxShadow = " 0 2px 12px -2px #e66554de";
  }

  healthBar.style.width = healthBarWidth + "px";
}

function updateBulletBar(gameObj) {
  let bullet = gameObj.bulletController.bulletCount;

  let levelCount = gameObj.level === 3 ? 240 : 180;
  let bulletBarWidth = Math.floor((190 / levelCount) * bullet);

  if (bullet <= levelCount && bullet >= 100) {
    bulletBar.style.backgroundColor = "#fdca77";
    bulletBar.style.boxShadow = " 0 2px 12px -2px #fdca77d7";
  } else if (bullet > levelCount) {
    bulletBarWidth = 190;
  } else {
    bulletBar.style.backgroundColor = "#FB6363";
    bulletBar.style.boxShadow = " 0 2px 12px -2px #e66554de";
  }

  bulletBar.style.width = bulletBarWidth + "px";
}

function updateCoinBar(gameObj) {
  let coin = gameObj.coinCount;
  let coinBarWidth = coin;

  if (coin <= 190 && coin >= 30) {
    coinBar.style.backgroundColor = "#01c3c3";
    coinBar.style.boxShadow = "0 2px 12px -2px #01c3c3de";
  } else if (coin > 190) {
    coinBarWidth = 190;
  } else {
    coinBar.style.backgroundColor = "#FB6363";
    coinBar.style.boxShadow = " 0 2px 12px -2px #e66554de";
  }

  coinBar.style.width = coinBarWidth + "px";
}
