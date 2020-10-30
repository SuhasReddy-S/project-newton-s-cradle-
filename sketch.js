const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var groundObject;

function preload()
{	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//groundObject = new Ground (200,200,100,30)

	bobObject1 = new Bob (200,300,40);
	bobObject2 = new Bob (500,250,40);
	bobObject3 = new Bob (789,657,40);
	bobObject4 = new Bob (234,176,40)
	bobObject5 = new Bob (473,236,40);
	console.log("Gonna call the ground");
	

	rope1 = new Rope (bobObject1.body,{x: 200, y: 20});
	// rope2 = new Rope ();
	// rope3 = new Rope ();
	// rope4 = new Rope ();
	// rope5 = new Rope ();
	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(155);

  //groundObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  rope1.display();
//   rope2.display();
//   rope3.display();
//   rope4.display();
//   rope5.display();
  drawSprites();
}