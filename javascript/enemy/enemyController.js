import Enemy1 from "./enemy1.js";
import Enemy2 from "./enemy2.js";
import Enemy3 from "./enemy3.js";
import Enemy4 from "./enemy4.js";

export default function enemyController(
  enemyArray,
  level,
  enemyBulletController
) {
  let randomNumber = Math.floor(Math.random() * 20);
  if (level === 1) {
    if (randomNumber <= 5 && randomNumber >= 1) {
      enemyArray.push(new Enemy2(level));
    } else if (randomNumber > 5 && randomNumber <= 8) {
      enemyArray.push(new Enemy3(level));
    } else if (randomNumber === 9) {
      enemyArray.push(new Enemy4(level, enemyBulletController));
    } else {
      enemyArray.push(new Enemy1(level));
    }
  } else if (level === 2) {
    if (randomNumber <= 6 && randomNumber >= 1) {
      enemyArray.push(new Enemy2(level));
    } else if (randomNumber > 6 && randomNumber <= 12) {
      enemyArray.push(new Enemy3(level));
    } else if (randomNumber > 12 && randomNumber <= 15) {
      enemyArray.push(new Enemy4(level, enemyBulletController));
    } else {
      enemyArray.push(new Enemy1(level));
    }
  } else if (level === 3) {
    if (randomNumber <= 3 && randomNumber >= 0) {
      enemyArray.push(new Enemy2(level));
    } else if (randomNumber > 3 && randomNumber <= 7) {
      enemyArray.push(new Enemy3(level));
    } else if (randomNumber > 8 && randomNumber <= 14) {
      enemyArray.push(new Enemy4(level, enemyBulletController));
    } else {
      enemyArray.push(new Enemy1(level));
    }
  } else {
    switch (randomNumber) {
      case 1:
        enemyArray.push(new Enemy2(level));
        break;

      case 4:
        enemyArray.push(new Enemy3(level));
        break;

      case 6:
        enemyArray.push(new Enemy1(level));
        break;

      default:
        enemyArray.push(new Enemy4(level, enemyBulletController));
        break;
    }
  }
}
