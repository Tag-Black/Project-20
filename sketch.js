var bgImg, cat, catImg1, mouse1, mouseImg1, catImg2, mouseImg2;

function preload() {
    //loading the images and sounds
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png" , "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(650, 650, 200, 200);
    cat.addAnimation("Cat", catImg1);
    cat.scale = 0.15;

    mouse1 = createSprite(100, 650, 200, 200);
    mouse1.addAnimation("Mouse", mouseImg1);
    mouse1.scale = 0.12;
}

function draw() {

    background(255);
    background(bgImg);

    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse1.x < (cat.width - mouse1.width)/2)
    {
        cat.changeAnimation("Catrunning", catImg2);
        cat.changeAnimation("Catrunning");
    }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW)
    {
        mouse1.addAnimation("mouseTeasing", mouseImg2);
        mouse1.changeAnimation("mouseTeasing");
        mouse1.frameDelay = 25;
    } 

    if (keyCode === LEFT_ARROW)
    {
        cat.addAnimation("Cat", catImg2);
        cat.velocityX = -1;
    }

}
