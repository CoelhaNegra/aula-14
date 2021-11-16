var bola = {
  x:50,
  y:40,
  r:40,
  xspeed:0,
  yspeed:0,
  color:["blue","red","green","purple"]
};


function draw() {
  
  background(255);

  circle(bola.x,bola.y,bola.r);
  fill(bola.color[1]);
}