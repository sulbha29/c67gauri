const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(300,100,50,100);

    ground = new Ground(750,580,1500,20)
  iground = new invisibleground(750,590,1500,20);
  
    //ground.x = ground.width/2;
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    
    ground.display();
    iground.display();
    
    console.log(ground.body.position.x);

}