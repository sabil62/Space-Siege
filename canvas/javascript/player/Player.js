import PlayerStates from "../getPlayerState/PlayerStates.js";
import PlayerSprite from "./playerSpriteAnimation.js";

export default class Player {
  constructor() {
    this.state = PlayerStates.idle;
    this.createAnimation();
  }
  draw(ctx) {
    this.setPlayerState();
    let animation = this.animationState.find((c) => c.isFor(this.state));
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
    } else if (this.firePressed) {
      this.state = PlayerStates.fire;
    } else {
      this.state = PlayerStates.idle;
    }
  }
  createAnimation() {
    this.idleAnimation = new PlayerSprite(
      "Gundam hover-?.png",
      1,
      5,
      PlayerStates.idle,
      true
    );
    this.animationState = [
      this.idleAnimation,
      this.up,
      this.down,
      this.left,
      this.right,
      this.fireAnimation,
    ];
  }
}
