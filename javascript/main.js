import Game from "./game.js";

let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.6;
gameCanvas.height = 928 / 1.6;

let game = new Game(ctx, gameCanvas.width, gameCanvas.height, 3);
setInterval(() => {
  // gameLoop();
  game.draw();
}, 1000 / 60);
