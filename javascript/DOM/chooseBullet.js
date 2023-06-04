import audios from "./sounds.js";

let chooseBullet = document.getElementsByClassName("chooseBullet");

//blureed
chooseBullet[1].style.filter = "opacity(15%)";
chooseBullet[2].style.filter = "opacity(10%)";
chooseBullet[3].style.filter = "opacity(10%)";

export default function chooseBullets(gameObj) {
  for (let i = 0; i < chooseBullet.length; i++) {
    let im = i + 1;
    let coinCountDecrease = 0;

    if (!gameObj.bulletTypeUnlocked[i]) {
      switch (im) {
        case 2:
          coinCountDecrease = 5;
          break;
        case 3:
          coinCountDecrease = 10;
          break;
        case 4:
          coinCountDecrease = 15;
          break;
      }
    }

    if (gameObj.coinCount >= coinCountDecrease) {
      chooseBullet[i].style.filter = "opacity(100%)";
      chooseBullet[i].onclick = () => {
        audios[21].play();
        audios[21].volume = 0.3;
        gameObj.decreaseCoinCount(coinCountDecrease);
        gameObj.bulletTypeUnlock(i);
        setOriginalImage();
        gameObj.player.updateBulletType(im); //do .player.updateBullet()
        gameObj.updateBulletType(im);
        chooseBullet[i].src = "./assets/UI/choose-" + im + "-hover.png";
      };
    } else {
      chooseBullet[i].style.filter = "opacity(10%)";
    }
  }
}

function setOriginalImage() {
  for (let i = 0; i < chooseBullet.length; i++) {
    let im = i + 1;
    chooseBullet[i].src = "./assets/UI/choose-" + im + ".png";
  }
}
