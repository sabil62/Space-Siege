import PlayerStates from "../getPlayerState/PlayerStates.js";
import PlayerSprite from "./playerSpriteAnimation.js";

export default class Player {
  constructor() {
    this.state = PlayerStates.idle;
    this.createAnimation();
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
  draw(ctx) {
    this.setPlayerState();
    let animation = this.animationState.find((c) =>
      //returns the class which we have give current state
      c.animationForState(this.state)
    );
    //here in up suppose this.idle is the state then in
    //createanimation() we have defined this.idle = new PlayerSprite(), so this.idle has defined the object
    //so below we are doing this.idle.showImage() equi to PlayerSprite().showImage()
    let playerImageType = animation.showImage();
    let x = 300;
    let y = 300;
    ctx.drawImage(playerImageType, x, y);
  }
  setPlayerState() {
    if (this.upPressed) {
      this.state = PlayerStates.up;
    } else if (this.downPressed) {
      this.state = PlayerStates.down;
    } else if (this.leftPressed) {
      this.state = PlayerStates.left;
    } else if (this.rightPressed) {
      this.state = PlayerStates.right;
    } else if (this.spacePressed) {
      this.state = PlayerStates.fire;
    } else {
      this.state = PlayerStates.idle;
    }
  }
  createAnimation() {
    //   PlayerSprite((imageNameTemplate, templateTotalNumber, animationSpeed,state,stopOrNot ))
    this.idle = new PlayerSprite(
      "Gundam hover-?.png",
      1,
      5,
      PlayerStates.idle,
      false
    );
    this.fire = new PlayerSprite(
      "Gundam shoot-?.png",
      3,
      5,
      PlayerStates.fire,
      false
    );
    //true here means the animation will stop at last frame
    this.up = new PlayerSprite("Gundam up-?.png", 2, 3, PlayerStates.up, true);

    this.down = new PlayerSprite(
      "Gundam down-?.png",
      1,
      5,
      PlayerStates.down,
      false
    );
    this.right = new PlayerSprite(
      "Gundam right-?.png",
      1,
      5,
      PlayerStates.right,
      false
    );
    this.left = new PlayerSprite(
      "Gundam left-?.png",
      1,
      5,
      PlayerStates.left,
      false
    );
    this.animationState = [
      this.idle,
      this.up,
      this.down,
      this.left,
      this.right,
      this.fire,
    ];
  }
  keydown = (event) => {
    switch (event.code) {
      case "ArrowUp":
        this.upPressed = true;
        // console.log("up");
        break;
      case "ArrowDown":
        this.downPressed = true;
        break;
      case "ArrowLeft":
        this.leftPressed = true;
        break;
      case "ArrowRight":
        this.rightPressed = true;
        break;
      case "Space":
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
