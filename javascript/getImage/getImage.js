export default function getImage(imageName) {
  let image = new Image();
  image.src = "../assets/images/" + imageName;
  return image;
}

export const getBulletImage = (imageName) => {
  let image = new Image();
  image.src = "../assets/bullet/" + imageName;
  return image;
};

export const getEnemyImage = (imageName) => {
  let image = new Image();
  image.src = "../assets/enemy/" + imageName;
  return image;
};
