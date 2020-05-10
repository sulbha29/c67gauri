class Warrior{
constructor(x,y,width,height){
    var options = {
        isStatic : true

    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width ;
    this.height = height;
   // this.image = loadAnimation("image newgame/warrior/w1/walk/wa1.png","image newgame/warrior/w1/walk/wa2.png","image newgame/warrior/w1/walk/wa3.png","image newgame/warrior/w1/walk/wa4.png","image newgame/warrior/w1/walk/wa5.png")

    World.add(world,this.body);

}
display(){
    push();
    translate(this.body.position.x,this.body.position.y)
    
    rectMode(CENTER);
    fill("blue");
 rect(0,0,this.width,this.height);
 pop();
}
}