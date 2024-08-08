import  translations  from "./translations.js";

$(function () {
    // function startloading(){
    //     $(".sk-chase").fadeOut(3000,function(){ 
    //         $("#loading").fadeOut(1000,function(){
    //             $("body").css("overflow",'auto');
    //             $("#loading").remove();
    //         });})
    // }
    // startloading();
var content = document.getElementsByTagName("body")[0];
var navbar = document.getElementById("navbar");
var darkmode = document.getElementById("darkmode");
var navOptions = document.getElementById("navbarSupportedContent");
var homeH1 = document.getElementById("home");
var services = document.getElementById("services");
var supported = document.getElementById("supported");
var regNow = document.getElementById("reg-now");
var footer = document.getElementById("footer");
// var languageSel = document.getElementById("language-selector");
// var search = document.getElementById("search");
var topicr_p = document.getElementById("topicr_p");
var topicr_h3 = document.getElementById("topicr_h3");
var topicl_h3 = document.getElementById("topicl_h3");
var topicl_p = document.getElementById("topicl_p");
var navbar_logo = document.getElementById("navbar_logo");
var popularQuestions_icon_right = document.getElementsByClassName("popularQuestions_icon_right");
var popularQuestions = document.getElementById("popularQuestions");
var contact = document.getElementById("contact");
var card_footer = document.getElementById("card-inner-content");
var copyright_content = document.getElementById("copyright-content");

var register = document.getElementById("register");
var login = document.getElementById("login");
var register_now_btn = document.getElementById("register-now-btn");
var login_section = document.getElementById("login-section");
var mail_dark= document.getElementById("mail-dark");
var mail= document.getElementById("mail");

// var cardParent = document.getElementById("cardParent");

register_now_btn.addEventListener('click', function () {
    open('register.html', '_self');
})

navbar_logo.addEventListener('click', function () {
    open('index.html', '_self');
})

register.addEventListener("click", function () {
    open("register.html", "_self");
});
 
login.addEventListener("click", function () {
     open("login.html", "_self");
});
 

let slide =$('.card-inner h4').siblings('p')
    slide.slideUp();

$('.popularQuestions_icon_right').click( function (e) {
    let arrow_down = $(e.target).parents('.col-md-12').find('.popularQuestions_icon_right');
    let arrow_up = $(e.target).parents('.col-md-12').find('.popularQuestions_icon_up');
    let cardParent = $(e.target).parents('.col-md-12').find('.card-parent');
    
    let slide =$(e.target).parents('.col-md-12').find('p')
    slide.slideToggle();
    arrow_down.css('display', 'none');
    arrow_up.css('display', 'block');
    
    // console.log(slide);
    
    if (slide.slideDown() ) {
        console.log(cardParent);
    
        cardParent.addClass('opened')
        console.log('opened');
    }
    
})

$('.popularQuestions_icon_up').click( function (e) {
    let p = $(e.target).parents('.col-md-12').find('p');
    let arrow_down = $(e.target).parents('.col-md-12').find('.popularQuestions_icon_right');
    let arrow_up = $(e.target).parents('.col-md-12').find('.popularQuestions_icon_up');
    let cardParent = $(e.target).parents('.col-md-12').find('.card-parent');
   
    let slide =$(e.target).parents('.col-md-12').find('p')
    slide.slideToggle();
    arrow_down.css('display', 'block');
    arrow_up.css('display', 'none');

    if (slide.slideUp() ) {
        cardParent.removeClass('opened')
        console.log('opened');
    }
    
})


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
    popularQuestions.classList.toggle('night');
    contact.classList.toggle('night');
    login_section.classList.toggle('night');

    // mail_dark.css('d-block');
    // mail_dark.remove('d-none');

    // $('#mail').css('display', 'none');
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
        topicr_p.dir = 'rtl';
        topicr_h3.dir = 'ltr';
        topicl_h3.dir = 'rtl';
        topicl_p.dir = 'rtl';
        card_footer.dir = 'rtl';
        copyright_content.dir = 'rtl';

        popularQuestions_icon_right[0].style.transform = 'rotate(180deg)';
        for (let index = 0; index < popularQuestions_icon_right.length; index++) {
            popularQuestions_icon_right[index].style.transform = 'rotate(180deg)';
            
        }
    }
    else if(language === 'en'){
        topicr_p.dir = 'ltr';
        topicr_h3.dir = 'rtl';
        topicl_h3.dir = 'ltr';
        topicl_p.dir = 'ltr';
        card_footer.dir = 'ltr';
        copyright_content.dir = 'ltr';
        $('.checkbox').css('margin-bottom', '20px');
        
        for (let index = 0; index < popularQuestions_icon_right.length; index++) {
            popularQuestions_icon_right[index].style.transform = 'rotate(360deg)';
        }
    }

    // languageSel.classList.toggle('active-lang');

    // if (languageSel.classList.contains('active-lang')) {
    //     search.a("placeholder").value = "ضع رابط الملف هنا"
    //     console.log("asa");
    // }



    document.dir = language === 'ar' ? 'rtl' : 'ltr';
}
setLanguage(localStorage.getItem('lang'));


$('#popularQuestions_link').click(function () {
    $('#popularQuestions').css('display', 'block');
    $('#popularQuestions').removeClass('d-none');
    
    // $('#contact').css('display', 'block');
    $('#contact').addClass('d-none');
    
    $('#arrow-top').addClass('d-none');

    $('main').css('display', 'none');
    $('main').removeClass('d-flex');
    
    $('#topics').css('display', 'none');
    $('#services').css('display', 'none');
    $('#supported').css('display', 'none');
    
    $('#reg-now').css('display', 'none');
    $('#reg-now').removeClass('d-flex');
})

//Contact page 
$('#contact_link').click(function () {
    $('#contact').css('display', 'block');
    $('#contact').removeClass('d-none');
    
    // $('#popularQuestions').css('display', 'block');
    $('#popularQuestions').addClass('d-none');
    
    $('#arrow-top').addClass('d-none');


    $('main').css('display', 'none');
    $('main').removeClass('d-flex');
    
    $('#topics').css('display', 'none');
    $('#services').css('display', 'none');
    $('#supported').css('display', 'none');
    
    $('#reg-now').css('display', 'none');
    $('#reg-now').removeClass('d-flex');
})


})
