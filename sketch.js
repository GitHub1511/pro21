var thickness, wall;
var bullet,speed,weight;
var damage;


function setup() {
  createCanvas(800,400);
  

  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50,200,40,8);
  wall = createSprite(800,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  thickness = random(22,83);
  weight = random(223,321)
}

function draw() {
  background(255,255,0);
  
  bullet.velocityX = speed;
  
  text("damage: " + damage, 300,20);

  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0
    damage = Math.round(0.5 * weight * speed * speed / thickness * thickness * thickness);
    
    if (damage > 10) {
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0,255,0);
    }
    
  }
  
  drawSprites();

  
}



function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width / 2;
  wallLeftEdge = wall.x - wall.width / 2;

  if (bulletRightEdge >= wallLeftEdge) {
    return true;

  } else {

    return false;
  }
}