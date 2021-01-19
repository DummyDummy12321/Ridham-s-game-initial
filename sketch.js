var ninja;

function preload()
{
  bgimg = loadImage("images/medkit.png");
  

}

function setup()
{
  createCanvas(1600,800);
  ninja = createSprite(300,400,10,40);
  ninja.addImage(bgimg);
  ninja.scale = 0.3
  

}
function draw()
{
  background(0);
  
  drawSprites();
}

