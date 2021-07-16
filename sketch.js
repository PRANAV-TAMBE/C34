const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,ball,sling;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21;

function setup(){
    createCanvas(1200,650);

    engine=Engine.create();
world=engine.world;

ground=new Ground(600,630,1200,20);

b1=new Box(900,500,70,70);
b2=new Box(900,430,70,70);
b3=new Box(900,360,70,70);
b4=new Box(900,290,70,70);
b5=new Box(900,220,70,70);
b6=new Box(900,150,70,70);
b7=new Box(900,80,70,70);
b8=new Box(800,500,70,70);
b9=new Box(800,430,70,70);
b10=new Box(800,360,70,70);
b11=new Box(800,290,70,70);
b12=new Box(800,220,70,70);
b13=new Box(800,150,70,70);
b14=new Box(800,80,70,70);
b15=new Box(700,500,70,70);
b16=new Box(700,430,70,70);
b17=new Box(700,360,70,70);
b18=new Box(700,290,70,70);
b19=new Box(700,220,70,70);
b20=new Box(700,150,70,70);
b21=new Box(700,80,70,70);

ball=new Ball(400,400,80,80);
sling=new Sling(ball.body,{x:500,y:300});







}

function draw(){
background("gray");

Engine.update(engine);

ground.display();

b1.display();

b2.display();

b3.display();

b4.display();

b5.display();

b6.display();

b7.display();

b8.display();

b9.display();

b10.display();

b11.display();


b12.display();


b13.display();

b14.display();

b15.display();

b16.display();

b17.display();

b18.display();

b19.display();

b20.display();

b21.display();


ball.display();
sling.display();
}


function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

























