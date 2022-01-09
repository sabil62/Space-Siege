import getImage from "./getImage/getImage.js";
import Player from "./player/Player.js";
import BulletController from "./bullet/bulletController.js";
import enemyController from "./enemy/enemyController.js";
import coinController from "./coins/coinController.js";
// import EnemyBulletController from "./bullet/enemyBulletController.js";

let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.6;
gameCanvas.height = 928 / 1.6;

class Game {
  constructor(ctx, width, height, level) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.bg = getImage("background.jpg");

    this.bulletCount = 300;
    this.bulletController = new BulletController(this.bulletCount);

    this.player = new Player(
      this.width - 250,
      this.height / 2,
      this.bulletController
    );

    this.enemies = [];
    this.enemyTimer = 0;
    this.level = level;
    this.enemyTimeInterval = this.level === 3 ? 200 : 280;

    this.coins = [];
    this.coinTimer = 0;

    this.score = 0;
    this.coinCount = 0;
  }
  draw() {
    this.ctx.drawImage(this.bg, 0, 0, 1745, 928, 0, 0, 1745 / 1.6, 928 / 1.6);
    this.bulletController.draw(this.ctx);
    this.player.draw(this.ctx);

    this.#enemyInterval();
    this.#coinInterval();
    this.#displayScore();
  }

  #displayScore() {
    this.ctx.font = "17px Georgia";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Score: " + this.score, 25, 20);
    this.ctx.fillText("Coins: " + this.coinCount, 120, 20);
    // this.ctx.fillText("Bullets: " + this.bulletCount, 200, 20);
  }

  #enemyInterval() {
    if (this.enemyTimer > this.enemyTimeInterval) {
      this.#createEnemy();
      this.enemyTimer = 0;
    } else {
      this.enemyTimer++;
    }
    this.enemies.forEach((enemy) => {
      if (this.bulletController.enemyCollision(enemy)) {
        if (enemy.health <= 0) {
          setTimeout(() => {
            const enemyIndex = this.enemies.indexOf(enemy);
            this.enemies.splice(enemyIndex, 1);
          }, 0);
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

  #coinInterval() {
    this.coinTimer++;
    let coinTimeInterval =
      this.level === 3 ? Math.random() * 200 + 60 : Math.random() * 400 + 300;
    let intervalAmount = this.level ? 399 : 299;
    let randomInterval = Math.floor(Math.random() * intervalAmount);
    if (randomInterval === 4) {
      this.#createCoins();
    }
    if (this.coinTimer > coinTimeInterval) {
      this.#createCoins();
      this.coinTimer = 0;
    }
    // console.log(this.coins.length);
    this.coins.forEach((coin) => {
      if (this.player.coinCollision(coin)) {
        this.addBulletsByCoin(coin);
        this.coinCount += coin.coinValue;
        let coinIndex = this.coins.indexOf(coin);
        this.coins.splice(coinIndex, 1);
      }
      coin.draw(this.ctx);
      //remove out of screen coins
      if (coin.isCoinOutOfScreen()) {
        let coinIndex = this.coins.indexOf(coin);
        this.coins.splice(coinIndex, 1);
      }
    });
  }

  addBulletsByCoin(coin) {
    let bulletsToBeAdded = 0;
    switch (coin.coinValue) {
      case 18:
        bulletsToBeAdded = 24;
        break;
      case 12:
        bulletsToBeAdded = 12;
        break;
      case 5:
        bulletsToBeAdded = 4;
        break;
      case 3:
        bulletsToBeAdded = 2;
        break;
      default:
        bulletsToBeAdded = 1;
        break;
    }
    this.bulletController.addBullets(bulletsToBeAdded);
  }

  // addBulletsIfEnoughCoin
  #createEnemy() {
    enemyController(this.enemies, this.level);
    this.enemies.sort((p, q) => p.y - q.y);
  }

  #createCoins() {
    coinController(this.coins, this.level, this.width, this.height);
    // this.coins.push(new Coin(this.width, this.height));
  }
}

let game = new Game(ctx, gameCanvas.width, gameCanvas.height, 5);
setInterval(() => {
  // gameLoop();
  game.draw();
}, 1000 / 120);
