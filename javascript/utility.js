window.onload = function () {
  let navItems = document.getElementsByClassName("nav-items");
  let heroSection = document.getElementById("heros-section");
  let enemiesSection = document.getElementById("enemies-section");
  let bulletsSection = document.getElementById("bullets-section");
  let levelSection = document.getElementById("levels-section");
  let howToPlaySection = document.getElementById("how-to-play-section");
  let playButton = document.getElementById("play-button");
  // let changeImage = documemt.querySelectorAll(".bullets-section");
  let heroImages = document.querySelectorAll(".hero-circle-box img");
  let heroCircle = document.getElementsByClassName("hero-circle-box");
  let img = document.getElementById("big-image");

  let sections = [
    heroSection,
    bulletsSection,
    enemiesSection,
    levelSection,
    howToPlaySection,
  ];

  navItems[0].style.textShadow = "2px 2px 24px rgba(240,240,240,0.7)";
  navItems[0].style.color = "rgba(210,140,101)";

  function removeEffectNav() {
    //her i=1 bcoz ignore mainsection
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.textShadow = "none";
      navItems[i].style.color = "white";
    }
  }

  removeAllCanvasElement();

  function removeAllCanvasElement() {
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function a() {
      removeEffectNav();
      removeAllCanvasElement();
      if (i !== 0) {
        sections[i - 1].style.display = "block";
        playButton.style.display = "none";
      } else {
        playButton.style.display = "block";
      }

      navItems[i].style.textShadow = "2px 2px 24px rgba(240,240,240,0.7)";
      navItems[i].style.color = "rgba(210,140,101)";
    };
  }

  function removeHeroBorder() {
    console.log("done");
    for (let i = 0; i < heroCircle.length; i++) {
      heroCircle[i].style.border = "1px solid rgba(105,105,105,0.52)";
    }
  }

  for (let i = 0; i < heroImages.length; i++) {
    heroImages[i].onclick = (e) => {
      removeHeroBorder();
      heroCircle[i].style.border = "1px solid rgba(248, 250, 153, 0.8)";
      if (i < 7) {
        img.src = "./assets/select players/" + i + ".png";
      } else {
        img.src =
          "./assets/select players/" + Math.ceil(Math.random() * 7) + ".png";
      }
    };
  }
};
