
function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  runnerAnimation=loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  runner=createSprite(200,340);
  path.addImage(pathImg);
  runner.addAnimation("moving", runnerAnimation);
  runner.scale=0.07;
  leftBoundary=createSprite(0,0,100,800);
  rightBoundary=createSprite(400,0,100,800);
  leftBoundary.visible=false;
  rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY= 6;
  runner.x=World.mouseX;
  if (path.y>400)(
    path.y=height/2
  )
  edges=createEdgeSprites()
    runner.collide(leftBoundary);
    runner.collide(rightBoundary);

    drawSprites();

}
