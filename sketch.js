var bob1,bob2,bob3,bob4,bob5,string,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground=createSprite(400,100,700,50)
	//bob=Bodies.circle(200,100,20);
	//World.add(world,bob);

	bob1=new Bob(200,400);
	bob2=new Bob(300,400);
	bob3=new Bob(400,400);
	bob4=new Bob(500,400);
	bob5=new Bob(600,400);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //ellipse(bob.body.position.x,bob.body.position.y,20);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}



