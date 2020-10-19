//Create variables here
var dog,happydog,database,foods,foodstock

function preload()
{
  //load images here
  dog1 = loadImage("images/dogimg.png")
  dog2 = loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(250,250,100,100)
  dog.addImage(dog1)
  dog.scale = 0.5
  foodstock=database.ref('food');
  foodstock.on("value",readstock);
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writestock(foods);
  dog.addImage(dog2);

}
  drawSprites();
  //add styles here

}
function readstock(data){
  foods=data.val();
}


function writestock(x){

  database.ref('/').update({
    food:x
  })
}























