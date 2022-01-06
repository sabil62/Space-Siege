import getImage from "./getImage/getImage.js";
import Player from "./player/Player.js";
import BulletController from "./bullet/bulletController.js";

let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.745;
gameCanvas.height = 928 / 1.745;

let bulletController = new BulletController();

// bg.src = "../assets/images/background.jpg";
let bg = getImage("background.jpg");
let player = new Player(
  gameCanvas.width - 250,
  gameCanvas.height / 2,
  bulletController
);
function game() {
  ctx.drawImage(bg, 0, 0, 1745, 928, 0, 0, 1745 / 1.745, 928 / 1.745);
  bulletController.draw(ctx);
  ctx.fillStyle = "black";
  ctx.fillRect(100, 150, 200, 100);
  ctx.fillStyle = "blue";
  ctx.fillRect(150, 220, 200, 150);
  ctx.fillStyle = "yellow";
  ctx.fillRect(300, 150, 200, 100);
  player.draw(ctx);

  // console.log("lion");
}

setInterval(() => {
  game();
}, 30);

// ctx.fillStyle = "red";
// ctx.fillRect(0, 0, 1000, 500);
