// sign up
import  translations  from "./translations.js";

$(function () {
// var signUp = document.getElementById("signUp");
// var signName = document.getElementById("signName");
// var signEmail = document.getElementById("signEmail");
// var signPass = document.getElementById("signPass");

var register = document.getElementById("register");
var login = document.getElementById("login");
var register_section = document.getElementById("register-section");
var content = document.getElementsByTagName("body")[0];
var navbar = document.getElementById("navbar");
var darkmode = document.getElementById("darkmode");


register.addEventListener("click", function () {
    open("register.html", "_self");
});

login.addEventListener("click", function () {
    open("login.html", "_self");
});

darkmode.addEventListener('click', function () {
    register_section.classList.toggle('night');
    darkmode.classList.toggle('active');
    content.classList.toggle('night');
    navbar.classList.toggle('night');
    
})

const languageSelector = document.querySelector('select');
languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
    localStorage.setItem('lang', event.target.value);
})
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(localStorage.getItem('lang'));
})
const setLanguage = (language) =>{
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
    const transKey = element.getAttribute('data-i18n');
    element.textContent = translations[language][transKey]
})

        
    
        // languageSel.classList.toggle('active-lang');
    
        // if (languageSel.classList.contains('active-lang')) {
        //     search.a("placeholder").value = "ضع رابط الملف هنا"
        //     console.log("asa");
        // }
        document.dir = language === 'ar' ? 'rtl' : 'ltr';
}


  
        
})
