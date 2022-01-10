import Game from "./game.js";

let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.5;
gameCanvas.height = 928 / 1.5;

let frame = 60;

let game = new Game(ctx, gameCanvas.width, gameCanvas.height, 1);
let intervalId = setInterval(() => {
  // gameLoop();
  game.draw();
}, 1000 / frame);

let pause = document.getElementsByClassName("pause")[0];

pause.onclick = () => {
  clearInterval(intervalId);
};

let start = document.getElementsByClassName("start")[0];

start.onclick = () => {
  intervalId = setInterval(() => {
    game.draw();
  }, 1000 / frame);
};
