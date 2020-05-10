

class Robot{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.rImage = loadImage('robot/idle/Idle.png');
        this.width = width;
        this.height = height;
		this.x=x;
		this.y=y;
        World.add(world,this.body);
	   }
display(){
    push();
    imageMode(CENTER);
    image(this.rImage, this.x,this.y, this.width, this.height);
    pop();
  }
die()
 {
	inter=setInterval(function(){
    //push();
    imageMode(CENTER);
    image(deadImages[cIcount],200,200,200,200);
     cIcount++;
     if(cIcount>=7)
	 {
	 cIcount=0;
     clearInterval(inter);
	 
	 }	 
	//pop();
	},1000);
    
 }

	 
	 
 
};
