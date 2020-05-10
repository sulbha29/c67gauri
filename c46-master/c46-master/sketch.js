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
createCanvas (400, 400);
engine = Engine.create();
world = engine.world;
 w1 = new Warrior(200,350,50,50);
//warriors = createSprite(200,350,50,50);
//warriors.addAnimation("run",);
/*enemies = createSprite(250,350,50,50);
enemies.addAnimation("run",warrun);
trees = createSprite(100,100,70,70);
trees.addAnimation("",)*/

/*var w2 = new Warrior();
var w3 = new Warrior();

var e1 = new Enemy();
var e2 = new Enemy();

var ground = new Ground();

var t1 = new TREE();
var t2 = new TREE();
var t3 = new TREE();
var t4 = new TREE();
*/
}

function draw(){

    background("white");
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

   //ground.display();

   

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
    //createEdgeSprites();
    //warriors.collide(bottomEdge);

    
}
