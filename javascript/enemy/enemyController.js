import Enemy1 from "./enemy1.js";
import Enemy2 from "./enemy2.js";
import Enemy3 from "./enemy3.js";
import Enemy4 from "./enemy4.js";

export default function enemyController(enemyArray, level) {
  let randomNumber = Math.floor(Math.random() * 20);
  if (level === 1) {
    switch (randomNumber) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        enemyArray.push(new Enemy2(level));
        break;
      case 5:
      case 6:
      case 7:
      case 9:
        enemyArray.push(new Enemy3(level));
        break;
      case 8:
        enemyArray.push(new Enemy4(level));
        break;

      default:
        enemyArray.push(new Enemy1(level));
        break;
    }
  } else if (level === 2) {
    switch (randomNumber) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        enemyArray.push(new Enemy2());
        break;

      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 15:
        enemyArray.push(new Enemy3());
        break;
      case 12:
      case 13:
      case 14:
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
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        enemyArray.push(new Enemy3());
        break;
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
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
