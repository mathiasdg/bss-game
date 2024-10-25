let classifier;
let video;
let h = 440;
let w = 690;
let label;
let accuracy;

// teachablemachine.withgoogle.com/train/image/1QxZw9wZNh1JLzElF3rhsGuNLrpJ69kLo

https: function preload() {
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/Uivnkipyp/"
  );
  // classifier = ml5.imageClassifier("MobileNet", video, modelReady);
}

function gotResult(results) {
  // console.log(results);
  label = results[0].label;
  accuracy = results[0].confidence;
}

function setup() {
  createCanvas(w, h);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  classifier.classifyStart(video, gotResult);
}
function draw() {
  image(video, 0, 0, w, h);

  fill(2, 255, 55);
  textSize(18);
  const feedback = label + " (confidance: " + Math.floor(accuracy * 100) + "%)";
  text(feedback, 10, 20);
}
