import { getCoinImage } from "../getImage/getImage.js";

export default class CoinSprite {
  images = [];

  constructor(templateName, totalImages, animationInterval, oneTimer) {
    this.templateName = templateName;
    this.totalImages = totalImages;
    this.animationInterval = animationInterval;
    this.defaultAnimInterval = this.animationInterval;
    this.oneTimer = oneTimer;

    for (let i = 1; i <= this.totalImages; i++) {
      let image = getCoinImage(this.templateName.replace("?", i));
      this.images.push(image);
    }
    this.currentImageIndex = 0;
  }

  showImage() {
    this.setImageIndex();
    return this.images[this.currentImageIndex];
  }

  setImageIndex() {
    if (this.animationInterval <= 0 && !this.isOneTimer()) {
      this.currentImageIndex++;
      this.animationInterval = this.defaultAnimInterval;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    } else {
      this.animationInterval--;
    }
  }
  isOneTimer() {
    return this.oneTimer && this.currentImageIndex === this.images.length - 1;
  }
}
