export default function getImage(imageName) {
  let image = new Image();
  image.src = "../assets/images/" + imageName;
  return image;
}
