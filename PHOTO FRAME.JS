Status = "";
Photo_Frame_image = "";

function preload(){
    Photo_Frame_image = loadImage("PHOTO FRAME.jpg");
}
function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    Object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    Object_detector.detect(Photo_Frame_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw() {
image(Photo_Frame_image,0,0,640,350);
}