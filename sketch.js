var thickness,wall;
var speed,weight,bullet;
var  bulletRightEdge,wallLeftEdge;


function setup() {
  createCanvas(1600,400);
speed = random(223,321)
weight = random(30,52)
thickness = random(22,83)

bullet  = createSprite(50,200,40,40);
bullet.shapecolor = color("white");

wall = createSprite(1500,200,60,height/2);
wall.shapecolor(80,80,80);

bullet.velocityX = speed;


}

function draw() {
  background(255,255,255); 
  if(hascollided(bullet,wall)){
bullet.velocityX = 0;

var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  if(damage>10){

    wall.shapecolor = color(255,0,0);
  }
if(damage<10){

  wall.shapecolor = color(0,255,0);
}

  drawSprites();
}

function hascollided(bullet,wall){

 bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if( bulletRightEdge>=wallLeftEdge) {
return true
}
return false
}


