class Paper{
    constructor(x,y,r){
        var options={
            restitution: 0.3,
            friction: 0.1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,this.r/2, options);
        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0, 0,70,70);
        pop();

    }
}