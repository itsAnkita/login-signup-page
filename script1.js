$(document).ready(function () {
    $(".sign-up").on("click", signupNow);
    $(".log-in").on("click", loginNow);
});

function signupNow() {
    if ($(".signuplogin-wrapper").hasClass("login-active")) {
        $(".signuplogin-wrapper").removeClass("login-active");
        $(".signuplogin-wrapper").addClass("signup-active");
    } else {
        $(".signuplogin-wrapper").addClass("signup-active");
    }
}

function loginNow() {
    if ($(".signuplogin-wrapper").hasClass("signup-active")) {
        $(".signuplogin-wrapper").removeClass("signup-active");
        $(".signuplogin-wrapper").addClass("login-active");
    } else {
        $(".signuplogin-wrapper").addClass("login-active");
    }
}