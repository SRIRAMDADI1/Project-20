var car, wall, speed, weight;



function setup() {
  createCanvas(1300,400);

  wall = createSprite(1100,200,20,100)
  wall.shapeColor = rgb(80,80,80)

  car = createSprite(200, 200, 30, 30);
  car.shapeColor = "white"

  speed = random(55,90)
  weight = random(400,1500)
}

function draw() {
  background(0,0,0); 
  
  car.velocityX = speed;

  if(car.isTouching(wall)){

    car.velocityX = 0;
    
    var deformation = (0.5*weight*speed*speed)/22500;

    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0)
    }

    if(deformation<100){
      car.shapeColor = color(0,255,0)
    }


  }
  
  drawSprites();
}