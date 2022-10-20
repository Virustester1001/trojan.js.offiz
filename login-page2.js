const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "youareanidiot.cc" && password === "youareanidiot.org") {
        alert("You have successfully logged in! Congrats!");
        redirect()
        loginErrorMsg.style.display = "none"
    } else {
        loginErrorMsg.style.opacity = 1;
        alert("Try again!")
       

    }
})
function hold() {
    openWindow("http://youareanidiot.cc/lol.html")
  }
  function hold1(){
    openWindow("http://youareanidiot.cc/lol.html")
  }
  function hold3() { 
    openWindow("idiot.html")
   }

function redirect() {
    window.open("homepage.html")
    
}
function openWindow(url) {
    aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
    }



