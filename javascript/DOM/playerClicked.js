let heroCircle = document.getElementsByClassName("hero-circle-box");
let img = document.getElementById("big-image");

export const playerClicked = (i) => {
  removeHeroBorder();
  heroCircle[i].classList.add("hero-box-active");
  if (i < 7) {
    img.src = "./assets/select players/" + i + ".png";
  } else {
    img.src =
      "./assets/select players/" + Math.ceil(Math.random() * 7) + ".png";
  }
};

function removeHeroBorder() {
  for (let i = 0; i < heroCircle.length; i++) {
    if (heroCircle[i].classList.contains("hero-box-active")) {
      heroCircle[i].classList.remove("hero-box-active");
    }
  }
}
