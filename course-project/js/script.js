// Toggling section "About Lady Look"

var head = document.getElementsByClassName('custome-heading')[0];
var aboutUs = document.getElementById('about-us');
head.onclick = function () {
  aboutUs.classList.toggle('disappear');
};






function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  return isVisible;
}

window.onscroll = function showBlock() {
  var whyUs = document.getElementById('advantages');

  if (isScrolledIntoView(whyUs)) {
    whyUs.classList.remove('hidden');

  } else {
    whyUs.classList.add('hidden');
  }
};


var toTop = document.getElementsByClassName('to-top')[0];
toTop.onclick = function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

};


var modal = document.getElementById('myModal');
var buyBtn = document.getElementById('acc');
var closeBtn = document.getElementById('close');





  acc.onclick = function () {

    modal.classList.remove('none');

  };
  

closeBtn.onclick = function() {

  modal.classList.add('none'); 

}
window.onclick = function(event) {

if(event.target == modal){
  modal.classList.add('none'); 

}
};



var err = false;
var btnSub = document.getElementById('btnSub');

btnSub.onclick = function(e) {
  e.preventDefault();
  validate();
};

function validate() {
  validateEmail();
  validatePassword();
    
  if(!err) {
    form.submit();
  }
}
function validateEmail() {
  var email = document.getElementById('email');
  var emailValue = email.value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailValue != '' && re.test(String(emailValue).toLowerCase())) {
    email.classList.remove('error');
    err = false;

  } else {
    email.classList.add('error');
    err = true;

  }

}
function validatePassword() {
  var password = document.getElementById('password');
  var passwordValue = password.value;

  if(passwordValue != '' &&  passwordValue.length >= 3  ) {
    password.classList.remove('error');
    err = false;
  } else  {
    password.classList.add('error');
    err = true;
  }
}