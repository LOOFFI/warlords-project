
var canvas = document.querySelector(".warlords-canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width-(Math.random()*canvas.width);
var y = canvas.height-30;
var ballRadius = 5;
var dx = 5;
var dy = -5;
var brickWidth = 70;
var brickHeight = 30;
var brickRowCount = 21;
var brickColumnCount = 17;


var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
}


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.closePath();
}


function drawBricks() {

  for(var c=0; c<6 ; c++) {
    for(var r=0; r<5; r++) {
      if(bricks[c][r].status == 1) {
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
}

function drawBricks2() {

  for(var c=11; c<brickColumnCount; c++) {
    for(var r=0; r<5; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = c*brickWidth;
        var brickY = r*brickHeight;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawBricks3() {

  for(var c=0; c<6; c++) {
    for(var r=16; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = c*brickWidth;
        var brickY = r*brickHeight;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawBricks4() {

  for(var c=11; c<brickColumnCount; c++) {
    for(var r=16; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = c*brickWidth;
        var brickY = r*brickHeight;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}



function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBricks2();
    drawBricks3();
    drawBricks4();
    drawBall();
    collisionDetection();

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