let mainCharacter = document.getElementById("main-character");

let mainCharacterImage = document.getElementById("main-character-image");

document.addEventListener("keydown", (event) => {
  //   console.log(event.code);
  switch (event.code) {
    case "ArrowRight":
      mainCharacterImage.src = "../asset/images/gundam right.png";
      console.log(mainCharacter.offsetLeft);
      if (mainCharacter.offsetLeft < 1020) {
        mainCharacter.style.left = mainCharacter.offsetLeft + 6 + "px";
      }

      break;

    case "ArrowLeft":
      mainCharacterImage.src = "../asset/images/gundam left.png";
      if (mainCharacter.offsetLeft > 0) {
        mainCharacter.style.left = mainCharacter.offsetLeft - 6 + "px";
      }
      break;

    case "ArrowUp":
      mainCharacterImage.src = "../asset/images/gundam up.png";
      if (mainCharacter.offsetTop > 0) {
        mainCharacter.style.top = mainCharacter.offsetTop - 6 + "px";
      }
      break;
    case "ArrowDown":
      if (mainCharacter.offsetTop < 480) {
        mainCharacter.style.top = mainCharacter.offsetTop + 6 + "px";
      }
      break;
    // case "KeyA":
    case "Space":
      mainCharacterImage.src = "../asset/images/gundam-gun.gif";

    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "ArrowRight":
    case "ArrowLeft":
    case "ArrowDown":
    case "ArrowUp":
    case "Space":
      mainCharacterImage.src = "../asset/images/gundam.gif";
      break;

    default:
      break;
  }
});
