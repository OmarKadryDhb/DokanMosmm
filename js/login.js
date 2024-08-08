import  translations  from "./translations.js";

$(function() {
  // login
// var logEmail=document.getElementById("logEmail");
// var logPass=document.getElementById('logPass');
// var login_btn = document.getElementById('login_btn');
// var logError =  document.getElementById('logError');
var register = document.getElementById("register");
var login = document.getElementById("login");
var login_section = document.getElementById("login-section"); 
var darkmode = document.getElementById("darkmode");
var content = document.getElementsByTagName("body")[0];
var navbar = document.getElementById("navbar");
var navbar_logo = document.getElementById("navbar_logo");

navbar_logo.addEventListener('click', function () {
  open('index.html', '_self');
})


register.addEventListener("click", function () {
   open("register.html", "_self");
});

login.addEventListener("click", function () {
    open("login.html", "_self");
});

darkmode.addEventListener('click', function () {
  darkmode.classList.toggle('active');
  content.classList.toggle('night');
  navbar.classList.toggle('night');
  login_section.classList.toggle('night');
})


  
const languageSelector = document.querySelector('select');
languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
    localStorage.setItem('lang', event.target.value);
})
  
  

const setLanguage = (language) =>{
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const transKey = element.getAttribute('data-i18n');
      element.textContent = translations[language][transKey]
    })

    if (language === 'ar') {
         
    }
    else if(language === 'en'){
        $('.checkbox').css('margin-bottom', '20px');
    }
  
      // languageSel.classList.toggle('active-lang');
  
      // if (languageSel.classList.contains('active-lang')) {
      //     search.a("placeholder").value = "ضع رابط الملف هنا"
      //     console.log("asa");
      // }
  
  
  
      document.dir = language === 'ar' ? 'rtl' : 'ltr';
}  
setLanguage(localStorage.getItem('lang'));

})