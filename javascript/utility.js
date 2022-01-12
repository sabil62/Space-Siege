window.onload = function () {
  let navItems = document.getElementsByClassName("nav-items");
  // let mainSection = document.getElementById("main-menu");
  let heroSection = document.getElementById("heros-section");
  let enemiesSection = document.getElementById("enemies-section");
  let bulletsSection = document.getElementById("bullets-section");
  let levelSection = document.getElementById("levels-section");
  let howToPlaySection = document.getElementById("how-to-play-section");

  let sections = [];
  // sections.push(mainSection);
  sections.push(heroSection);
  sections.push(bulletsSection);
  sections.push(enemiesSection);
  sections.push(levelSection);
  sections.push(howToPlaySection);

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
    // heroSection.style.display = "none";
    // enemiesSection.style.display = "none";
    // bulletsSection.style.display = "none";
    // levelSection.style.display = "none";
    // howToPlaySection.style.display = "none";
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function a() {
      removeEffectNav();
      removeAllCanvasElement();
      sections[i - 1].style.display = "block";
      navItems[i].style.textShadow = "2px 2px 24px rgba(240,240,240,0.7)";
      navItems[i].style.color = "rgba(210,140,101)";
    };
  }
};

{
  /* <div class="nav-items">Home</div>
<div class="nav-items">Heros</div>
<div class="nav-items">Bullets</div>
<div class="nav-items">Enemies</div>
<div class="nav-items">Levels</div>
<div class="nav-items">How To Play</div> */
}
