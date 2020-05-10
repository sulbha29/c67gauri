class TREE{
    constructor(x,y,width,height){
        var options = {
            'density': 3,
            'friction':2,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius =  radius;
        
        World.add (world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("brown");
        ellipse(this.body.position.x,this.body.position.y,this.radius);
        
    }
}