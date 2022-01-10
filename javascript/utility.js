window.onload = function () {
  let navItems = document.getElementsByClassName("nav-items");
  navItems[0].style.textShadow = "2px 2px 24px rgba(240,240,240,0.7)";
  navItems[0].style.color = "rgba(210,140,101)";

  function removeEffectNav() {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.textShadow = "none";
      navItems[i].style.color = "white";
    }
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function a() {
      removeEffectNav();
      navItems[i].style.textShadow = "2px 2px 24px rgba(240,240,240,0.7)";
      navItems[i].style.color = "rgba(210,140,101)";
    };
  }

  // ------------for choose bullet -----------------
  let chooseBullet = document.getElementsByClassName("chooseBullet");
  // let bulletCircle2 = document.getElementById("bullet2");
  // let bulletCircle3 = document.getElementById("bullet3");
  // let bulletCircle4 = document.getElementById("bullet4");
  // let bulletCircle5 = document.getElementById("bullet5");

  function setOriginalImage() {
    chooseBullet[0].src = "./assets/UI/choose-1.png";
    chooseBullet[1].src = "./assets/UI/choose-2.png";
    chooseBullet[2].src = "./assets/UI/choose-3.png";
    chooseBullet[3].src = "./assets/UI/choose-4.png";
    chooseBullet[4].src = "./assets/UI/choose-5.png";
  }

  for (let i = 0; i < chooseBullet.length; i++) {
    chooseBullet[i].onclick = () => {
      setOriginalImage();
      //game.setBulletType(i) <= understand (game is new Game())
      let im = i + 1;
      chooseBullet[i].src = "./assets/UI/choose-" + im + "-hover.png";
    };
  }
};
