import { getBulletImage } from "../getImage/getImage.js";

export default class BulletSprite {
  images = [];
  constructor(imageNameTemplate, templateTotalNumber, animationSpeed) {
    //looping total number of images for given template(for animation)
    for (let i = 1; i <= templateTotalNumber; i++) {
      const image = getBulletImage(imageNameTemplate.replace("?", i));
      this.images.push(image);
    }
    this.currentImageIndex = 0;

    this.animationSpeed = animationSpeed;
    this.animationSpeedDefault = this.animationSpeed;
  }

  //to stop anim
  reset() {
    this.currentImageIndex = 0;
  }

  showImage() {
    this.setImageIndex();
    return this.images[this.currentImageIndex];
  }

  setImageIndex() {
    this.animationSpeed--;
    console.log(this.animationSpeed);
    //for animation effect
    if (this.animationSpeed <= 0) {
      this.animationSpeed = this.animationSpeedDefault;
      this.currentImageIndex++;
      console.log(this.currentImageIndex);
      //for looping
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    }
  }
}
