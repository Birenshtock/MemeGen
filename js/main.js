'use script'


var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImgFromlocal()

}


function drawImgFromlocal() {
    var img = new Image()
    img.src = 'img/3.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
}