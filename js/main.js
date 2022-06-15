'use script'


var gCanvas;
var gCtx;
var gCurrText
var gFillColor
var gStrokeColor
var gX
var gY
var gTextNum = 0
var gCurrFont

var enterEvent = document.querySelector('.item0')
enterEvent.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        // code for enter
        enterEvent.value = ''
        gTextNum++
        enterEvent.blur() //עושה שלא אוכל לכתוב שוב באינפוט אחרי הפעם הראשונה
        console.log('gTextNum:', gTextNum)
    }
})


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


function drawText(text, x = 100, y = 100) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = gStrokeColor;
    gCtx.fillStyle = gFillColor;
    gCtx.font = `40px ${gCurrFont}`;
    // gCanvas.style.fontSize = "400px";
    gCtx.fillText(text, x, y); //Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y); //Draws (strokes) a given text at the given (x, y) position.
}

function onSetFont(font) {
    gCurrFont = font
}

function onBiggerFont() {
    gCtx.font = gCtx.font.replace(/\d+px/, (parseInt(gCtx.font.match(/\d+px/)) + 2) + "px");

    console.log('size:', gCtx.font)

}



function OnSetFillColor(FillColor) {
    gFillColor = FillColor
    console.log(gFillColor)
}

function OnSetStrokeColor(StrokeColor) {
    gStrokeColor = StrokeColor
    console.log(gStrokeColor)
}

function onTextRight() {
    gCtx.textAlign = "end"
    gX = 550
}

function onTextLeft() {
    gCtx.textAlign = "start"
    gX = 100
}

function onTextCenter() {
    gCtx.textAlign = "center";
    gX = gCanvas.width / 2
}

function onPlusAnotherText() {

    if (gTextNum === 1) {
        gY = 500
    } else if (gTextNum >= 2) {
        gY = 300
    }
}

function onAddTxt(text) { //הטקסט שהיוזר כותב
    console.log(text)
    gCurrText = text
    drawText(gCurrText, gX, gY)
}

// function onDeleteText() {


// }