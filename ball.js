class Ball{
  constructor(r,pos){
  this.pos = createVector(width / 2, 220);
  this.radius = r;
  this.direction = createVector(1,-2);
  this.speed = 5;
  this.paddleCollide = false;
  this.image = loadImage ("images/ball.png")

  this.display = function() {
    ellipseMode (CENTER);
    ellipse (this.pos.x, this.pos.y, this.r, this.r);
    imageMode (CENTER);
    image(this.image, this.pos.x, this.pos.y, 55, 55);
  }

  this.reset = function() {
    this.pos.x = width / 2;
    this.pos.y = 150;
  }

  this.move = function() {

    this.pos.x = this.pos.x + this.direction.x * this.speed;
    this.pos.y = this.pos.y + this.direction.y * this.speed;
  }

  this.bounceOff = function(){

    if (this.pos.y < 20){
      this.direction.y *= -1;
    }
    if (this.pos.x < 20){
      this.direction.x *= -1;
    }
    /*if (this.pos.y > height - 20){
      this.direction.y *= -1;
    }*/
    if (this.pos.x > width - 20){
      this.direction.x *= -1;
    }
  }

  this.hitPaddle = function(){
    if (this.pos.y < paddle.pos.y - 10 && 
      this.pos.y > paddle.pos.y-10 - 20 && 
      this.pos.x > paddle.pos.x - 80 - 20 && 
      this.pos.x < paddle.pos.x + 80 + 20){
      this.paddleCollide = true;
    } else {
      this.paddleCollide = false;
    }
    if (this.paddleCollide && this.direction.y > 0){
      this.direction.y *= -1;
    }
    
  }
}
}
