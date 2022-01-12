import getImage from "../getImage/getImage.js";
let pathToRoot = "../../";

export default class PlayerSprite {
  images = [];
  constructor(
    imageNameTemplate,
    templateTotalNumber,
    animationSpeed,
    state,
    oneTimeAnimate
  ) {
    //looping total number of images for given template(for animation)
    for (let i = 1; i <= templateTotalNumber; i++) {
      const image = getImage(imageNameTemplate.replace("?", i), pathToRoot);
      this.images.push(image);
    }
    this.currentImageIndex = 0;
    this.state = state;
    this.animationSpeed = animationSpeed;
    this.animationSpeedDefault = this.animationSpeed;
    //not Loop or Loop
    this.oneTimeAnimate = oneTimeAnimate;
  }
  //to stop anim
  reset() {
    this.currentImageIndex = 0;
  }
  showImage() {
    this.#setImageIndex();
    return this.images[this.currentImageIndex];
  }
  animationForState(state) {
    return this.state === state;
  }
  #setImageIndex() {
    this.animationSpeed--;
    //for animation effect
    if (this.animationSpeed <= 0 && !this.oneTimer()) {
      this.animationSpeed = this.animationSpeedDefault;
      this.currentImageIndex++;
      //for looping
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    }
  }
  oneTimer() {
    //if one time stop and total images length we specified is equal return true
    return (
      this.oneTimeAnimate && this.currentImageIndex === this.images.length - 1
    );
  }
}
