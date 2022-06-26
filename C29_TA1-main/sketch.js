const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var rope;
var fruit;
var fruit_link;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground(250,690,500,30);
  rope = new Rope(7,{x:200,y:10});

  var fruit_options = {
    isStatic:false,
    density:0.001
}
fruit = Bodies.circle(200,200,30);
Matter.Composite.add(rope.body,fruit);
//console.log(fruit);

 fruit_link= new link(rope,fruit);

}

function draw() 
{
  background(51);
  
  Engine.update(engine);
  ground.display();
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,30);
   
}




