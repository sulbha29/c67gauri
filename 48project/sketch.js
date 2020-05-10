var enemies, warriors, trees ;
var warrun, wartired, warjump, warshoot ;
var ground;
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 

var world, engine;
function preload(){
/*warshoot = loadAnimation("")
warjump = loadAnimation("")
wartired = loadImage("")*/
}
function setup(){
createCanvas (800, 400);
engine = Engine.create();
world = engine.world;
//warriors = createSprite(200,350,50,50);
//warriors.addAnimation("run",);
/*enemies = createSprite(250,350,50,50);
enemies.addAnimation("run",warrun);
trees = createSprite(100,100,70,70);
trees.addAnimation("",)*/
 w1 = new Warrior(200,350,50,50);
/* w2 = new Warrior();
 w3 = new Warrior();

 e1 = new Enemy();
 e2 = new Enemy();
*/
 ground = new Ground(600,375,1200,25);
 ground.x = ground.width/2;

/*var t1 = new TREE();
var t2 = new TREE();
var t3 = new TREE();
var t4 = new TREE();
*/
}

function draw(){

    background("black");
    Engine.update(engine);
    w1.display();
    
   //w2.display();
  // w3.display();
   //e1.display();
   //e2.display();
   //t1.display();
   //t2.display();
   //t3.display();
   //t4.display();
   ground.display();
   if(ground.body.position.x < 400){
       Matter.Body.setPosition(ground.body,{x:ground.width/2,y:height})
   }




   

   /* if(keyDown("RIGHT_ARROW")){
       warriors.velocityX = 3;
        warriors.velocityY = 0;
    }
    if(keyDown("LEFT_ARROW")){
        warriors.velocityX = -3;
        warriors.velocityY = 0;
    }
    if(keyDown("UP_ARROW")){
        warriors.velocityY= -2;
        warriors.velocityX = 0;
    }
    if(keyDown("DOWN_ARROW")){
        warriors.velocityY = 2;
        warriors.velocityX = 0;
    }*/
//    createEdgeSprites();
  //  warriors.collide(bottomEdge);

    
}
