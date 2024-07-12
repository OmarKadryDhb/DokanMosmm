import  translations  from "./translations.js";

var content = document.getElementsByTagName("body")[0];
var navbar = document.getElementById("navbar");
var darkmode = document.getElementById("darkmode");
var navOptions = document.getElementById("navbarSupportedContent");
var homeH1 = document.getElementById("home");
var services = document.getElementById("services");
var supported = document.getElementById("supported");
var regNow = document.getElementById("reg-now");
var footer = document.getElementById("footer");
var languageSel = document.getElementById("language-selector");
var search = document.getElementById("search");

darkmode.addEventListener('click', function () {
    darkmode.classList.toggle('active');
    content.classList.toggle('night');
    navbar.classList.toggle('night');
    navOptions.classList.toggle('night');
    homeH1.classList.toggle('night');
    services.classList.toggle('night');
    supported.classList.toggle('night');
    regNow.classList.toggle('night');
    footer.classList.toggle('night');
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