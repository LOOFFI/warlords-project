
var canvas = document.querySelector(".warlords-canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width-840;
var y = canvas.height-160;
var ballRadius = 5;
var dx = 6;
var dy = -5;
var brickWidth = 70;
var brickHeight = 30;
var brickRowCount = 21;
var brickColumnCount = 17;
var knightWidth = 40;
var knightHeight = 30;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var score = 0;
var scoreEnemy = 0;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
}

var knight = {
  x:300,
  y:400
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// var ball = {
//  x : canvas.width-840,
//  y : canvas.height-160,
//  ballRadius : 5,
//  dx: 5,
//  dy: -5,
//  drawBall: function() {
//   ctx.beginPath();
//   ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
//   ctx.fillStyle = "pink";
//   ctx.fill();
//   ctx.closePath();
//  
// }
//
//
//}


function lord(lordX, lordY, lordWidth, lordHeight) {
  this.x = lordX;
  this.y = lordY;
  this.width = lordWidth;
  this.height = lordHeight;
  this.isCrashed = false;
}

lord.prototype.draw = function () {
  if (this.isCrashed) {
    ctx.fillStyle = "crimson";
  }
  else {
    ctx.fillStyle = "#7404f2";
  }

  ctx.fillRect(this.x, this.y, this.width, this.height);
};



var lord1 = new lord(0,0,140,90);
var lord2 = new lord(1050,0,140,90);
var lord3 = new lord(0,540,140,90);
var lord4 = new lord(1050,540,140,90);



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
        ctx.fillStyle = "#04F2BC";
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

function keyDownHandler(e) {
  if(e.keyCode == 39) {
      rightPressed = true;
  }
  else if(e.keyCode == 37) {
      leftPressed = true;
  }
  else if(e.keyCode == 38) {
      upPressed = true;
  }
  else if(e.keyCode == 40) {
      downPressed = true;
  }
}


function keyUpHandler(e) {
  if(e.keyCode == 39) {
      rightPressed = false;
  }
  else if(e.keyCode == 37) {
      leftPressed = false;
  }
  else if(e.keyCode == 38) {
      upPressed = false;
  }
  else if(e.keyCode == 40) {
      downPressed = false;
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


function collisionDetectionLord() {
  if (x > lord1.x && x < lord1.x+lord1.width && y > lord1.y && y < lord1.y+lord1.height) {
    dy = -dy
    console.log("coucou");
  }
  else if (x > lord2.x && x < lord2.x+lord2.width && y > lord2.y && y < lord2.y+lord2.height) {
    dy = -dy
    console.log("coucou");
  }
  else if (x > lord3.x && x < lord3.x+lord3.width && y > lord3.y && y < lord3.y+lord3.height) {
    dy = -dy
    console.log("coucou");
  }
  else if (x > lord4.x && x < lord4.x+lord4.width && y > lord4.y && y < lord4.y+lord4.height) {
    dy = -dy
    console.log("coucou");
  }
}


function drawKnight() {
        ctx.beginPath();
        ctx.rect(knight.x, knight.y, knightWidth, knightHeight);
        ctx.fillStyle = "#59F204";
        ctx.fill();
        ctx.closePath();
}

function drawScore() {
  $(".score").html(score);
}



function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBricks2();
    drawBricks3();
    drawBricks4();
    lord1.draw();
    lord2.draw();
    lord3.draw();
    lord4.draw();
    drawKnight();
    drawBall();
    collisionDetectionLord();
    collisionDetection();
   
 
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
      dy = -dy;
    }
    
    if(rightPressed && knight.x < canvas.width/2-knightWidth-60) {
      knight.x += 7;
    }
    else if(leftPressed && knight.x > 0) {
      knight.x -= 7;
    }
    else if(downPressed && knight.y < canvas.height-30) {
      knight.y += 7;
    }
    else if(upPressed && knight.y > 400) {
      knight.y -= 7;
    }
  

    


    x += dx;
    y += dy;

    
}



setInterval(draw, 10);