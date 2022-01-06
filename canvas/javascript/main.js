let gameCanvas = document.getElementById("gameCanvas");

let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 1000;
gameCanvas.height = 500;
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 1000, 500);
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
