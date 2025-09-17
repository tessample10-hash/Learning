let trails = [];
let gridSize = 20;     // base size of each square
let cursorUnits = 3;  // number of grid cells for cursor area
let revealTime = 3500; // ms before fade starts
let fadeTime = 400;    // ms duration of fade-in

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(255); // white top layer

  for (let i = 0; i < trails.length; i++) {
    let t = trails[i];
    let age = millis() - t.time;

    if (age < revealTime) {
      // Erase → reveal blue underneath
      erase();
      rect(t.x, t.y, t.w, t.h);
      noErase();
    } else if (age < revealTime + fadeTime) {
      // Fade back in with easing
      let progress = (age - revealTime) / fadeTime;
      let eased = progress * progress * (3 - 2 * progress); // smoothstep easing
      fill(255, 255 * eased);
      rect(t.x, t.y, t.w, t.h);
    } else {
      // Fully white again
      fill(255);
      rect(t.x, t.y, t.w, t.h);
    }
  }
}

function mouseMoved() {
  let x = floor(mouseX / gridSize) * gridSize;
  let y = floor(mouseY / gridSize) * gridSize;

  trails.push({
    x: x - (cursorUnits / 2) * gridSize,
    y: y - (cursorUnits / 2) * gridSize,
    w: cursorUnits * gridSize,
    h: cursorUnits * gridSize,
    time: millis()
  });
}
