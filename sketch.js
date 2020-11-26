var hypnoticBall, database;
var position;
var gameState = 0 ;
var playerCount; 
var form,player,game;
var allPlayers;
var distance=0;
var car1,car2,car3,car4;
var car =[];
var car1img,car2img,car3img,car4img;
var trackimg;
var groundimg;
var endimg;
var finishimg;
var rank;
///var playsound;

function preload(){
  car1img = loadImage("images/car1.png")
  car2img = loadImage("images/car2.png")
  car3img = loadImage("images/car3.png")
  car4img = loadImage("images/car4.png")
  trackimg = loadImage("images/track.jpg")
  groundimg = loadImage("images/ground.png")
  finishimg = loadImage("images/TrucksBrazil.jpg")
  endimg = loadImage("images/endflag.jpg");
 // playsound = loadSound("Music/car.mp3")

}

function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(displayWidth-20,displayHeight-130);

  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  if(gameState === 0 ){

background(finishimg);
    
  }
if(playerCount === 4 ){
    game.update(1);


}
if(gameState === 1 ){
clear();
game.playing();


}
if(gameState===2){
 clear();
 background(endimg)
  game.end();
  
}
  
   
  
}

