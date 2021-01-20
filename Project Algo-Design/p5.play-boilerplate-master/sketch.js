var movingRect
var fixedRect

function setup() {
  createCanvas(1200,800);
  /*

  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green"

  movingRect =  createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green"
  */

  object1 = createSprite(100,100,50,50);
  object2 = createSprite(600,100,50,50);
  /*
  object3 = createSprite(300,100,50,50);
  object4 = createSprite(400,100,50,50);
  */
  object1.shapeColor = "green"
  object2.shapeColor = "red"
  object1.velocityX = 5
  object2.velocityX = -5

  /*
  object3.shapeColor = "green"
  object4.shapeColor = "green"
  */
}

function draw() {
  background(255,255,255);  
  /*
  movingRect.x= mouseX
  movingRect.y = mouseY

if (isTouching(object3, movingRect)){

  movingRect.shapeColor = "red"
  object3.shapeColor = "red"
}
else{

movingRect.shapeColor = "green"
object3.shapeColor = "green"


}

 
  */

  bounceOff();
  
  drawSprites();
}

function isTouching(object1, object2){

  if (object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2
      ){
  
            return true;
  
    }
  
    else {
  
      return false;
  
    }


}

  function bounceOff (){

    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 


}