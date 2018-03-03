// sprites
var title = createSprite(200,200);

// sprite tweaks
title.setAnimation("title");
title.scale = 2;

// variables
menuStep = 10;

// functions
function setText(size,alignV,alignH,color,border) {
  textSize(size);
  textAlign(alignV,alignH);
  stroke(border);
  fill(color);
}

function animateTitle() {
  if (mouseIsOver(title)) {
    title.scale -= 0.01;
    if (title.scale <= 1.7) {
      title.scale = 2;
    }
  } else {
    if (title.scale >= 1.7) {
      title.scale -= 0.01;
    }
  }
  if (mousePressedOver(title)) {

  }
}

function menu() {

}

function gameCircle(x,y,time) {
  var
}

/*
i don't think i'll include these tbh
function gameSlider(x1,y1,x2,y2,time) {

}
*/

function gameSpinner(x,y,time) {
  var spinner = createSprite(200,200);
  // do stuff in-map
  if (/* done with spinner time */) {
    spinner.destroy();
  }
}

// prelims

// game
World.frameRate = 120;
function draw() {
  // input

  // processing
  animateTitle();
  menu();

  // drawing
  background("white");
  setText(15,"left","bottom","black","black");
  text("dane, (c) 2018",0,385);
  text("world's worst remake",0,400);
  drawSprites();
}
