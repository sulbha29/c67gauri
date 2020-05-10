

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
		this.cIcount=1;
		this.deadImages =new Array();
		for(this.cIcount=1;this.cIcount<7;this.cIcount++)
        {
	    this.deadImages[this.cIcount]=loadImage('robot/dead/Dead'+this.cIcount+'.png');
        }
        this.cIcount=1;
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
	//this.rImage.hide();
	image(this.deadImages[this.cIcount],200,200,200,200);
    this.cIcount++;
    if(this.cIcount>=7)
	 {
	 this.cIcount=1;
     }	 
	//else 
	//{
	//	setTimeout(this.die,1000);
    //}
 }

};
