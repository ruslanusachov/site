
window.onscroll = function() {
  var elem1 = document.getElementsByClassName('element')[0];
  if(window.pageYOffset >= 624) {
    elem1.classList.remove('hidden');
  } else {
    elem1.classList.add('hidden');
   } 
   var elem2 = document.getElementsByClassName('element')[1];
   if(window.pageYOffset >= 1027) {
    elem2.classList.remove('hidden');
  } else {
    elem2.classList.add('hidden');
   }
   var elem3 = document.getElementsByClassName('element')[2];
   if(window.pageYOffset >= 1632) {
    elem3.classList.remove('hidden');
  } else {
    elem3.classList.add('hidden');
   }
   var elem4 = document.getElementsByClassName('element')[3];
   if(window.pageYOffset >= 2531) {
    elem4.classList.remove('hidden');
  } else {
    elem4.classList.add('hidden');
   }
   var toTopBtn = document.getElementsByClassName('to-top__img')[0];
   if(window.pageYOffset >= 624) {
    toTopBtn.classList.remove('hidden');
  } else {
    toTopBtn.classList.add('hidden');
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