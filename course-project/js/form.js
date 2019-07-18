var err = false;


function validate() {
  
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');

var fnameValue = fname.value;
var lnameValue = lname.value;

  
     if(fnameValue != '' &&  fnameValue.length >= 3  ) {
       fname.classList.remove('error');
       err = false;
     } else  {
       fname.classList.add('error');
       err = true;
     }
     if(lnameValue != '' && lnameValue.length >= 3) {
       lname.classList.remove('error');
       err = false;
      
     } else  {
       lname.classList.add('error');
       err = true;
     }
  
  validateEmail();
  validatePassword();
  validateNum();

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
function validateNum() {
  var num = document.getElementById('num');
  var numValue = num.value;
  if (numValue != '' && !isNaN(numValue)) {
    err = false;
    num.classList.remove('error');
  } else {
    err = true;
    num.classList.add('error');
  }
  
}