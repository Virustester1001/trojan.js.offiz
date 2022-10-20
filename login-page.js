const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ESPS2022" && password === "Honda_civic") {
        alert("You have successfully logged in.");
        redirect()
        loginErrorMsg.style.display = "none"
    } else {
        loginErrorMsg.style.opacity = 1;
       

    }
})
function redirect() {
    window.open("login.html")
}