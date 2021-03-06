Engine =Matter.Engine
World =Matter.World
Bodies =Matter.Bodies

function setup() {
  createCanvas(800,400);
  // 1. create the engine
  pEngine = Engine.create();

  //3. pEngine's world
  pWorld = pEngine.world;
  
  //creating the options for ground
  var options = {
    isStatic: true
  }
  //4. create the ground using bodies
  ground = Bodies.rectangle(width/2, height-50, width, 20, options);
  
  //5. adding the body to the world
  World.add(pWorld, ground)

  ball = Bodies.circle(width/2, 100, 20, {restitution:1})
  World.add(pWorld, ball)
}


function draw() {
  //2. update the engine
  Engine.update(pEngine);
  
  
  background(0);  

  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, width, 20)
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20)
}