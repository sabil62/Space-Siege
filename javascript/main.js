import getImage from "./getImage/getImage.js";
import Player from "./player/Player.js";
import BulletController from "./bullet/bulletController.js";
import levelOfEnemies from "./enemy/enemyController.js";
import Coin from "./coins/coin.js";

let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.6;
gameCanvas.height = 928 / 1.6;

// let bulletController = new BulletController();

// let bg = getImage("background.jpg");
// let player = new Player(
//   gameCanvas.width - 250,
//   gameCanvas.height / 2,
//   bulletController
// );

class Game {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.bg = getImage("background.jpg");

    this.bulletController = new BulletController();

    this.player = new Player(
      this.width - 250,
      this.height / 2,
      this.bulletController
    );

    this.enemies = [];
    this.enemyTimer = 0;
    this.level = 1;
    this.enemyTimeInterval = this.level === 3 ? 200 : 280;

    this.coins = [];
  }
  draw() {
    this.ctx.drawImage(this.bg, 0, 0, 1745, 928, 0, 0, 1745 / 1.6, 928 / 1.6);
    this.bulletController.draw(this.ctx);
    this.player.draw(this.ctx);
    if (this.enemyTimer > this.enemyTimeInterval) {
      this.#createEnemy();
      this.enemyTimer = 0;
      console.log(this.enemies);
    } else {
      this.enemyTimer++;
    }
    this.enemies.forEach((enemy) => {
      if (this.bulletController.enemyCollision(enemy)) {
        if (enemy.health <= 0) {
          const enemyIndex = this.enemies.indexOf(enemy);
          this.enemies.splice(enemyIndex, 1);
        }
      } else {
        enemy.draw(this.ctx);
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
  // console.log("lion");
}

let game = new Game(ctx, gameCanvas.width, gameCanvas.height);
setInterval(() => {
  // gameLoop();
  game.draw();
}, 1000 / 100);
