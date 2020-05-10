var enemies, warriors, trees ;
var warrun, wartired, warjump, warshoot ;
var ground,;
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 

var world, engine;
function preload(){
}
function setup(){
createCanvas (800, 400);
engine = Engine.create();
world = engine.world;
w1 = new Warrior(200,350,50,50);
ground = new Ground(600,375,1200,25);
ground.x = ground.width/2;
//r1=new Robot(200,200,100,100);
}

function draw(){

    background("black");
    Engine.update(engine);
    w1.display();
   // r1.display();
    ground.display();
   if(ground.body.position.x < 400){
       Matter.Body.setPosition(ground.body,{x:ground.width/2,y:height})
   }   
}
