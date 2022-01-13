import audios from "../DOM/sounds.js";

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
    setTimeout(() => {
      if (gameObj.level === 1) {
        audios[11].play();
        audios[11].volume = 0.2;
      } else if (gameObj.level === 2) {
        audios[12].play();
        audios[12].volume = 0.2;
      } else {
        audios[13].play();
        audios[13].volume = 0.2;
      }
    }, 450);

    intervalId = intervals(gameObj, frame);
    gameObj.player.playerNumber = playerSelected;
    gameObj.player.createAnimation();
    gameObj.player.updateSpeed(playerSelected);

    pause.onclick = () => {
      audios[20].play();
      setTimeout(() => {
        clearInterval(intervalId);
        start.style.display = "block";
        pause.style.display = "none";
        dialogueBox.style.display = "block";
      }, 370);
    };

    start.onclick = () => {
      audios[20].play();
      setTimeout(() => {
        intervalId = intervals(gameObj, frame);
        startOrResume();
      }, 370);
    };

    resume.onclick = () => {
      audios[20].play();
      setTimeout(() => {
        intervalId = intervals(gameObj, frame);
        startOrResume();
      }, 370);
    };

    restart.onclick = () => {
      audios[20].play();
      setTimeout(() => {
        gameObj.reset();
        intervalId = intervals(gameObj, frame);
        startOrResume();
      }, 370);
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
