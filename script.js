var scene = 1;
var nursery;

// variables for text
var text1 = "Ooey Gooey was a worm."
var text2 = "Ooey Gooey loved to squirm."
var text3 = "Ooey Gooey on a track."
var text4 = "CHOO CHOO SPLAT!"
var text5 = "OOEY GOOEY!"
//music and images pre-load

function preload(){
  scene1 = loadImage("storyb_1.png");
  scene2 = loadImage("storyb_2.png");
  scene3 = loadImage("storyb_3.png");
  scene4 = loadImage("storyb_4.png");
  scene5 = loadImage("storyb_5.png");
  nursery = loadSound("nursery.mp3");
} // end of pre-load

function setup(){
  createCanvas(500, 500);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(16)
} // end of setup

function keyPressed(){
  if (key == ' '){
    nursery.play();
  }

  if (key == 'p'){
    nursery.pause();
  }
}

function draw(){
  background(0);
  
  //image 1
  if(scene == 1){
  imageMode(CENTER);
  image(scene1, 250, 250, 400, 380);
  fill(245, 144, 66);
  text(text1,250,40);
  }
  
  else if(scene == 2){
  imageMode(CENTER);
  image(scene2, 250, 250, 400, 380);
  fill(245, 144, 66);
  text(text2, 250, 40);
  }

  else if (scene == 3){
    imageMode(CENTER);
    //image(scene3, 250 , 500, 400);
    image(scene3, 250, 250, 400, 380);
    fill(245, 144, 66);
    text(text3, 250, 40);
  }
  else if (scene == 4){
    imageMode(CENTER);
    //image(scene3, 250 , 500, 400);
    image(scene4, 250, 250, 400, 380);
    fill(245, 144, 66);
    text(text4, 250, 40);
  }
  else if (scene == 5){
    imageMode(CENTER);
    //image(scene3, 250 , 500, 400);
    image(scene5, 250 , 250, 400, 380);
    fill(245, 144, 66);
    text(text5, 250, 40);
  }
  
  
} //end of draw

function mousePressed(){
  scene++

  if(scene > 5){
    scene = 1;
  }
} //end of mouse pressed

