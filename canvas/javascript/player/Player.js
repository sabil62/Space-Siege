import PlayerStates from "../getPlayerState/PlayerStates";

export default class Player {
  constructor() {
    this.state = PlayerStates.idle;
    this.animationState = [
      this.idleAnimation,
      this.up,
      this.down,
      this.left,
      this.right,
      this.fireAnimation,
    ];
  }
  draw(ctx) {
    this.setPlayerState();
    let x = 300;
    let y = 300;
    ctx.drawImage(image, x, y);
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
}
