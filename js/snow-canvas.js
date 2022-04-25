var canvas = document.createElement("canvas");
var pixel_w = 23;
var pixel_h = pixel_w;
var n_pixels = 29;
canvas.width = n_pixels * pixel_w;
canvas.height = canvas.width;
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

// Render Loop
function renderLoop(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var x = 0;
    var y = 0;

    for (var j = 0, len = n_pixels; j <= len; j++){
        for (var i = 0, len = n_pixels; i < len; i++){

            var roll = Math.round(Math.random() * 100);

            if (roll<=5) {
                ctx.fillStyle = "rgb(245, 166, 205)";
            }
            else {
                ctx.fillStyle = "transparent";
            }
            var x = i * pixel_w;
            var y = j * pixel_w;

            ctx.fillRect(x, y, pixel_w, pixel_h);
        }
    }
    
    // 2. Call renderLoop again.
    requestAnimationFrame(renderLoop);
    //setTimeout(renderLoop, 100);
}

renderLoop(0);