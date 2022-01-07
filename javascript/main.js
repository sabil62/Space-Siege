import getImage from "./getImage/getImage.js";
import Player from "./player/Player.js";
import BulletController from "./bullet/bulletController.js";
import Enemy1 from "./enemy/enemy1.js";

let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.6;
gameCanvas.height = 928 / 1.6;

let bulletController = new BulletController();

// bg.src = "../assets/images/background.jpg";
let bg = getImage("background.jpg");
let player = new Player(
  gameCanvas.width - 250,
  gameCanvas.height / 2,
  bulletController
);

let enemies = [new Enemy1(150, 150), new Enemy1(150, 400)];
function gameLoop() {
  //background image
  ctx.drawImage(bg, 0, 0, 1745, 928, 0, 0, 1745 / 1.6, 928 / 1.6);
  //bullet
  bulletController.draw(ctx);
  // ctx.fillStyle = "black";
  // ctx.fillRect(100, 150, 200, 100);
  //player
  player.draw(ctx);
  //enemies
  enemies.forEach((enemy) => {
    if (bulletController.enemyCollision(enemy)) {
      if (enemy.health <= 0) {
        const enemyIndex = enemies.indexOf(enemy);
        enemies.splice(enemyIndex, 1);
      }
    } else {
      enemy.draw(ctx);
    }
    if (enemy.hasReachedEnd()) {
      console.log("Game Over");
      enemies.splice(enemies.indexOf(enemy), 1);
    }
  });
  console.log("lion");
}

setInterval(() => {
  gameLoop();
}, 1000 / 1);

// ctx.fillStyle = "red";
// ctx.fillRect(0, 0, 1000, 500);
