let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 750;

let rectX = 100;
let rectY = 100;
let rectwidth = 50;
let rectheight = 50;

ctx.fillStyle = "gold";
ctx.fillRect(rectX, rectY, rectwidth, rectheight);

let plusX = false;
let minusX = false;
let plusY = false;
let minusY = false;

requestAnimationFrame(loop);
function loop() {

    // Moving player
    if (plusX) {
        rectX +=5;

        ctx.fillStyle = "white";
        ctx.fillRect(0,0, cnv.width, cnv.height);

        ctx.fillStyle = "gold";
        ctx.fillRect(rectX, rectY, rectwidth, rectheight);
        
    } else if (minusX) {
        rectX -=5;

        ctx.fillStyle = "white";
        ctx.fillRect(0,0, cnv.width, cnv.height);

        ctx.fillStyle = "gold";
        ctx.fillRect(rectX, rectY, rectwidth,rectheight);
        
    } 
    
    if (plusY) {
        rectY +=5;

        ctx.fillStyle = "white";
        ctx.fillRect(0,0, cnv.width, cnv.height);

        ctx.fillStyle = "gold";
        ctx.fillRect(rectX, rectY, rectwidth, rectheight);
        
    } else if (minusY) {
        rectY -=5;

        ctx.fillStyle = "white";
        ctx.fillRect(0,0, cnv.width, cnv.height);

        ctx.fillStyle = "gold";
        ctx.fillRect(rectX, rectY, rectwidth, rectheight);
        
    }

    // Wrapping Player
    if (rectX < -rectwidth) {
        rectX = 1000;
    } else if (rectX > 1000) {
        rectX = -rectwidth;
    } else if (rectY < -rectheight) {
        rectY = 750;
    } else if (rectY > 750) {
        rectY = -rectheight;
    }
    
    requestAnimationFrame(loop);
}

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
    if (event.code == "ArrowRight") {
        plusX = true; 
    } else if (event.code == "ArrowLeft") {
        minusX = true;
    } else if (event.code == "ArrowDown") {
        plusY = true;
    } else if (event.code == "ArrowUp") {
        minusY = true;
    }
    
}

function keyupHandler() {
    plusX = false;
    minusX = false;
    plusY = false;
    minusY = false;
}


