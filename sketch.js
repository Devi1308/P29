const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  //console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block2(330,235,30,40);
  block9 = new Block2(360,235,30,40);
  block10 = new Block2(390,235,30,40);
  block11 = new Block2(420,235,30,40);
  block12 = new Block2(450,235,30,40);
  //level three
  block13 = new Block3(360,195,30,40);
  block14 = new Block3(390,195,30,40);
  block15 = new Block3(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level on 
  block17 = new Block(657,185,30,40);
  block18 = new Block(670,185,30,40);
  block19 = new Block(697,185,30,40);
  block20 = new Block(720,185,30,40);
  block21 = new Block(747,185,30,40);
  //level two
  block22 = new Block2(670,145,30,40);
  block23 = new Block2(700,145,30,40);
  block24 = new Block2(730,145,30,40);
  //top 
  block26 = new Block3(695,105,30,40);

  polygon= Bodies.circle(50,200,25,25);  
  World.add(world,polygon);


 slingShot = new SlingShot(this.polygon,{x:60,y:160});

 
  
 
}
function draw() {
  background("lightyellow"); 
 
  textSize(20);
  fill("lightpink");
  
  
  ground.display();
  slingShot.display();
  strokeWeight(2);
  stroke(15);
  fill("black");
  stand1.display();
  stand2.display();
  

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
 // polygon.display();
  

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("pink");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();
  fill("grey");
  block26.display();
 

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

