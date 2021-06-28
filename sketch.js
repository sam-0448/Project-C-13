var garden,rabbit,leaf,apple,carrot;
var gardenImg,rabbitImg,leafImg,appleImg,carrotImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");
  carrotImg = loadImage("carrot.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  // moving the rabbit on Xaxis using the mouse.
  rabbit.x = World.mouseX;

 var select_sprites = Math.round(random(1,3));

 if(frameCount % 80 == 0){
   if(select_sprites == 1){
     createsApples();
   }
  else if (select_sprites == 2){
    createsLeaf();
  }
  else if (select_sprites == 3){
    createsCarrot();
  }

 }

 
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createsApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.06;
  apple.velocityY = 3;
  apple.lifetime = 100;
}

function createsCarrot() {
  carrot = createSprite(random(50, 350),40, 10, 10);
  carrot.addImage(carrotImg);
  carrot.scale=0.11;
  carrot.velocityY = 3;
  carrot.lifetime = 100;
  }

  function createsLeaf() {
    leaf = createSprite(random(50, 350),40, 10, 10);
    leaf.addImage(leafImg);
    leaf.scale=0.08;
    leaf.velocityY = 3;
    leaf.lifetime = 100;
    }

