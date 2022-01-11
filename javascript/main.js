import Game from "./game.js";
import updateScoreAndStatusBar from "./DOM/updateScores.js";
import increaseStats from "./DOM/increaseStats.js";
import chooseBullets from "./DOM/chooseBullet.js";
import onlevelClicked from "./DOM/chooseLevel.js";

const FRAME = 60;
let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.5;
gameCanvas.height = 928 / 1.5;

let start = document.getElementsByClassName("start")[0];
let pause = document.getElementsByClassName("pause")[0];

let levelClicked = 1;
// let levelBtn = document.getElementsByClassName("btn-level");
let mainMenu = document.getElementById("main-menu");
let playButton = document.getElementById("play-button");

let gameStates = [
  new Game(ctx, gameCanvas.width, gameCanvas.height, 1),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 2),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 3),
];

onlevelClicked();
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

playButton.onclick = (e) => {
  levelClicked = onlevelClicked();
  startGame(levelClicked);
  mainMenu.style.display = "none";
  playButton.style.display = "none";
  startCountOfAll();
};

//in setinterval
// gameStates[levelClicked].getupdate
function startCountOfAll() {
  startCountInterval = setInterval(() => {
    console.log(levelClicked);
    let gameObj = gameStates[levelClicked];
    if (gameObj.won) {
      console.log("You are the winner");
    }
    updateScoreAndStatusBar(gameObj);
    increaseStats(gameObj);
    chooseBullets(gameStates[levelClicked]);
  }, 1000 / 30);
}
