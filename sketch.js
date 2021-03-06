

var paddle, paddleImg, ball, ballImg, brick, brickImg;
var lives = 3;
var score = 0;
var gameState = 0;
var i;
var brick, brickGroup;


function preload() {
  paddleImg = loadImage ("images/paddle 2.png");
  ballImg = loadImage ("images/ball.png");
  brickImg = loadImage ("images/brickk.png");
}

function setup() {
  createCanvas(1200, 500);

  paddle = new Paddle(160,20);
  ball = new Ball (40);
  border1 = new Border (1,1,1,500);
  border3 = new Border (1198,1,1,500);
  border4 = new Border (1,499,1200,1);

  createBrickRow(25);
  createBrickRow(25+30);
  createBrickRow(25+30+30);
  createBrickRow(25+30+30+30);
  createBrickRow(25+30+30+30+30);

  brickGroup = createGroup();

}

function draw() {
  background(200, 200, 200);

  //detectCollision();


  if (gameState === 0) {
    textSize (30);
    fill ("white");
    text("Press Enter to Start the game", 390, 300);



  
    if (keyDown ("Enter")) {
      gameState = 1;
    }
  
  }
  
  if (gameState === 1){
    ball.move();
    paddle.move();
    ball.speed = 5;
  
    /*if(ball.pos.y > height - 22){
      lives = lives - 1;
      gameState = 2;
      ball.speed = 0;
      
    }*/
  
    if (lives === 0){
      gameState = 3;
    }
  }
  
  if(gameState === 2){

    ball.reset();
    gameState = 0;

  
    if (lives === 0){
      gameState = 3;
    }
  }
  
  if(gameState === 3){
    ball.pos.x = width / 2;
    ball.pos.y = 150;
    textSize (30);
    fill ("white");
    text ("Game Over! Press 'R' to restart", 380, 240);
    paddle.pos.x = width/2;
  
  
    if(keyDown ("R")){
      gameState = 0;
      lives = 3;
      score = 0;
    }
  }
  

  //brickGroup.add(brick);

ball.display(); 
ball.bounceOff(); 
ball.hitPaddle();

paddle.display();
//border1.display();
//border3.display();
//border4.display();

drawSprites();

  textSize (20);
  fill ("white");
  text ("Score: "+ score, 10,30);

  textSize (20);
  fill ("white");
  text ("Lives: "+ lives, 10,60);
}

function createBrickRow(y){

for (var i = 9; i < 1198; i = i+20){
  brick = createSprite (5+4*i, y, 73, 22);
  //brick.shapeColor = "blue";
  brick.addImage (brickImg);
  brick.scale = 0.14;
}
}

function checkEdges(){
  if (border1.isTouching(paddle) || border3.isTouching(paddle)){
    paddle.collide();
  }
}