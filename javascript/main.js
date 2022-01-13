import Game from "./game.js";
import audios from "./DOM/sounds.js";
import startGame from "./DOM/startGame.js";
import { intervalID } from "./DOM/startGame.js";
import chooseBullets from "./DOM/chooseBullet.js";
import increaseStats from "./DOM/increaseStats.js";
import removeActiveBtn from "./DOM/chooseLevel.js";
// import { playerNumbers } from "./DOM/playerClicked.js";
import { playerClicked } from "./DOM/playerClicked.js";
import updateScoreAndStatusBar from "./DOM/updateScores.js";

const FRAME = 60;
let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.5;
gameCanvas.height = 928 / 1.5;

//0 means 1
let levelClicked = 0;

let mainMenu = document.getElementById("main-menu");
let gameOver = document.getElementById("game-over");
let wonOrLost = document.getElementById("won-or-lost");
let start = document.getElementsByClassName("start")[0];
let pause = document.getElementsByClassName("pause")[0];
let playButton = document.getElementById("play-button");

let dialogueBox = document.getElementById("dialogue-box");
let levelBtn = document.getElementsByClassName("btn-level");
let heroImages = document.querySelectorAll(".hero-circle-box img");
let travelMainMenu = document.getElementsByClassName("travelMainMenu");

let playerSelected = 1;
//which player selected
for (let i = 0; i < heroImages.length; i++) {
  heroImages[i].onclick = (e) => {
    audios[0].play();
    if (i !== 0) {
      playerSelected = 2;
    } else {
      playerSelected = 1;
    }
    playerClicked(i);
    console.log(playerSelected);
  };
}

let gameStates = [
  new Game(ctx, gameCanvas.width, gameCanvas.height, 1),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 2),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 3),
  false,
];

let updateIntervalId;

//display none
gameOver.style.display = "none";

//check onclick level
for (let i = 0; i < levelBtn.length; i++) {
  levelBtn[i].onclick = (e) => {
    levelClicked = i;
    removeActiveBtn();
    levelBtn[i].classList.add("btn-level-active");
    audios[1].play();
  };
}

playButton.onclick = (e) => {
  audios[10].play();
  audios[10].volume = 0.86;
  setTimeout(() => {
    startGame(gameStates[levelClicked], FRAME, playerSelected);
    mainMenu.style.display = "none";
    playButton.style.display = "none";
    startCountOfAll();
  }, 600);
};

let gameDecision = false;
//in loop of DOM elements to keep track of everything
function startCountOfAll() {
  updateIntervalId = setInterval(() => {
    let gameObj = gameStates[levelClicked];

    if (gameObj.won && !gameObj.gameOver) {
      // let gameDecision = 1;
      gameOver.style.display = "block";
      wonOrLost.innerHTML = "You Win";
      clearInterval(updateIntervalId);
      if (!gameDecision) {
        setTimeout(() => {
          audios[17].play();
          audios[17].volume = 0.46;
          audios[17].loop = false;
        }, 500);
        gameDecision = true;
      }
    }

    if (gameObj.gameOver && !gameObj.won) {
      gameOver.style.display = "block";
      wonOrLost.innerHTML = "You Lose";
      clearInterval(intervalID());
      clearInterval(updateIntervalId);
      if (!gameDecision) {
        setTimeout(() => {
          audios[16].play();
          audios[16].volume = 0.46;
        }, 500);
        gameDecision = true;
      }
    }

    updateScoreAndStatusBar(gameObj);
    increaseStats(gameObj);
    chooseBullets(gameObj);
    backToMainMenu();
  }, 1000 / 30);
}

function backToMainMenu() {
  gameDecision = false;
  for (let i = 0; i < travelMainMenu.length; i++) {
    travelMainMenu[i].onclick = () => {
      audios[4].play();
      audios[4].volume = 0.7;
      gameStates[levelClicked].reset();

      if (intervalID()) {
        clearInterval(intervalID());
      }

      if (i === 1) {
        gameOver.style.display = "none";
      }

      clearInterval(updateIntervalId);
      mainMenu.style.display = "block";
      dialogueBox.style.display = "none";
      playButton.style.display = "block";
      levelClicked = 1;
      start.style.display = "none";
      pause.style.display = "block";
    };
  }
}
