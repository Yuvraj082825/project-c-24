
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	leftEdge= new Ground(470,665,10,80);
	rightEdge= new Ground(610,665,10,80);
	bottomEdge= new Ground(540,685,130,10);
	paperObject=new Paper(120,660,20);
	

	groundObject= new Ground(400,695,1800,10);
	keyPressed();
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  leftEdge.display();
  rightEdge.display();
  bottomEdge.display();
  paperObject.display();
  
  groundObject.display();
  
  drawSprites();
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:48,y:-61});
		
		
	}
}



