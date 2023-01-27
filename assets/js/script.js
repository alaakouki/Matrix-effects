var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var w = window.innerWidth;
var h = window.innerHeight;

canvas.width = w;
canvas.height = h;

var fontSize = 16;
var columns = Math.floor(w / fontSize);
var drops = [];
for (var i = 0; i < columns; i++) {
drops.push(0);
}

var str = "JavaScript Matrix effect";

function draw(){
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0,0,w,h);
    context.fontSize = "700" + fontSize + "px";
    context.fillStyle = "#00cc33";
    for (var i=0; i<columns; i++) {
        var index = Math.floor(Math.random()*str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if (y >= canvas.height && Math.random() > 0.99){
            drops[i] = 0;
        }
        drops[i]++;
    }
}
draw();
setInterval(draw, 35);
