import Game from "./game.js";
import startGame from "./DOM/startGame.js";
import chooseBullets from "./DOM/chooseBullet.js";
import increaseStats from "./DOM/increaseStats.js";
import removeActiveBtn from "./DOM/chooseLevel.js";
import updateScoreAndStatusBar from "./DOM/updateScores.js";
import { intervalID } from "./DOM/startGame.js";

const FRAME = 60;
let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.5;
gameCanvas.height = 928 / 1.5;

let levelBtn = document.getElementsByClassName("btn-level");

//0 means 1
let levelClicked = 0;

let mainMenu = document.getElementById("main-menu");
let playButton = document.getElementById("play-button");

let travelMainMenu = document.getElementsByClassName("travelMainMenu");
let dialogueBox = document.getElementById("dialogue-box");
let start = document.getElementsByClassName("start")[0];
let pause = document.getElementsByClassName("pause")[0];

let gameOver = document.getElementById("game-over");
let wonOrLost = document.getElementById("won-or-lost");
let resta = document.getElementsByClassName("resta")[0];

let gameStates = [
  new Game(ctx, gameCanvas.width, gameCanvas.height, 1),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 2),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 3),
  false,
];

let UpdateIntervalId;

//display none
gameOver.style.display = "none";

//check onclick level
for (let i = 0; i < levelBtn.length; i++) {
  levelBtn[i].onclick = (e) => {
    levelClicked = i;
    removeActiveBtn();
    levelBtn[i].classList.add("btn-level-active");
  };
}

playButton.onclick = (e) => {
  startGame(gameStates[levelClicked], FRAME);
  mainMenu.style.display = "none";
  playButton.style.display = "none";
  startCountOfAll();
};

//in loop of DOM elements to keep track of everything
function startCountOfAll() {
  UpdateIntervalId = setInterval(() => {
    // console.log("startCountofAll");
    let gameObj = gameStates[levelClicked];
    if (gameObj.won) {
      console.log("You are the winner");
      gameOver.style.display = "block";
      wonOrLost.innerHTML = "Winner";
    }
    updateScoreAndStatusBar(gameObj);
    increaseStats(gameObj);
    chooseBullets(gameObj);
    backToMainMenu();
  }, 1000 / 30);
}

function backToMainMenu() {
  for (let i = 0; i < travelMainMenu.length; i++) {
    travelMainMenu[i].onclick = () => {
      gameStates[levelClicked].reset();

      if (intervalID()) {
        clearInterval(intervalID());
      }

      if (i === 1) {
        gameOver.style.display = "none";
      }

      clearInterval(UpdateIntervalId);
      mainMenu.style.display = "block";
      dialogueBox.style.display = "none";
      playButton.style.display = "block";
      levelClicked = 1;
      start.style.display = "none";
      pause.style.display = "block";
    };
  }
}

function restart() {
  resta.onclick = () => {};
}
