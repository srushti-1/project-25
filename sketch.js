
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1, bin2, bin3;
var ground;
var paper;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bin1 = new Dustbin(750, 660);
    ground =  new Ground(width/2, 670, width, 20);
	 paper =  new Paper(200, 650, 70);


	


	Engine.run(engine);
  
}


function draw() {
  background("white");
  bin1.display(); 
  ground.display();
  paper.display();
  

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.Position, {x: 110, y: -110})
	}
    
}



