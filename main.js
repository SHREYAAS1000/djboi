song = ""

leftwristX = 0
rightwristX = 0

leftwristY = 0
rightwristY = 0

scoreleftwrist=0
scorerightwrist=0

function preload()
{
    song =loadSound("music.mp3")
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, moddelLoaded);
    poseNet.on("pose", gotposes)
}

function draw()
{
    image(video,0,0,600,500);

if(scoreleftwrist > 0.2)  //We use the scoreLeftWrist for checking that the leftWrist has been detected or is it in front of the webcam, if yes then only draw a red circle on x and y coordinates of leftWrist and do the calculation and change the volume of the song.We use the scoreLeftWrist for checking that the leftWrist has been detected or is it in front of the webcam, if yes then only draw a red circle on x and y coordinates of leftWrist and do the calculation and change the volume of the song.We use the scoreLeftWrist for checking that the leftWrist has been detected or is it in front of the webcam, if yes then only draw a red circle on x and y coordinates of leftWrist and do the calculation and change the volume of the song.We use the scoreLeftWrist for checking that the leftWrist has been detected or is it in front of the webcam, if yes then only draw a red circle on x and y coordinates of leftWrist and do the calculation and change the volume of the song.
{
    circle(leftwristX,leftwristY,20);
    fill("#ff0000");
    stroke("#ff0000")

    InNumber_leftwristY=Number(leftwristY); // used  to convert into number
remove_decimal=floor(InNumber_leftwristY)  // used to remove the decimal number
volume = remove_decimal / 500;
document.getElementById("volume").innerHTML = "volume = " + volume;
song.setVolume(volume)
}

if(scorerightwrist > 0.2)
{
    circle(rightwristX,rigthwristY,20);
    fill("#ff0000");
    stroke("#ff0000")

    if(rightwristY > 0 && rightwristY <= 100)

    {
    document.getElementById("speed").innerHTML = "SPEED = 0.5x" ;
    song.rate(0.5)
    }

    if(rightwristY > 100 && rightwristY <= 200)

    {
    document.getElementById("speed").innerHTML = "SPEED = 1x" ;
    song.rate(1)
    }

    if(rightwristY > 200 && rightwristY <= 300)

    {
    document.getElementById("speed").innerHTML = "SPEED = 1.5x" ;
    song.rate(1.5)
    }

    if(rightwristY > 300 && rightwristY <= 400)

    {
    document.getElementById("speed").innerHTML = "SPEED = 2" ;
    song.rate(2)
    }

    if(rightwristY > 400 && rightwristY <= 500)

    {
    document.getElementById("speed").innerHTML = "SPEED = 2.5x" ;
    song.rate(2.5)
    }

}
}

function play()
{
    song.play(); // play is a predefined function of p5.js used to start the music
    song.setVolume(1); // used to  set the volu be used to controlme for the song , 0 = lowvolume and 1 = highvolume
    song.rate(1); // rate() function which will the speed of the song ,1 = normalspeed and 2 = fast speed
}

function stop()
{
    song.stop(); // play is a predefined function of p5.js used to Stop the music
}

function moddelLoaded()
{
    console.log("PoseNet is Loaded ");
}

function gotposes(results)
    {
if(results.length > 0 )
{
    console.log(results);
    leftwristX= results[0].pose.leftWrist.x;
    rightwristX= results[0].pose.rightWrist.x;
    leftwristY= results[0].pose.leftWrist.y;
    rightwristY= results[0].pose.rightWrist.y;

    console.log("leftwristX = " + leftwristX + "leftwristY = " + leftwristY)
    console.log("rightwristX = " + rightwristX + "rightwristY = " + rightwristY)

    scoreleftwrist = results[0].pose.keypoints[9].score;
    console.log(" score left wrist ="+ scoreleftwrist)

    scorerightwrist = results[0].pose.keypoints[10].score;
    console.log(" score right wrist ="+ scorerightwrist)


}
    }
