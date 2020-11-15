const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300;



function setup() {
  engine = Engine.create()
  world = engine.world;

  var canvas = createCanvas(480,800);


for (var k =0; k <=width; k = k + 80)
{
  divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
}

for (var j = 15; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75,10))
  plinkos.push(new Plinko(j,175,10))

}



  ground = new Ground(240,795,480,10)

  
}

function draw() {
  background(0,0,0);  

  
  
  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }
  
  for (var k = 0; k < plinkos.length; k++)
  {
    plinkos[k].display();
  }
  
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-100, width/2+100),10,10))
  }


for (var j = 0; j < particles.length; j++)
  {
    particles[j].display()
  }

  ground.display()

  Engine.update(engine)
  drawSprites();
}

