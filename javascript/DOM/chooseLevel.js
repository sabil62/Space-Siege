let levelBtn = document.getElementsByClassName("btn-level");

//-------remove all class levelbtn----------------
export default function removeActiveBtn() {
  for (let i = 0; i < levelBtn.length; i++) {
    if (levelBtn[i].classList.contains("btn-level-active")) {
      levelBtn[i].classList.remove("btn-level-active");
    }
  }
}
