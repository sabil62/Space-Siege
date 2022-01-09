import EnemyWeapon from "./enemyWeapon.js";

export default function enemyWeaponController(
  eneWeaponArray,
  level,
  canvasWidth,
  canvasHeight
) {
  let randomValue = Math.floor(Math.random() * 4);
  if (level === 1) {
    if (randomValue <= 2 && randomValue >= 1) {
      eneWeaponArray.push(new EnemyWeapon(canvasWidth, canvasHeight));
    } else {
      eneWeaponArray.push(new EnemyWeapon(canvasWidth, canvasHeight));
    }
  } else if (level === 2) {
    if (randomValue <= 2 && randomValue >= 1) {
      eneWeaponArray.push(new EnemyWeapon(canvasWidth, canvasHeight));
    } else {
      eneWeaponArray.push(new EnemyWeapon(canvasWidth, canvasHeight));
    }
  } else {
    if (randomValue <= 2 && randomValue >= 1) {
      eneWeaponArray.push(new EnemyWeapon(canvasWidth, canvasHeight));
    } else {
      eneWeaponArray.push(new EnemyWeapon(canvasWidth, canvasHeight));
    }
  }
}
