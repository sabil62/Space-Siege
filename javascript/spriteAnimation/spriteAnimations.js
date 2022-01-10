import { getEnemyBulletImage } from "../getImage/getImage.js";
import { getExplosion } from "../getImage/getImage.js";
import { getCoinImage } from "../getImage/getImage.js";
import { getEnemyImage } from "../getImage/getImage.js";
import { getBulletImage } from "../getImage/getImage.js";

export default class SpriteAnimations {
  images = [];

  constructor(templateName, totalImages, animSpeed, animationType, oneTimer) {
    for (let i = 1; i <= totalImages; i++) {
      let getImage;
      if (animationType == "enemyBullet") {
        getImage = getEnemyBulletImage(templateName.replace("?", i));
      }
      if (animationType == "explosion") {
        getImage = getExplosion(templateName.replace("?", i));
      }
      if (animationType == "coin") {
        getImage = getCoinImage(templateName.replace("?", i));
      }
      if (animationType == "enemy") {
        getImage = getEnemyImage(templateName.replace("?", i));
      }
      if (animationType == "bullet") {
        getImage = getBulletImage(templateName.replace("?".i));
      }
      this.images.push(getImage);
    }
    this.animationSpeed = animSpeed;
    this.animationSpeedDefault = this.animationSpeed;
    this.oneTimeAnimate = oneTimer;

    this.currentImageIndex = 0;
  }

  showImage() {
    this.#setImageIndex();
    return this.images[this.currentImageIndex];
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
