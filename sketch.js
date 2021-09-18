var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
cloudImage = loadImage ("cloud.png");
  groundImage = loadImage("ground2.png")
  obstacleImage1 = loadImage("obstacle1.png");
  obstacleImage2 = loadImage("obstacle2.png");
  obstacleImage3 = loadImage("obstacle3.png");
  obstacleImage4 = loadImage("obstacle4.png");
  obstacleImage5 = loadImage("obstacle5.png");
  obstacleImage6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(700, 700);

  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,380,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
 

}

function draw() {
  background(180);

  //jump when the space button is pressed
  if (keyDown("space")&& trex.y > 350){ 
    trex.velocityY = -10;
  }
console.log (trex.y)
  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
spawnClouds () ;
spawnObstacles () ;
  trex.collide(ground);
  drawSprites();
}
function spawnClouds () {
  if(frameCount% 60 == 0){
var cloud = createSprite (600,100,40,10)
cloud.velocityX = -3
cloud.addImage(cloudImage);
cloud.scale = 0.1
cloud.y =Math.round(random(10,156)) 
cloud.depth = trex.depth
trex.depth =  trex.depth +1
cloud.lifetime = 250 ;
}
}
function spawnObstacles (){
  if(frameCount% 60==0){
var obstacle = createSprite (600,380,50,50);
obstacle.velocityX = -6;
var rand =Math.round(random(1,6));
switch (rand) {
  case 1: obstacle.addImage (obstacleImage1);
  break;
  case 2: obstacle.addImage (obstacleImage2);
  break;
  case 3: obstacle.addImage (obstacleImage3);
  break;
  case 4: obstacle.addImage (obstacleImage4);
  break;
  case 5: obstacle.addImage (obstacleImage5);
  break;
  case 6: obstacle.addImage (obstacleImage6);
  break;
  default:break;

  
}
obstacle.scale = 0.115
obstacle.depth = trex.depth;
trex.depth = trex.depth+1;
obstacle.lifetime = 250;

  }




}

