class Dustbin {
    constructor(x,y) {
      var options={'isStatic':true, 'density':1.0,'friction':1.0};
      this.x = x;
      this.y = y;
      this.width =150;
      this.height = 20;
      this.image = loadImage("dustbingreen.png");
      this.bottomBody=Bodies.rectangle(this.x, this.y+80,this.width, 50,options)
	  	this.leftBody=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.height, this.width, options)
      this.rightBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.height, this.width, options)

      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
    }
    
    display(){
      var bpos =this.bottomBody.position;
      push();
      translate(bpos.x,bpos.y);
      //rectMode(CENTER);
      fill(255);
      imageMode(CENTER)
      image(this.image,0,-90,150,200);
      //rect(0,0, this.width, this.height);
      pop();

      var lpos =this.leftBody.position;
      push();
      translate(lpos.x,lpos.y);
      //rectMode(CENTER);
      fill(255);
      //rect(0, 0, this.height,this.width);
      pop();

      var rpos =this.rightBody.position;
      push();
      translate(rpos.x,rpos.y);
      //rectMode(CENTER);
      fill(255);
      //rect(0, 0, this.height, this.width);
      pop();
    }
  };