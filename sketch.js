var wall;
var car;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);

  wall=createSprite(300,200,30,80);
  wall.borderColor="black";
  //wall.debug = true

  car=createSprite(50,200,40,40);
  car.velocityX = 10;
  //car.debug = true;
  car.shapeColor="black";

  speed = random(55,90);
  weight = random(400,1500);
  deformation = calculateDeformation(weight, speed);
  
}

function draw() {
  //console.log("speed = "+speed);
  //console.log("weight = "+weight);
  //console.log("deformation = "+deformation);
  background(255,255,255);  
  drawSprites();
  
  if(isTouching(wall)){
    car.velocityX = 0;

    if(deformation <= 100) {
      car.shapeColor="green";
    } else if(deformation > 100 && deformation <= 180 ) {
      car.shapeColor="yellow";
    } else if(deformation > 180) {
      car.shapeColor="red";
    }

    reset();
  }
}

function isTouching(wall) {
  if(car.x -wall.x < wall.width/2 + car.width/2
        && wall.x - car.x < wall.width/2 + car.width/2
        && car.y - wall.y < wall.height/2 + car.height/2
        && wall.y - car.y < wall.height/2 + car.height/2){
    return true
  }
  else{
    return false;
  }
}

function calculateDeformation(weight,speed) {
  return (0.5*weight*speed*speed)/22500;
}

function reset() {
    car.x = 50;
    car.velocityX = 10; 
    speed = random(55,90);
    weight = random(400,1500);
    deformation = calculateDeformation(weight, speed);
}