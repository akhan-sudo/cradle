
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(800,100,250,20)
ball1=new Ball(100,20,1);
ball2=new Ball(10,20,1);
ball3=new Ball(200,20,1);
//rope = new Rope(ball1.body,roof,-ballDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  drawSprites();
 
}



