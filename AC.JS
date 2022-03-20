Status = "";
AC_image = "";

function preload(){
    AC_image = loadImage("AC.jpg");
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
    Object_detector.detect(AC_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw() {
image(AC_image,0,0,640,350);
}