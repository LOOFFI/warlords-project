
var canvas = document.querySelector(".warlords-canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width-(Math.random()*canvas.width);
var y = canvas.height-30;
var ballRadius = 5;
var dx = 5;
var dy = -5;
var brickWidth = 70;
var brickHeight = 30;
var brickRowCount = 5;
var brickColumnCount = 6;


var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, };
    }
}


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}


function drawBricks() {

  //var brickX = 0;
  //var brickY = 580;
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
        var brickX = c*brickWidth;
        var brickY = r*brickHeight;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
  }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
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