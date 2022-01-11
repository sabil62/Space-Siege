import Game from "./game.js";
import updateScoreAndStatusBar from "./DOM/updateScores.js";

const FRAME = 60;
let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.5;
gameCanvas.height = 928 / 1.5;

let start = document.getElementsByClassName("start")[0];
let pause = document.getElementsByClassName("pause")[0];

let levelClicked = 1;
let levelBtn = document.getElementsByClassName("btn-level");
let mainMenu = document.getElementById("main-menu");
let playButton = document.getElementById("play-button");
let chooseBullet = document.getElementsByClassName("chooseBullet");

let gameStates = [
  new Game(ctx, gameCanvas.width, gameCanvas.height, 1),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 2),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 3),
];

//display none
start.style.display = "none";
let startCountInterval;
function startGame(level) {
  let intervalId = setInterval(() => {
    // gameLoop();
    gameStates[level].draw();
  }, 1000 / FRAME);

  pause.onclick = () => {
    clearInterval(intervalId);
    clearInterval(startCountInterval);
    start.style.display = "block";
    pause.style.display = "none";
  };

  start.onclick = () => {
    intervalId = setInterval(() => {
      gameStates[level].draw();
    }, 1000 / FRAME);
    start.style.display = "none";
    pause.style.display = "block";
    startCountOfAll();
  };
}

//-------remove all class levelbtn----------------
function removeActiveBtn() {
  for (let i = 0; i < levelBtn.length; i++) {
    if (levelBtn[i].classList.contains("btn-level-active")) {
      levelBtn[i].classList.remove("btn-level-active");
    }
  }
}

for (let i = 0; i < levelBtn.length; i++) {
  levelBtn[i].onclick = (e) => {
    levelClicked = i;
    removeActiveBtn();
    levelBtn[i].classList.add("btn-level-active");
  };
}

playButton.onclick = (e) => {
  startGame(levelClicked);
  mainMenu.style.display = "none";
  playButton.style.display = "none";
  startCountOfAll();
};

// -----------------for choose bullet -----------------
function setOriginalImage() {
  for (let i = 0; i < chooseBullet.length; i++) {
    let im = i + 1;
    chooseBullet[i].src = "./assets/UI/choose-" + im + ".png";
  }
}

for (let i = 0; i < chooseBullet.length; i++) {
  chooseBullet[i].onclick = () => {
    setOriginalImage();
    //game.setBulletType(i) <= understand (game is new Game())
    let im = i + 1;
    // console.log()
    gameStates[levelClicked].player.updateBulletType(im); //do .player.updateBullet()
    chooseBullet[i].src = "./assets/UI/choose-" + im + "-hover.png";
  };
}
//------------------------choose bullet end---------

//in setinterval
// gameStates[levelClicked].getupdate
function startCountOfAll() {
  startCountInterval = setInterval(() => {
    let gameObj = gameStates[levelClicked];
    if (gameObj.won) {
      console.log("You are the winner");
    }
    updateScoreAndStatusBar(gameObj);
  }, 1000 / 30);
}
