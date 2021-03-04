const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops=[];
var maxDrops = 100;

function preload(){
    
}

function setup(){
   createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    if (frameCount%150===0)
    {
    for(var i = 0; i<maxDrops; i++)
    { 
      drops[i] = new Drop(random(0,800,),random(0,400),5);
    }
}
}

function draw(){
    background(0);
   
    
    for (var i = 0; i<=maxDrops; i++)
    {
        if (drops[i].body.position.y>800)
        {
            Matter.Body.setPosition(drops[i].body, {x:random(0,800), y:random(0,800)})
        }
    }
    drops[i].display();
}
