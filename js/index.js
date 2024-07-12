var content = document.getElementsByTagName("body")[0];
var navbar = document.getElementById("navbar");
var darkmode = document.getElementById("darkmode");
var navOptions = document.getElementById("navbarSupportedContent");
var homeH1 = document.getElementById("home");
var services = document.getElementById("services");
var supported = document.getElementById("supported");
var regNow = document.getElementById("reg-now");

darkmode.addEventListener('click', function () {
    darkmode.classList.toggle('active');
    content.classList.toggle('night');
    navbar.classList.toggle('night');
    navOptions.classList.toggle('night');
    homeH1.classList.toggle('night');
    services.classList.toggle('night');
    supported.classList.toggle('night');
    regNow.classList.toggle('night');
})