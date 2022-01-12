let start = document.getElementsByClassName("start")[0];
let pause = document.getElementsByClassName("pause")[0];

let dialogueBox = document.getElementById("dialogue-box");
let resume = document.getElementById("resume");
let restart = document.getElementById("restart");

//display none
start.style.display = "none";

export default function startGame(gameObj, countInterval, frame) {
  let intervalId = setInterval(() => {
    // gameLoop();
    gameObj.draw();
  }, 1000 / frame);

  pause.onclick = () => {
    clearInterval(intervalId);
    // clearInterval(countInterval);
    start.style.display = "block";
    pause.style.display = "none";
    dialogueBox.style.display = "block";
  };

  start.onclick = () => {
    intervalId = setInterval(() => {
      gameObj.draw();
    }, 1000 / frame);
    start.style.display = "none";
    pause.style.display = "block";
    dialogueBox.style.display = "none";
    // startCountOfAll();
  };
}
