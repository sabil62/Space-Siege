import Enemy1 from "./enemy1.js";
import Enemy2 from "./enemy2.js";
import Enemy3 from "./enemy3.js";
import Enemy4 from "./enemy4.js";

export default function levelOfEnemies(enemyArray, level) {
  let randomNumber = Math.floor(Math.random() * 10);
  if (level === 1) {
    switch (randomNumber) {
      case 1:
      case 2:
        enemyArray.push(new Enemy2());
        break;
      case 4:
      case 5:
        enemyArray.push(new Enemy3());
        break;
      case 6:
        enemyArray.push(new Enemy4());
        break;

      default:
        enemyArray.push(new Enemy1());
        break;
    }
  } else if (level === 2) {
    switch (randomNumber) {
      case 1:
      case 2:
        enemyArray.push(new Enemy2());
        break;
      case 4:
      case 5:
        enemyArray.push(new Enemy3());
        break;
      case 6:
        enemyArray.push(new Enemy4());
        break;

      default:
        enemyArray.push(new Enemy1());
        break;
    }
  } else if (level === 3) {
    switch (randomNumber) {
      case 1:
      case 2:
        enemyArray.push(new Enemy2());
        break;
      case 4:
      case 5:
        enemyArray.push(new Enemy3());
        break;
      case 6:
        enemyArray.push(new Enemy4());
        break;

      default:
        enemyArray.push(new Enemy1());
        break;
    }
  } else {
    switch (randomNumber) {
      case 1:
      case 2:
        enemyArray.push(new Enemy2());
        break;
      case 4:
      case 5:
        enemyArray.push(new Enemy3());
        break;
      case 6:
        enemyArray.push(new Enemy4());
        break;

      default:
        enemyArray.push(new Enemy1());
        break;
    }
  }
}
