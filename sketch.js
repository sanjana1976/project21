var bullet, wall;
var speed,weight;
var thickness


function setup() {
  createCanvas(1600,400);
  
bullet= createSprite(200,200,40,20);




  speed= random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(0,0,0);
 
  bullet.velocityX= speed
  bullet.shapeColor=color(80,80,80);
 }


function draw() {
  background(245,245,220);  

  if(wall.x-bullet.x < (bullet.width+wall.width/2)){
    bullet.velocityX=0
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(deformation>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(deformation<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  
    
  drawSprites();
}

