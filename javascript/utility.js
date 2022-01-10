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

  function setOriginalImage() {
    for (let i = 0; i < chooseBullet.length; i++) {
      let im = i + 1;
      chooseBullet[i].src = "./assets/UI/choose-" + im + ".png";
    }
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
