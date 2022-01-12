import Game from "./game.js";
import startGame from "./DOM/startGame.js";
import chooseBullets from "./DOM/chooseBullet.js";
import increaseStats from "./DOM/increaseStats.js";
import removeActiveBtn from "./DOM/chooseLevel.js";
import updateScoreAndStatusBar from "./DOM/updateScores.js";

const FRAME = 60;
let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.5;
gameCanvas.height = 928 / 1.5;

let levelBtn = document.getElementsByClassName("btn-level");

let levelClicked = 1;

let mainMenu = document.getElementById("main-menu");
let playButton = document.getElementById("play-button");

let gameStates = [
  new Game(ctx, gameCanvas.width, gameCanvas.height, 1),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 2),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 3),
];

//check onclick level
for (let i = 0; i < levelBtn.length; i++) {
  levelBtn[i].onclick = (e) => {
    levelClicked = i;
    removeActiveBtn();
    levelBtn[i].classList.add("btn-level-active");
  };
}

playButton.onclick = (e) => {
  startGame(gameStates[levelClicked], FRAME, mainMenu, playButton);
  mainMenu.style.display = "none";
  playButton.style.display = "none";
  startCountOfAll();
};

//in loop of DOM elements to keep track of everything
function startCountOfAll() {
  setInterval(() => {
    let gameObj = gameStates[levelClicked];
    if (gameObj.won) {
      console.log("You are the winner");
    }
    updateScoreAndStatusBar(gameObj);
    increaseStats(gameObj);
    chooseBullets(gameObj);
  }, 1000 / 30);
}
