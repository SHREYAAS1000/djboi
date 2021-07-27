song = ""

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
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play(); // play is a predefined function of p5.js used to start the music
}

function stop()
{
    song.stop(); // play is a predefined function of p5.js used to Stop the music
}