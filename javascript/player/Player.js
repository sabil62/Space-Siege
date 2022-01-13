import audios from "../DOM/sounds.js";
import PlayerStates from "../getPlayerState/PlayerStates.js";
import playerNumber from "./playerAnimClass.js";

export default class Player {
  constructor(x, y, bulletController) {
    this.state = PlayerStates.idle;
    this.x = x;
    this.y = y;
    this.playerNumber = 1;
    this.speed = this.playerNumber === 1 ? 5 : 10;
    this.canvasHeight = y * 2;
    this.canvasWidth = x + 250;

    this.width = 172;
    this.height = 110;

    this.bulletController = bulletController;

    this.playerHealth = 42;

    this.bulletType = 1;

    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
    this.createAnimation();
  }

  draw(ctx) {
    // console.log(this.playerNumber);
    this.#setPlayerStateAndAction();
    let animation = this.animationState.find((c) =>
      //returns the class which we have give current state
      c.animationForState(this.state)
    );
    //here in up suppose this.idle is the state then in
    //createanimation() we have defined this.idle = new PlayerSprite(), so this.idle has defined the object
    //so below we are doing this.idle.showImage() equi to PlayerSprite().showImage()
    let playerImageType = animation.showImage();

    ctx.drawImage(playerImageType, this.x, this.y);
    ctx.font = "13px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Health: " + this.playerHealth, 260, 20);
    //shoot is present in setPlayerStateAndAction
    // this.shootBullet();
  }
  updateSpeed(playerNumb) {
    this.speed = playerNumb === 1 ? 5 : 7;
  }

  #setPlayerStateAndAction() {
    if (this.upPressed) {
      this.state = PlayerStates.up;
      if (this.y >= 4) {
        this.y -= this.speed;
      }
    } else if (this.downPressed) {
      this.state = PlayerStates.down;
      if (this.y <= this.canvasHeight - 105) {
        this.y += this.speed;
      }
    } else if (this.leftPressed) {
      this.state = PlayerStates.left;
      if (this.x >= 4) {
        this.x -= this.speed;
      }
    } else if (this.rightPressed) {
      this.state = PlayerStates.right;
      if (this.x <= this.canvasWidth - 125) {
        this.x += this.speed;
      }
    } else if (this.spacePressed) {
      this.state = PlayerStates.fire;
      this.shootBullet();
    } else {
      this.state = PlayerStates.idle;
    }
  }

  decreaseHealth(healthDeductPoint) {
    this.playerHealth -= healthDeductPoint;
  }

  increaseHealth(num) {
    this.playerHealth += num;
  }

  shootBullet() {
    audios[8].pause();
    audios[8].play();
    audios[8].volume = 0.3;
    clearInterval(this.playerIntervalId);
    let xcordBullet = this.x - 32;
    let ycordBullet;
    if (this.bulletType === 1 || this.bulletType === 2) {
      ycordBullet = this.y + 28;
    } else {
      ycordBullet = this.y + 10;
    }
    this.bulletController.shoot(xcordBullet, ycordBullet, this.bulletType);
  }

  createAnimation() {
    //   PlayerSprite((imageNameTemplate, templateTotalNumber, animationSpeed,state,stopOrNot ))
    this.idle = playerNumber[this.playerNumber - 1][0];
    this.fire = playerNumber[this.playerNumber - 1][1];
    this.up = playerNumber[this.playerNumber - 1][2];
    this.down = playerNumber[this.playerNumber - 1][3];
    this.right = playerNumber[this.playerNumber - 1][4];
    this.left = playerNumber[this.playerNumber - 1][5];

    this.animationState = [
      this.idle,
      this.up,
      this.down,
      this.left,
      this.right,
      this.fire,
    ];
  }

  coinCollision(coin) {
    if (
      this.x + 40 < coin.x + coin.width &&
      this.x + this.width > coin.x &&
      this.y + 20 < coin.y + coin.height &&
      this.y + this.height > coin.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  enemyBulletCollision(bullet) {
    if (
      this.x + 40 < bullet.x + bullet.width &&
      this.x + this.width > bullet.x &&
      this.y + 20 < bullet.y + bullet.height &&
      this.y + this.height > bullet.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  updateBulletType(type) {
    this.bulletType = type;
  }

  keydown = (event) => {
    switch (event.code) {
      case "ArrowUp":
        event.preventDefault();
        this.upPressed = true;
        // console.log("up");
        break;
      case "ArrowDown":
        event.preventDefault();
        this.downPressed = true;
        break;
      case "ArrowLeft":
        event.preventDefault();
        this.leftPressed = true;
        break;
      case "ArrowRight":
        event.preventDefault();
        this.rightPressed = true;
        break;
      case "Space":
        event.preventDefault();
        this.spacePressed = true;
        break;

      default:
        break;
    }
  };

  keyup = (event) => {
    switch (event.code) {
      case "ArrowUp":
        this.upPressed = false;
        break;
      case "ArrowDown":
        this.downPressed = false;
        break;
      case "ArrowLeft":
        this.leftPressed = false;
        break;
      case "ArrowRight":
        this.rightPressed = false;
        break;
      case "Space":
        this.spacePressed = false;
        break;

      default:
        break;
    }
  };
}
