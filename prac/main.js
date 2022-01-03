let mainCharacter = document.getElementById("main-character");

let mainCharacterImage = document.getElementById("main-character-image");

document.addEventListener("keydown", (event) => {
  console.log(event.code);
  switch (event.code) {
    case "ArrowRight":
      mainCharacterImage.src = "../asset/images/gundam right.png";
      mainCharacter.style.left = mainCharacter.offsetLeft + 6 + "px";

      break;

    case "ArrowLeft":
      mainCharacterImage.src = "../asset/images/gundam left.png";
      mainCharacter.style.left = mainCharacter.offsetLeft - 6 + "px";
      break;

    case "ArrowUp":
      mainCharacterImage.src = "../asset/images/gundam up.png";
      mainCharacter.style.top = mainCharacter.offsetTop - 6 + "px";
      break;
    case "ArrowDown":
      mainCharacter.style.top = mainCharacter.offsetTop + 6 + "px";
      break;
    // case "KeyA":
    case "Space":
      mainCharacterImage.src = "../asset/images/gundam-gun.gif";

    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  mainCharacterImage.src = "../asset/images/gundam.gif";
});
