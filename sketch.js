const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var welcomeScreen ;
var skydive;
var startIcon;
var takeoff;
var gameState = "welcome"
var plane;
var mainScreen;


function preload() {
  

  welcomeScreen = loadImage("welcomescreen.jpeg")
  skydive = loadImage("skydive1.jpg")
  startIconImage = loadImage("start.jpg")
  takeoff = loadImage("takeoffGIF.gif")
}

function setup() {
  
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  
  plane = createSprite(800,200,50,50);
  
  plane.visible = false;
  
  startIcon = createSprite(700,500,100,100);


 startIcon.addImage("startIcon",startIconImage);

 startIcon.scale = 0.2;

}

function draw() {
  background(189);

  Engine.update(engine);
  if(gameState === "welcome"){

    background(welcomeScreen);
  
      imageMode(CENTER);
      image(skydive, 700,100 ,500,300);
  
  
      if(mousePressedOver(startIcon)){
  
        gameState="play"
      }
      
    } 
  
    else if (gameState === "play"){
      
      image(takeoff,0,0,width,height);
      startIcon.visible=false 
      if(frameCount >= 100 ){
        
       
        mainScreen = createSprite(200,300,1200,800);
        mainScreen.addImage("welcomeScreen",welcomeScreen);
       
        plane.depth = mainScreen.depth+1;

        plane.visible = true;
        
       if(keyIsDown(UP_ARROW)){
        plane.y=plane.y-15;  
       }
  
      if(keyIsDown(DOWN_ARROW)){
        plane.y=plane.y+15; 
      }
  
      
    }
        
      }
      
   
  
    drawSprites();
  }
  




