import Game from "./game.js";

let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.5;
gameCanvas.height = 928 / 1.5;

let frame = 30;

let game = new Game(ctx, gameCanvas.width, gameCanvas.height, 1);
let intervalId = setInterval(() => {
  // gameLoop();
  game.draw();
}, 1000 / frame);

let start = document.getElementsByClassName("start")[0];
let pause = document.getElementsByClassName("pause")[0];
start.style.display = "none";

pause.onclick = () => {
  clearInterval(intervalId);
  start.style.display = "block";
  pause.style.display = "none";
};

start.onclick = () => {
  intervalId = setInterval(() => {
    game.draw();
  }, 1000 / frame);
  start.style.display = "none";
  pause.style.display = "block";
};
