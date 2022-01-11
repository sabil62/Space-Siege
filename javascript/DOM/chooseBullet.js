let chooseBullet = document.getElementsByClassName("chooseBullet");

export default function chooseBullets(gameObj) {
  for (let i = 0; i < chooseBullet.length; i++) {
    chooseBullet[i].onclick = () => {
      let im = i + 1;
      let coinCountDecrease = 0;

      if (!gameObj.bulletTypeUnlocked[i]) {
        switch (im) {
          case 2:
            coinCountDecrease = 15;
            break;
          case 3:
            coinCountDecrease = 40;
            break;
          case 4:
            coinCountDecrease = 60;
            break;
        }
      }

      if (gameObj.coinCount >= coinCountDecrease) {
        gameObj.decreaseCoinCount(coinCountDecrease);
        gameObj.bulletTypeUnlock(i);
        setOriginalImage();
        gameObj.player.updateBulletType(im); //do .player.updateBullet()
        gameObj.updateBulletType(im);
        chooseBullet[i].src = "./assets/UI/choose-" + im + "-hover.png";
      }
    };
  }
}

function setOriginalImage() {
  for (let i = 0; i < chooseBullet.length; i++) {
    let im = i + 1;
    chooseBullet[i].src = "./assets/UI/choose-" + im + ".png";
  }
}
