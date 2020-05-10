class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
display(){
    rectMode(CENTER);
   fill("white");
   var pos = this.body.position
   rect(pos.x,pos.y,this.width,this.height);
   
}
}