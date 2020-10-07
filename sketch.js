var boiler
var plate
function setup() {
  createCanvas(800,400);
  boiler=createSprite(100,200,20,20);
  boiler.shapeColor="blue";
  plate=createSprite(300,400,20,20);
  plate.shapeColor="blue";
  
}

function draw() {
  background(255,255,255);  
  boiler.x=mouseX;
  boiler.y=mouseY;
  if(boiler.x-plate.x<boiler.width/2+plate.width/2 &&
    plate.x-boiler.x<boiler.width/2+plate.width/2  &&
    boiler.y-plate.y<boiler.height/2+plate.height/2 &&
    plate.y-boiler.y<boiler.height/2+plate.height/2    ){
boiler.shapeColor="red";
plate.shapeColor="red";
    }
    else{
      boiler.shapeColor="blue";
      plate.shapeColor="blue";
    }
    
  drawSprites();
}