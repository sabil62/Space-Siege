import { getEnemyImage } from "../getImage/getImage.js";

export default class EnemySpriteAnimation {
  images = [];

  constructor(imageTemplateName, totalImagesInTemplate, animSpeed) {
    for (let i = 1; i <= totalImagesInTemplate; i++) {
      //   this.images.push(getEnemyImage(this.imageTemplateName.replace("?", i)));
      let image = getEnemyImage(imageTemplateName.replace("?", i));
      this.images.push(image);
    }
    this.currentImageIndex = 0;
    this.animSpeed = animSpeed;
    this.animSpeedDefault = this.animSpeed;
  }

  showImage() {
    this.setImageIndex();
    return this.images[this.currentImageIndex];
  }

  setImageIndex() {
    this.animSpeed--;
    if (this.animSpeed <= 0) {
      this.animSpeed = this.animSpeedDefault;
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    }
  }
}
