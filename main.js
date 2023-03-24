leftwristX=0;
rightwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelloaded);
}
function gotposes(results){
    if(results.lenght>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
    }
}

function draw(){
     background("#6C91C2");
    text size (diference);
    fill ("#FFE787");
    text('Priyanshi',50,400);
}

function modelloaded(){
    console.log("posenetis initialized");
    posenet.on("pose",gotposes);
}