
function setup() {
  //to create workspace
  createCanvas(1000,600);

  //to make texts for the user
  space = "press space to drive";
  shift = "press shift to continue"

  //to make lanes of the road
  lane1 = createSprite(100, 300, 100, 20);
  lane1.shapeColor = color("yellow");

  lane2 = createSprite(400, 300, 100, 20);
  lane2.shapeColor = color("yellow");

  lane3 = createSprite(700, 300, 100, 20);
  lane3.shapeColor = color("yellow");
  
  lane4 = createSprite(1000, 300, 100, 20);
  lane4.shapeColor = color("yellow");

  //to make footpath
  road = createSprite(500, 100, 1000, 200);
  road2 = createSprite(500, 500, 1000, 200);

  //to make car
  c1 = createSprite(200, 300, 50, 50);
  c1.shapeColor = color("blue");

  c1a = createSprite(165, 310, 30, 30);
  c1a.shapeColor = color("blue");

  c1b = createSprite(235, 310, 30, 30);
  c1b.shapeColor = color("blue");

  //to make stop pole for the car to stop
  wall = createSprite(800, 300, 50, height/2);
  wall.shapeColor = color("red");

  //giving speed to the car
  speed = random(55, 90);

  //to give weight to the car
  weight = random(400, 1500);

  //giving states of the program
  state = "serve";

  // make a block for report
  report = createSprite(5000, 1000, 240, 20);
  report.shapeColor = color("indigo");
}

function draw() {

  //to give background
  background(0);  

  //to make the car move
   if((keyDown("SPACE"))&&(state === "serve")) {
    c1.velocityX = speed;
    c1a.velocityX = c1.velocityX;
    c1b.velocityX = c1.velocityX;
   }

   //to open the stop pole
   open();

   //condition for car if it touches the stop pole
  if(((wall.x - 50) - c1.x) < ((c1.width/2 + wall.width/2))&&((wall.y - c1.y) < (c1.height/2 + wall.height/2))&&((c1.y - wall.y) < (wall.height/2 + c1.height/2))&&((c1.x + 50) - wall.x) < ((wall.width/2 + c1.width/2))) {

    //giving a variable for deformation
    deformation = 0.5 * speed * weight * speed/22509;

    //condition if deformation is greater than 180
     if(deformation > 180) {
      // c1.shapeColor = color("blue");
       c1.velocityX = 0; 
       c1.x = c1.x - 50;
       c1a.velocityX = 0; 
       c1a.x = c1a.x - 50;
       c1b.velocityX = 0; 
       c1b.x = c1b.x - 50;
       state = "play";
      //reset();
     }

     //condition if deformation is greater than 100 and less than 180
     if((deformation < 180)&&(deformation > 100)) {
     // c1.shapeColor = color("green");
      c1.velocityX = 0; 
      c1.x = c1.x - 50;
      c1a.velocityX = 0; 
      c1a.x = c1a.x - 50;
      c1b.velocityX = 0; 
      c1b.x = c1b.x - 50;
      state = "play";
      //reset();
     }

     //condition if deformation is less than 100
     if(deformation < 100) {
     // c1.shapeColor = color("brown");
      c1.velocityX = 0; 
      c1.x = c1.x - 50;
      c1a.velocityX = 0; 
      c1a.x = c1a.x - 50;
      c1b.velocityX = 0; 
      c1b.x = c1b.x - 50;
      state = "play";
      //reset();
     }
  }

  //condition to reset the program when 'r' is pressed
  if(keyDown("r")) {
    reset();
  }
  
  //to draw the sprites
  drawSprites();
  fill("yellow");

  //condition to shaow the report
  if(mouseIsOver(report)) {
    text(" weight = " + weight + "   speed = " + speed + "   marks = " + deformation, 300, 400);
  }

  //to text for user to control the car & stop pole and know about the program
  text(space, 500, 300);

  if(keyDown("SPACE")) {
    fill("yellow");
    space = "";
  }
  if(space === "") {
    text(shift, 500, 300);
  }
  if(shift === "") {
    text("press 'r' to reset the program", 500, 300);
    text("keep your mouse here to know about report",420, 100);
  }
  
}

function open() {

  //to open the stop pole to let the car go
  if(state === "play") {
  
  if(keyDown("SHIFT")) {
   wall.y = -5;
   c1.velocityX = 10;
   c1a.velocityX = 10;
   c1b.velocityX = 10;
   shift = "";
   report.x = 535;
   report.y = 100;
  }
}
}

function reset() {

  //to reset the program
  wall.y = 300;
  c1.y = 300;
  c1a.y = 310;
  c1b.y = 310;
  wall.x = 800;
  c1.x = 200;
  c1a.x = 165;
  c1b.x = 235;
  state = "serve";
  space = "press space to drive";
  c1.velocityX = 0;
  c1a.velocityX = c1.velocityX;
  c1b.velocityX = c1.velocityX;
  report.x = 5000;
  report.y = 8000;

  //to let the car move again
  if(keyDown("SPACE")) {
  c1.velocityX = speed;
  c1a.velocityX = c1.velocityX;
  c1b.velocityX = c1.velocityX;
  }

  //giving initial state
  state === "serve";
  shift = "press shift to continue";
}