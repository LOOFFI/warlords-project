
var canvas = document.querySelector(".warlords-canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width-(Math.random()*canvas.width);
var y = canvas.height-30;
var ballRadius = 10;
var dx = 1;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
      dy = -dy;
    }
    x += dx;
    y += dy;
}

setInterval(draw, 10);