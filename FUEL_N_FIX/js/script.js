const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function success() {
    // Secured login with selected details
    
    // var email = document.getElementById("email");
    // var pass = document.getElementById("pass");
    // if(email.value === "123@gmail.com" && pass.value === "mrec") {
    //     window.open("index2.html");
    // } 
    // else {
    //     window.open("index2.html");
    // }
    window.open("index2.html");
}
