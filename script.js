var mode = document.getElementsByClassName('signuplogin-wrapper')[0];
function openSignup() {
    if (mode.className == "signuplogin-wrapper login-active") {
    mode.className = "signuplogin-wrapper signup-active";
    }
    else {
      mode.className += " signup-active";  
    }
}

function openLogin() {
    if (mode.className == "signuplogin-wrapper signup-active") {
    mode.className = "signuplogin-wrapper login-active";  
    } 
    else {
       mode.className += " login-active";  
    }
}

function bindEvents() {
    document.getElementsByClassName('sign-up')[0].addEventListener('click', openSignup);
    document.getElementsByClassName('log-in')[0].addEventListener('click', openLogin);
}
window.onload = bindEvents();