const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paperObj,dustbin,ground;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	
	dustbin = new Dustbin(850,500);
	paperObj = new Paper(100, 100, 10);
	ground = new Ground(600,height,1200,20);
	Engine.run(engine);
  
}

function draw() {
  background("cyan");
 
  ground.display();
  dustbin.display();
  paperObj.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x:1,y:-5});
	}
}