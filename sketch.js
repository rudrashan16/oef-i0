var canvas, backgroundImage;
var cars, car1,car2,car3,car4;
var gameState = 0;
var playerCount;
var allPlayers;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
}
