import getImage from "./getImage/getImage.js";

let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1745 / 1.745;
gameCanvas.height = 928 / 1.745;

// bg.src = "../assets/images/background.jpg";
let bg = getImage("background.jpg");
function game() {
  ctx.drawImage(bg, 0, 0, 1745, 928, 0, 0, 1745 / 1.745, 928 / 1.745);
}

setInterval(() => {
  game();
  ctx.fillStyle = "black";
  ctx.fillRect(100, 150, 200, 100);
  ctx.fillStyle = "blue";
  ctx.fillRect(150, 220, 200, 150);
  ctx.fillStyle = "yellow";
  ctx.fillRect(300, 150, 200, 100);

  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(600, 200);
  ctx.stroke();
  console.log("lion");
}, 1200);

// ctx.fillStyle = "red";
// ctx.fillRect(0, 0, 1000, 500);
