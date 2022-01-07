import getImage from "./getImage/getImage.js";
import Player from "./player/Player.js";
import BulletController from "./bullet/bulletController.js";
import Enemy1 from "./enemy/enemy1.js";
import Enemy2 from "./enemy/enemy2.js";
import Enemy3 from "./enemy/enemy3.js";
import Enemy4 from "./enemy/enemy4.js";

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
    this.enemyTimeInterval = 300;
    this.enemyTimer = 0;
    this.enemyCategory = ["first", "second"];
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
    let randomNumber = Math.floor(Math.random() * 10);
    switch (randomNumber) {
      case 1:
      case 2:
        this.enemies.push(new Enemy2());
        break;
      case 4:
      case 5:
        this.enemies.push(new Enemy3());
        break;
      case 6:
        this.enemies.push(new Enemy4());
        break;

      default:
        this.enemies.push(new Enemy1());
        break;
    }
    this.enemies.sort((p, q) => p.y - q.y);
  }
}

// enemies = [new Enemy1(),new Enemy1()]
function gameLoop() {
  //background image
  ctx.drawImage(bg, 0, 0, 1745, 928, 0, 0, 1745 / 1.6, 928 / 1.6);
  //bullet
  bulletController.draw(ctx);
  //player
  player.draw(ctx);
  //enemies
  // enemies.forEach((enemy) => {
  //   if (bulletController.enemyCollision(enemy)) {
  //     if (enemy.health <= 0) {
  //       const enemyIndex = enemies.indexOf(enemy);
  //       enemies.splice(enemyIndex, 1);
  //     }
  //   } else {
  //     enemy.draw(ctx);
  //   }
  //   if (enemy.hasReachedEnd()) {
  //     console.log("Game Over");
  //     enemies.splice(enemies.indexOf(enemy), 1);
  //   }
  // });
  console.log("lion");
}

let game = new Game(gameCanvas, gameCanvas.width, gameCanvas.height);
setInterval(() => {
  gameLoop();
  game.draw();
}, 1000 / 60);

// ctx.fillStyle = "red";
// ctx.fillRect(0, 0, 1000, 500);
