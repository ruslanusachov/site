function sendForm() {
  var name = document.getElementById('fname');
  var lname = document.getElementById('lname');

  var err = false;
  var nameValue = name.value;
  var lnameValue = lname.value;

  if (nameValue != '' && nameValue.length >= 3) {
    name.classList.remove('error');
    err = false;
  } else {
    name.classList.add('error');
    err = true;
  } 
  if (lnameValue != '' && lnameValue.length >= 3) {
    lname.classList.remove('error');
    err = false;
  } else {
    lname.classList.add('error');
    err = true;
  } 
  validateEmail();
  validateNum();

  if (!err) {
    form.submit()

  }
}

function validateEmail() {
  var email = document.getElementById('email');
  var emailValue = email.value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailValue != '' && re.test(String(email).toLowerCase())) {
    err = false;
    email.classList.remove('error');
  } else {
    err = true;
    email.classList.add('error');
  }

}
function validateNum() {
  var num = document.getElementById('number');
  var numValue = num.value;
  if (numValue != '' && !isNaN(numValue)) {
    err = false;
    num.classList.remove('error');
  } else {
    err = true;
    num.classList.add('error');
  }
  
}