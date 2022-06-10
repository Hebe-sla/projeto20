
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var corpo1
var corpo2
var corpo3
var chao

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

var corpo1_options={
restitution:0.5,
friction:0.02,
frictionAir:0
}

var corpo2_options={
	restitution:0.7,
	friction:0.01,
	frictionAir:1
	}
var corpo3_options={
	restitution:0.01,
	friction:1,
	frictionAir:0.3
		}
var chao_options={
	isStatic:true
}
	
corpo1 = Bodies.circle(220,110,110,corpo1_options);
corpo2 = Bodies.rectangle(110,50,110,110,corpo2_options);
corpo3 = Bodies.circle(350,10,110,corpo3_options);
chao = Bodies.rectangle(400,680,800,10,chao_options);

World.add(world,corpo1)
World.add(world,corpo2)
World.add(world,corpo3)
World.add(world,chao)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  drawSprites();
 ellipse(corpo1.position.x,corpo1.position.y,110)
 rect(corpo2.position.x,corpo2.position.y,110,110)
 ellipse(corpo3.position.x,corpo3.position.y,110)
 rect(chao.position.x,chao.position.y,800,10)
}



