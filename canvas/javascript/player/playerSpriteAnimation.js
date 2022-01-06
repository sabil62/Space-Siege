import getImage from "../getImage/getImage.js";

export default class PlayerSprite {
  images = [];
  constructor(
    imageNameTemplate,
    templateNumber,
    animationSpeed,
    state,
    stopOrNot
  ) {
    for (let i = 1; i <= templateNumber; i++) {
      const image = getImage(imageNameTemplate.replace("?", i));
      this.images.push(image);
    }
    this.currentImageIndex = 0;
    this.state = state;
    this.animationSpeed = animationSpeed;
    this.animationSpeedDefault = this.animationSpeed;
    this.stopOrNot = stopOrNot;
  }
  //to stop anim
  reset() {
    this.currentImageIndex = 0;
  }
  showImage() {
    this.setImageIndex();
    return this.images[this.currentImageIndex];
  }
  isFor(state) {
    return this.state === state;
  }
  setImageIndex() {
    this.animationSpeed--;
    if (this.animationSpeed <= 0 && !this.oneTimer()) {
      this.animationSpeed = this.animationSpeedDefault;
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    }
  }
  oneTimer() {
    //if one time stop and total images length we specified is equal return true
    return this.stopOrNot && this.currentImageIndex === this.images.length - 1;
  }
}
