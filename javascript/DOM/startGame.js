let start = document.getElementsByClassName("start")[0];
let pause = document.getElementsByClassName("pause")[0];

let dialogueBox = document.getElementById("dialogue-box");
let resume = document.getElementById("resume");
let restart = document.getElementById("restart");

//display none
start.style.display = "none";
dialogueBox.style.display = "none";

let intervalId;
export const intervalID = () => {
  return intervalId;
};

export default function startGame(gameObj, frame, playerSelected) {
  if (gameObj) {
    intervalId = intervals(gameObj, frame);
    gameObj.playerNumber = playerSelected;
    console.log(gameObj.playerNumber);

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
  }
}

function startOrResume() {
  start.style.display = "none";
  pause.style.display = "block";
  dialogueBox.style.display = "none";
}

function intervals(gameObj, frame) {
  return setInterval(() => {
    gameObj.draw();
    // console.log("start Game");
  }, 1000 / frame);
}
