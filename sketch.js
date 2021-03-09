var monkey,monkey_run,ig,scenery,sceneryOP ;
var bananaGroup,banana_floats,bananaGroup;
var stone,stoneGG,stoneGroup;
var score;

function preload(){
  sceneryOP=loadImage("jungle.jpg");

monkey_run=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png");

banana_floats=loadImage("banana.png");
  
stoneGG=loadImage("stone.png");
}

function setup() {
  createCanvas(800, 400);
   scenery=createSprite(200,100,20,20);
  scenery.addImage("moveON",sceneryOP);
  scenery.x=scenery.width/2
  scenery.scale=1.5
  
  monkey=createSprite(50,280,20,20);
  monkey.addAnimation("bhaag",monkey_run);
  monkey.scale=0.13;
  
  ig=createSprite(400,380,800,3);
  ig.visible=false 
  
 bananaGroup=new Group();
  stoneGroup=new Group();
  
  score = 0;
}

  
function draw() {
  background(220);
  
  camera.position.x=monkey.x
  camera.position.y=monkey.y
  
  edges=createEdgeSprites()
  text(mouseX+","+mouseY,mouseX,mouseY)
   
 
  
   scenery.velocityX=-5
  
 if(keyDown("space")&& monkey.y >= 250){ 
   monkey.velocityY=-7
    }
   if (scenery.x < 0 ){
scenery.x = scenery.width/2;
} 
 
  
 monkey.velocityY = monkey.velocityY + 0.3;
  monkey.collide(ig);
  
  switch(score){
         case 10:monkey.scale=0.14;
                break;
         case 20:monkey.scale=0.16;
               break;
         case 30:monkey.scale=0.18;
               break;    
         case 40:monkey.scale=0.20;
               break;      
      default: break;
         }
  
  if(monkey.isTouching(bananaGroup)){
     score=score+1
    bananaGroup.destroyEach();
     }
  
  if(monkey.isTouching(stoneGroup)){
     monkey.scale=0.10
  }
  
  Banana();
  Stone();
 
  drawSprites();
   text("Score: "+ score, 500,60);
  
}

function Banana(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(800,220,40,10);
    banana.y = Math.round(random(150,240));
    banana.addImage(banana_floats);
    banana.scale = 0.05;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 400;
     bananaGroup.add(banana);
  }
}

function Stone(){
if(frameCount % 140 === 0){
var stone = createSprite(800,370,20,20);
  stone.addImage("pathar",stoneGG)
  stone.y = Math.round(random(365,380));
  stone.scale=0.2
  stone.velocityX=-5
  stone.lifetime=400
  stoneGroup.add(stone);
   }
}
