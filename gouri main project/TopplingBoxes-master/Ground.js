class Ground {
    constructor(x,y,width,height) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      Matter.Body.setVelocity(this.body,{x:-5,y:0})
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      //this.body.velocityX = -3;
      if(pos.x<0){
        pos.x = this.body.width/2;
        }
   
      rect(pos.x, pos.y, this.width, this.height);
      //this.body.velocityX = -3;
    }
  };