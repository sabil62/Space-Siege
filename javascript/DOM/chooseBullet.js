let chooseBullet = document.getElementsByClassName("chooseBullet");

export default function chooseBullets(gameObj) {
  for (let i = 0; i < chooseBullet.length; i++) {
    chooseBullet[i].onclick = () => {
      setOriginalImage();
      //game.setBulletType(i) <= understand (game is new Game())
      let im = i + 1;
      // console.log()
      gameObj.player.updateBulletType(im); //do .player.updateBullet()
      gameObj.updateBulletType(im);
      chooseBullet[i].src = "./assets/UI/choose-" + im + "-hover.png";
    };
  }
}

function setOriginalImage() {
  for (let i = 0; i < chooseBullet.length; i++) {
    let im = i + 1;
    chooseBullet[i].src = "./assets/UI/choose-" + im + ".png";
  }
}
