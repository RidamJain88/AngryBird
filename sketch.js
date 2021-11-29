const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;
const Constraint = Matter.Constraint ;

var engine , world ;
var   ground ,  platform ;
var box ,  box2 , box3 , box4 , box5 ;
var pig , pig2;
var log , log2 , log3 , log4   ;
var bird ;
var bgImage ;
var sling ;


function preload(){
bgImage= loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world

  box = new Box(700 , 320 ,70 ,70 )
  box2 = new Box(920 , 320 , 70 , 70) ;
  pig = new Pig(810,350 )  
log = new Log(810,260,300,PI/2)

box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70)
pig2 = new Pig(810,220)
log2= new Log(810,180,300,PI/2)

log3 = new Log(760,120,150,PI/7)
log4 = new Log(870,120,150,-PI/7)
box5 = new Box(810,160,70,70)
bird = new Bird(200,50)



sling = new Slingshot(bird.body , {x:200 , y:50})
  ground = new Ground(600,380 ,1200 ,20)
  platform = new Ground(150 , 305 , 300 , 170)
}

function draw() {
  background(bgImage);
  Engine.update(engine)  
  
box.display();
 box2.display();
 pig.display()
 log.display()
 box3.display();
 box4.display();
 pig2.display();
 log2.display();
 log3.display();
 log4.display();
 box5.display();
 bird.display();
 
 sling.display();
 ground.display();
 platform.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body , {x:mouseX , y:mouseY})
}

function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if (keyCode === 32){
    sling.attach(bird.body)
  }
}