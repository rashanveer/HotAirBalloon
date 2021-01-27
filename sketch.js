var balloon,backGround,balloonImage

function preload(){
backGround = loadImage("Hot Air Ballon-01.png")
balloonImage = loadImage("Hot Air Ballon-02.png")
}

function setup() {
  createCanvas(500,500);
  balloon  = createSprite(300,200,100,100)
  balloon.addImage(balloonImage)
}

function draw() {
  background(backGround);
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10 
  }
 else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10 
  }
 else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10 
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10 
  }
  
balloon.display();

  drawSprites();
}