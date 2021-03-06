window.onload = function () {
  let navItems = document.getElementsByClassName("nav-items");
  let heroSection = document.getElementById("heros-section");
  let enemiesSection = document.getElementById("enemies-section");
  let bulletsSection = document.getElementById("bullets-section");
  let levelSection = document.getElementById("levels-section");
  let howToPlaySection = document.getElementById("how-to-play-section");
  let playButton = document.getElementById("play-button");
  // let changeImage = documemt.querySelectorAll(".bullets-section");
  let goAudio = new Audio();
  goAudio.src = "../assets/sounds/z modern tech.wav";

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
    navItems[i].onclick = () => {
      goAudio.pause();
      goAudio.play();
      goAudio.volume = 0.5;
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
};
