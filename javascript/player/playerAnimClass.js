import PlayerSprite from "./playerSpriteAnimation.js";
import PlayerStates from "../getPlayerState/PlayerStates.js";

const playerNumber = {
  0: [
    new PlayerSprite("gundam hover-?.png", 5, 14, PlayerStates.idle, false),
    new PlayerSprite("gundam shoot-?.png", 3, 5, PlayerStates.fire, false),
    new PlayerSprite("gundam up-?.png", 2, 3, PlayerStates.up, true),
    new PlayerSprite("gundam down-?.png", 1, 5, PlayerStates.down, true),
    new PlayerSprite("gundam right-?.png", 1, 5, PlayerStates.right, true),
    new PlayerSprite("gundam left-?.png", 1, 5, PlayerStates.left, true),
  ],
  1: [
    new PlayerSprite("pundam hover-?.png", 1, 1, PlayerStates.idle, true),
    new PlayerSprite("pundam fire-?.png", 1, 1, PlayerStates.fire, true),
    new PlayerSprite("pundam up-?.png", 1, 1, PlayerStates.up, true),
    new PlayerSprite("pundam down-?.png", 1, 1, PlayerStates.down, true),
    new PlayerSprite("pundam right-?.png", 1, 1, PlayerStates.right, true),
    new PlayerSprite("pundam left-?.png", 1, 1, PlayerStates.left, true),
  ],
};

export default playerNumber;
