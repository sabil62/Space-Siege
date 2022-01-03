let mainCharacter = document.getElementById("main-character");

let mainCharacterImage = document.getElementById("main-character-image");

document.addEventListener("keydown", (event) => {
  console.log(event.code);
  switch (event.code) {
    case "ArrowRight":
      mainCharacterImage.src = "../asset/images/gundam right.png";

      break;

    case "ArrowLeft":
      mainCharacterImage.src = "../asset/images/gundam left.png";
      mainCharacter.style.left = 400 + "px";
      break;

    case "ArrowUp":
      mainCharacterImage.src = "../asset/images/gundam up.png";
      break;
    case "ArrowDown":
      mainCharacterImage.src = "../asset/images/gundam up.png";
      break;
    // case "KeyA":
    case "Space":
      mainCharacterImage.src = "../asset/images/gundam gunshoot.png";

    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  mainCharacterImage.src = "../asset/images/gundam.gif";
});
