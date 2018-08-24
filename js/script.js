
var canvas = document.querySelector(".warlords-canvas");
var ctx = canvas.getContext("2d");
var x;
var y;
var ballRadius = 5;
var dx = 3;
var dy = -4;
var brickWidth = 70;
var brickHeight = 30;
var brickRowCount = 21;
var brickColumnCount = 17;
var knightWidth = 80;
var knightHeight = 30;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var score = 0;
var scoreEnemy = 0;
var grub = false;



var bricks;
var knight;
var knightEn1;
var knightEn2;
var knightEn3;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



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
 

function startScreen () {
  x = canvas.width-850;
  y = canvas.height-230;

  knight = {
    x:300,
    y:400
  };
  
  knightEn1 = {
    x:300,
    y:200
  };
  
  knightEn2 = {
    x:850,
    y:200
  };
  
  knightEn3 = {
    x:850,
    y:400
  }

  bricks = [];
  for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1};
    }
  }

  lord1.isCrashed = false;
  lord2.isCrashed = false;
  lord3.isCrashed = false;
  lord4.isCrashed = false;
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
  else if(e.keyCode == 32) {
    if (grub) {
      grub = false;
    }
    draw();
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
  else if(e.keyCode == 32) {
    if (grub) {
      grub = false;
    }
    draw();
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
    lord1.isCrashed = true;
    score++;
  }
  else if (x > lord2.x && x < lord2.x+lord2.width && y > lord2.y && y < lord2.y+lord2.height) {
    lord2.isCrashed = true;
    score++;
  }
  else if (x > lord3.x && x < lord3.x+lord3.width && y > lord3.y && y < lord3.y+lord3.height) {
    lord3.isCrashed = true;
    scoreEnemy++;
  }
  else if (x > lord4.x && x < lord4.x+lord4.width && y > lord4.y && y < lord4.y+lord4.height) {
    lord4.isCrashed = true;
    score++;
  }
}

function collisionDetectionKnightEn() {
  if (x > knightEn1.x && x < knightEn1.x+knightWidth && y > knightEn1.y && y < knightEn1.y+knightHeight) {
    dy = -dy
    }
  else if (x > knightEn2.x && x < knightEn2.x+knightWidth && y > knightEn2.y && y < knightEn2.y+knightHeight) {
    dy = -dy
    }
  else if (x > knightEn3.x && x < knightEn3.x+knightWidth && y > knightEn3.y && y < knightEn3.y+knightHeight) {
    dy = -dy
    }
  else if (x > knight.x && x < knight.x+knightWidth && y > knight.y && y < knight.y+knightHeight) {
    dy = -dy
    }
}

function drawKnight() {
   ctx.beginPath();
   ctx.rect(knight.x, knight.y, knightWidth, knightHeight);
   ctx.fillStyle = "#59F204";
   ctx.fill();
   ctx.closePath();
}

function drawKnightEnemy(enemy) {
   ctx.beginPath();
   ctx.rect(enemy.x, enemy.y, knightWidth, knightHeight);
   ctx.fillStyle = "#1100FF";
   ctx.fill();
   ctx.closePath();
}

function drawScore() {
  document.getElementById('score_player1').innerHTML = score;
  document.getElementById('score_cpu').innerHTML = scoreEnemy;
}

var gameOver = {
  x: 115,
  y: 340,
  drawMe: function () {
    ctx.font = "110px 'Press Start 2P', cursive";
    ctx.fillStyle = "red";
    ctx.fillText("Game Over", this.x, this.y);
  }
}


var startPlay = {
  x: 95,
  y: 340,
  drawMe: function () {
    ctx.font = "45px 'Press Start 2P', cursive";
    ctx.fillStyle = "red";
    ctx.fillText("Press Spacebar to start", this.x, this.y);
  }
}

var continuePlay = {
  x: 75,
  y: 340,
  drawMe: function () {
    ctx.font = "40px 'Press Start 2P', cursive";
    ctx.fillStyle = "red";
    ctx.fillText("Press Spacebar to continue", this.x, this.y);
  }
}


var move = 5;

function moveEnemies() {

  knightEn1.x += move;
  knightEn2.x += move;
  knightEn3.x += move;

  if (knightEn1.x === 550) {
    move = -5;
  } else if (knightEn1.x === 0) {
    move = 5;
  };
}

function win() {
  ctx.font = "60px 'Press Start 2P', cursive";
  ctx.fillStyle = "red";
  ctx.fillText("YOU ARE THE WINNER!", 20, 340);
  
}


function draw() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawKnight();
  drawKnightEnemy(knightEn1);
  drawKnightEnemy(knightEn2);
  drawKnightEnemy(knightEn3);
  drawBricks();
  drawBricks2();
  drawBricks3();
  drawBricks4();
  lord1.draw();
  lord2.draw();
  lord3.draw();
  lord4.draw();
  
  if (grub) {
    
    if (score===5 || scoreEnemy===5) {
      if (scoreEnemy===5){
      gameOver.drawMe();
      ctx.font = "30px kongtext";
      ctx.fillStyle = "red";
      ctx.fillText("Press F5 to Play Again", 300, 380);
    }
    
    else {
      win();
      ctx.font = "30px kongtext";
      ctx.fillStyle = "red";
      ctx.fillText("Press F5 to Play Again", 300, 380);
    };
  }
    else {
      continuePlay.drawMe();
      startScreen();
    }
    return
  }

    moveEnemies();
    collisionDetectionLord();
    collisionDetection();
    collisionDetectionKnightEn();
   
 
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

    drawScore();
    
    if (lord1.isCrashed || lord2.isCrashed || lord3.isCrashed || lord4.isCrashed) {
      grub = true;
    }
    
    requestAnimationFrame(draw);
  
}

ctx.clearRect(0, 0, canvas.width, canvas.height);
startScreen();
drawBricks();
drawBricks2();
drawBricks3();
drawBricks4();
startPlay.drawMe();


