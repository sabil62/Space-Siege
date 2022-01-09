import getImage from "./getImage/getImage.js";
import Player from "./player/Player.js";
import BulletController from "./bullet/bulletController.js";
import enemyController from "./enemy/enemyController.js";
import coinController from "./coins/coinController.js";
import enemyWeaponController from "./enemyWeapons/enememyWeaponController.js";
import SpriteAnimations from "./spriteAnimation/spriteAnimations.js";
// import EnemyBulletController from "./bullet/enemyBulletController.js";

export default class Game {
  constructor(ctx, width, height, level) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.bg = getImage("background.jpg");

    //bullet Type (1-5)
    this.bulletType = 1;

    this.bulletCount = 300;
    this.bulletController = new BulletController(this.bulletCount);

    this.player = new Player(
      this.width - 250,
      this.height / 2,
      this.bulletController,
      this.bulletType
    );

    this.enemies = [];
    this.enemyTimer = 0;
    this.level = level;
    this.enemyTimeInterval = this.level === 3 ? 200 : 280;

    this.coins = [];
    this.coinTimer = 0;

    this.score = 0;
    this.scoreTimer = 10;

    this.coinCount = 0;

    this.enemyWeapon = [];
    this.enemyWeaponTimer = 0;
    this.enemyWeaponTimerInterval = this.level === 3 ? 600 : 800;

    this.explosionImage = [
      new SpriteAnimations("tile0?.png", 31, 4, "explosion", false),
      new SpriteAnimations("exp-?.png", 18, 4, "explosion", false),
    ];
    this.explosion = [
      {
        x: null,
        y: null,
        width: null,
        timer: 0,
      },
      {
        x: null,
        y: null,
        width: null,
        height: null,
        timer: 0,
        ismainEnemy: false,
      },
    ];
  }
  draw() {
    this.ctx.drawImage(this.bg, 0, 0, 1745, 928, 0, 0, 1745 / 1.6, 928 / 1.6);
    this.bulletController.draw(this.ctx);

    this.player.draw(this.ctx);
    this.#enemyWeaponInterval();
    this.#enemyInterval();
    this.#coinInterval();
    this.#displayScore();
    this.drawExplosion();
    this.drawEnemyExplosion();
  }

  #displayScore() {
    if (this.scoreTimer > 30) {
      this.score++;
      this.scoreTimer = 0;
    }
    this.scoreTimer++;
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
          this.explosion[1].x = enemy.x;
          this.explosion[1].y = enemy.y;
          this.explosion[1].width = enemy.width;
          this.explosion[1].height = enemy.height;
          this.explosion[1].ismainEnemy = enemy.height === 143 ? true : false;
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

  #enemyWeaponInterval() {
    let intervalAmount = this.level === 3 ? 399 : 599;
    let randomInterval = Math.floor(Math.random() * intervalAmount);
    if (randomInterval === 4) {
      this.#createEnemyWeapon();
    }

    this.enemyWeaponTimer++;
    if (this.enemyWeaponTimer > this.enemyWeaponTimerInterval) {
      this.#createEnemyWeapon();
      this.enemyWeaponTimer = 0;
    }
    this.enemyWeapon.forEach((eWeapon, index) => {
      if (this.player.enemyBulletCollision(eWeapon)) {
        this.explosionTimer = 0;
        this.player.decreaseHealth(eWeapon.damage);
        if (this.player.playerHealth <= 0) {
          console.log("Game Over Health");
        }
        this.explosion[0].x = eWeapon.x;
        this.explosion[0].y = eWeapon.y - 10;
        this.explosion[0].width = eWeapon.width - 4;
        // this.reduceEnemyWeaponArray(index);
        this.enemyWeapon.splice(index, 1);
      }

      if (this.bulletController.enemyCollision(eWeapon)) {
        // eWeapon.decreaseHealth(2);
        if (eWeapon.health <= 0) {
          this.enemyWeapon.splice(index, 1);
        }
      }

      eWeapon.draw(this.ctx);
      if (eWeapon.isEnemyBulletOut()) {
        this.enemyWeapon.splice(index, 1);
      }
    });
  }

  drawExplosion() {
    if (this.explosion[0].x) {
      let animationImage = this.explosionImage[0].showImage();
      this.ctx.drawImage(
        animationImage,
        this.explosion[0].x + this.explosion[0].width,
        this.explosion[0].y
      );
    }
    if (this.explosion[0].timer > 90) {
      this.explosion[0].y = null;
      this.explosion[0].x = null;
      this.explosion[0].timer = 0;
    } else {
      this.explosion[0].timer++;
    }
  }

  drawEnemyExplosion() {
    if (this.explosion[1].x) {
      let animationImage = this.explosionImage[1].showImage();
      let mainEnemyOffset = this.explosion[1].ismainEnemy ? 26 : 0;

      this.ctx.drawImage(
        animationImage,
        this.explosion[1].x + this.explosion[1].width / 2.1 - mainEnemyOffset,
        this.explosion[1].y + mainEnemyOffset
      );
    }
    if (this.explosion[1].timer > 90) {
      this.explosion[1].y = null;
      this.explosion[1].x = null;
      this.explosion[1].timer = 0;
    } else {
      this.explosion[1].timer++;
    }
  }

  #createEnemyWeapon() {
    enemyWeaponController(
      this.enemyWeapon,
      this.level,
      this.width,
      this.height
    );
  }

  #coinInterval() {
    this.coinTimer++;
    let coinTimeInterval =
      this.level === 3 ? Math.random() * 200 + 60 : Math.random() * 400 + 300;
    let intervalAmount = this.level === 3 ? 399 : 549;
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
    this.score += bulletsToBeAdded === 1 ? 0 : bulletsToBeAdded - 2;
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
