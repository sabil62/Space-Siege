import Game from "./game.js";

let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.5;
gameCanvas.height = 928 / 1.5;

let start = document.getElementsByClassName("start")[0];
let pause = document.getElementsByClassName("pause")[0];
start.style.display = "none";

const FRAME = 60;

let gameStates = [
  new Game(ctx, gameCanvas.width, gameCanvas.height, 1),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 2),
  new Game(ctx, gameCanvas.width, gameCanvas.height, 3),
];

function startGame(level) {
  let intervalId = setInterval(() => {
    // gameLoop();
    gameStates[level].draw();
  }, 1000 / FRAME);

  pause.onclick = () => {
    clearInterval(intervalId);
    start.style.display = "block";
    pause.style.display = "none";
  };

  start.onclick = () => {
    intervalId = setInterval(() => {
      gameStates[level].draw();
    }, 1000 / FRAME);
    start.style.display = "none";
    pause.style.display = "block";
  };
}

let levelClicked = 1;
let levelBtn = document.getElementsByClassName("btn-level");
let mainMenu = document.getElementById("main-menu");

//-------remove all class levelbtn------
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

let playButton = document.getElementById("play-button");

playButton.onclick = (e) => {
  startGame(levelClicked);
  mainMenu.style.display = "none";
  playButton.style.display = "none";
};
