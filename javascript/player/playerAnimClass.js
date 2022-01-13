import PlayerSprite from "./playerSpriteAnimation.js";
import PlayerStates from "../getPlayerState/PlayerStates.js";

const playerNumber = {
  0: [
    new PlayerSprite("Gundam hover-?.png", 5, 14, PlayerStates.idle, false),
    new PlayerSprite("Gundam shoot-?.png", 3, 5, PlayerStates.fire, false),
    new PlayerSprite("Gundam up-?.png", 2, 3, PlayerStates.up, true),
    new PlayerSprite("Gundam down-?.png", 1, 5, PlayerStates.down, true),
    new PlayerSprite("Gundam right-?.png", 1, 5, PlayerStates.right, true),
    new PlayerSprite("Gundam left-?.png", 1, 5, PlayerStates.left, true),
  ],
  1: [
    new PlayerSprite("Gundam hover-?.png", 5, 14, PlayerStates.idle, false),
    new PlayerSprite("Gundam shoot-?.png", 3, 5, PlayerStates.fire, false),
    new PlayerSprite("Gundam up-?.png", 2, 3, PlayerStates.up, true),
    new PlayerSprite("Gundam down-?.png", 1, 5, PlayerStates.down, true),
    new PlayerSprite("Gundam right-?.png", 1, 5, PlayerStates.right, true),
    new PlayerSprite("Gundam left-?.png", 1, 5, PlayerStates.left, true),
  ],
};

export default playerNumber;
