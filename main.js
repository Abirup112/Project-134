alert_sound="";
status="";
objects=[];
function preload(){
alert_sound=loadSound("Alarm Sound.mp3");
}
    
function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Baby";
}
function draw(){
    image(video, 0, 0, 380, 380);
    if(status != ""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video, gotResult);
    


        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status : Baby Detected";
            document.getElementById("number_of_objects").innerHTML="If a person is not detected alarm will be played";
            fill(r, g, b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
            noFill();
            stroke(r, g ,b);
            rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height);
        }
    }else(i=0, objects.length<0.i++){
        document.getElementById("number_of_objects").innerHTML="If a person is not detected alarm will be played";
        alert_sound.play();

    }
}
        
        
      
 
    
    

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
} 
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Baby";
}
function play(){
    alert_sound.play();
}