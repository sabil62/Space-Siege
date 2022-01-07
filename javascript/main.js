import getImage from "./getImage/getImage.js";
import Player from "./player/Player.js";
import BulletController from "./bullet/bulletController.js";
import levelOfEnemies from "./enemy/enemyController.js";

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

class Game {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.enemies = [];

    this.enemyTimer = 0;
    this.level = 3;
    this.enemyTimeInterval = this.level === 3 ? 200 : 280;
  }
  draw() {
    if (this.enemyTimer > this.enemyTimeInterval) {
      this.#createEnemy();
      this.enemyTimer = 0;
      console.log(this.enemies);
    } else {
      this.enemyTimer++;
    }
    this.enemies.forEach((enemy) => {
      if (bulletController.enemyCollision(enemy)) {
        if (enemy.health <= 0) {
          const enemyIndex = this.enemies.indexOf(enemy);
          this.enemies.splice(enemyIndex, 1);
        }
      } else {
        enemy.draw(ctx);
      }
      if (enemy.hasReachedEnd()) {
        console.log("Game Over");
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
      }
    });
  }

  #createEnemy() {
    levelOfEnemies(this.enemies, this.level);
    this.enemies.sort((p, q) => p.y - q.y);
  }
}

function gameLoop() {
  //background image
  ctx.drawImage(bg, 0, 0, 1745, 928, 0, 0, 1745 / 1.6, 928 / 1.6);
  bulletController.draw(ctx);
  player.draw(ctx);
  console.log("lion");
}

let game = new Game(gameCanvas, gameCanvas.width, gameCanvas.height);
setInterval(() => {
  gameLoop();
  game.draw();
}, 1000 / 60);
