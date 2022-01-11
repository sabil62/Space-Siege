let levelBtn = document.getElementsByClassName("btn-level");

export default function onlevelClicked() {
  let levelClick;
  for (let i = 0; i < levelBtn.length; i++) {
    levelBtn[i].onclick = (e) => {
      levelClick = i;
      removeActiveBtn();
      levelBtn[i].classList.add("btn-level-active");
    };
  }
  return levelClick;
}

//-------remove all class levelbtn----------------
function removeActiveBtn() {
  for (let i = 0; i < levelBtn.length; i++) {
    if (levelBtn[i].classList.contains("btn-level-active")) {
      levelBtn[i].classList.remove("btn-level-active");
    }
  }
}
