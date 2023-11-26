let messages = [
  "Hello. I'm ADA. I was created by An",
  "Hold down your mouse for a bit. You can let go once you feel ready",
  "Thank you. You have been assigned a number. Please press the space bar to retrieve your number"
];

let currentMessageIndex = 0;
pressartTime;
let pressure = 0;
let assignedNumber;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  fill(0);

  // Display current message
  textSize(24);
  text(messages[currentMessageIndex], width / 2, height / 2);

  // Visualize pressure if mouse is held down
  if (currentMessageIndex === 1 && mouseIsPressed) {
    let duration = millis() - startTime;
    pressure = map(duration, 0, 20000, 0, 255);
    pressure = constrain(pressure, 0, 255);
    fill(0, pressure);
    noStroke();
    rect(0, 0, width, height);
  }
}

function mousePressed() {
  if (currentMessageIndex === 0) {
    currentMessageIndex++;
  } else if (currentMessageIndex === 1) {
    startTime = millis();
  }
}

function mouseReleased() {
  if (currentMessageIndex === 1) {
    currentMessageIndex++;
  }
}

function keyPressed() {
  if (keyCode === 32 && currentMessageIndex === 2) {
    assignedNumber = floor(random(1, 31));
    currentMessageIndex++;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
