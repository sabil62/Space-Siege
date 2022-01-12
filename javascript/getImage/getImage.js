export default function getImage(imageName, pathToRoot = "../../") {
  let image = new Image();
  // `${pathToRoot}assests/` + imageName
  image.src = `${pathToRoot}assets/images/` + imageName;
  return image;
}

export const getBulletImage = (imageName, pathToRoot = "../../") => {
  let image = new Image();
  image.src = `${pathToRoot}assets/bullet/` + imageName;
  return image;
};

export const getEnemyImage = (imageName, pathToRoot = "../../") => {
  let image = new Image();
  image.src = `${pathToRoot}assets/enemy/` + imageName;
  return image;
};

export const getCoinImage = (imageName, pathToRoot = "../../") => {
  let image = new Image();
  image.src = `${pathToRoot}assets/coins/` + imageName;
  return image;
};

export const getEnemyBulletImage = (imageName, pathToRoot = "../../") => {
  let image = new Image();
  image.src = `${pathToRoot}assets/enemyWeapons/` + imageName;
  return image;
};

export const getExplosion = (imageName, pathToRoot = "../../") => {
  let image = new Image();
  image.src = `${pathToRoot}assets/explosion/` + imageName;
  return image;
};
