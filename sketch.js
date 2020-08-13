const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 

var flag = "invisible";

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
ground = new Ground(400,350,800,10);
boy = new Boy(50,330,50,50);
hand = new Hand(100,330,50,10);
bullet = new Bullet(120,330,10,1)
}

function draw() {
  background(0);  
  ground.display();
  boy.display();
  hand.display();
  bullet.display();
  drawSprites();


}
function keyPressed(){
  if(keyCode===32){
    flag = "visible"
  }
}