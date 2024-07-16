$(function() {
  // login
var logEmail=document.getElementById("logEmail");
var logPass=document.getElementById('logPass');
var login_btn = document.getElementById('login_btn');
var logError =  document.getElementById('logError');
var register = document.getElementById("register");
var login = document.getElementById("login");
var login_section = document.getElementById("login-section"); 

register.addEventListener("click", function () {
   open("register.html", "_self");
});

login.addEventListener("click", function () {
    open("login.html", "_self");
});

darkmode.addEventListener('click', function () {
  login_section.classList.toggle('night');
})

var signinList;
// localStorage
if (localStorage.getItem('signinList')) {
    signinList=JSON.parse(localStorage.getItem('signinList'));
  }
  else{
    signinList=[]; 
  }

//Login 
 
  login_btn.addEventListener('click',function(){    
    for (let i = 0; i < signinList.length; i++) {
    if (logEmail.value==signinList[i].email && logPass.value==signinList[i].pass) {
        open('home.html',"_self")
    }else{
      logError.classList.replace('d-none','d-block');
    } 
  }
  })
  

})