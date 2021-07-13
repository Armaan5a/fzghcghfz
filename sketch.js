var helicopterIMG, heli, pack,packageIMG;
var packageBody,engine,myworld;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 650);
	rectMode(CENTER);
	
	gro=createSprite(400,600,800,15);
	gro.shapeColor=("green")

    engine = Engine.create();
	myworld = engine.world;

	gr = new ground(400,570,300,15)
    gr1 = new ground(250,520,15,120)
	gr2 = new ground(550,520,15,120)
	packageBody = Bodies.circle(400,200,5,{restitution:0.6,isStatic:true});
	World.add(myworld, packageBody);
	
	grounds = Bodies.rectangle(400,580,600,10,{isStatic:true});
 	World.add(myworld, grounds);

	 pack=createSprite(30,40,10,10);
	 pack.addImage(packageIMG)
	 pack.scale=0.2
 
    heli=createSprite(400, 200, 10,10);
	heli.addImage(helicopterIMG)
	heli.scale=0.6

	}

function draw() {
  background(231,234,15);
  rectMode(CENTER);
  
  pack.x=packageBody.position.x
  pack.y=packageBody.position.y
 
  Engine.update(engine);
 
  if(keyDown("Down")){
	Matter.Body.setStatic(packageBody,false)  
  }
 
  if (keyCode === LEFT_ARROW) {
    heli.x=heli.x-10;    
    Matter.Body.translate(packageBody,{x:-10,y:0})
  
} else if (keyCode === RIGHT_ARROW) {
    heli.x=heli.x+10;
    Matter.Body.translate(packageBody,{x:10,y:0})
  }
 
  gr.display()
  gr1.display()
  gr2.display()
  drawSprites();
 
}	



