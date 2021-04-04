var ball, ground
var engine,world
var box1, box2, box3, box4IMG, box4
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
box4IMG=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;
    ground = new Ground(600, 680, 1200, 20);
    ball = new Ball(200,500,40,40);
    box1 = new Rect (1185,560,20,200);
	  box2 = new Rect (1015,560,20,200);
	  box3 = new Rect (1100,650,190,20);
    box4 = createSprite(1100,560,40,40)
    box4.addImage(box4IMG)
    box4.scale = 0.5
	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  fill("brown");
  ground.display();
  drawSprites();
}

function keyPressed() {
  if(keyCode===UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position, {x:85,y:-85})
  }
}