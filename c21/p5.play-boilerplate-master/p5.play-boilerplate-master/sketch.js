var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  
if(isTouching( movingRect,fixedRect)){
movingRect.shapeColor = "violet";
fixedRect.shapeColor = "violet";
}
else{
movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
}
bounceOff(movingRect,fixedRect);
  drawSprites();
}
