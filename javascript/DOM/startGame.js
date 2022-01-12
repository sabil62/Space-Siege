let start = document.getElementsByClassName("start")[0];
let pause = document.getElementsByClassName("pause")[0];

let dialogueBox = document.getElementById("dialogue-box");
let resume = document.getElementById("resume");
let restart = document.getElementById("restart");
let travelMainMenu = document.getElementById("travelMainMenu");

//display none
start.style.display = "none";
dialogueBox.style.display = "none";

export default function startGame(gameObj, frame, mainMenu, playButton) {
  let intervalId = intervals(gameObj, frame);

  pause.onclick = () => {
    clearInterval(intervalId);
    start.style.display = "block";
    pause.style.display = "none";
    dialogueBox.style.display = "block";
  };

  start.onclick = () => {
    intervalId = intervals(gameObj, frame);
    startOrResume();
  };

  resume.onclick = () => {
    intervalId = intervals(gameObj, frame);
    startOrResume();
  };

  restart.onclick = () => {
    gameObj.reset();
    intervalId = intervals(gameObj, frame);
    startOrResume();
  };

  travelMainMenu.onclick = () => {
    mainMenu.style.display = "block";
    dialogueBox.style.display = "none";
    playButton.style.display = "block";
  };
}

function startOrResume() {
  start.style.display = "none";
  pause.style.display = "block";
  dialogueBox.style.display = "none";
}

function intervals(gameObj, frame) {
  return setInterval(() => {
    gameObj.draw();
  }, 1000 / frame);
}
