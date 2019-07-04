// Toggling section "About Lady Look"

var head = document.getElementsByClassName('custome-heading')[0];
var aboutUs = document.getElementById('about-us');
head.onclick = function () {
   aboutUs.classList.toggle('disappear');
 };


//  var aboutUs = document.getElementById('about-us');

//  window.onscroll = function() {
   
//    if (window.pageYOffset > 1328) {
//    return aboutUs.classList.remove('hidden');
//    }
//  };
var arrow = document.getElementsByClassName('to-top')[0];
window.onscroll = function showArrow() {
  if (window.pageYOffset > 800) {
    arrow.classList.remove('hidden');
  } else {
     arrow.classList.add('hidden');
  }
};

var whyUs = document.getElementById('advantages');

window.onscroll = function showWhyUs() {
    
  if (window.pageYOffset > 1370) {
    whyUs.classList.remove('hidden');
  } else {
    whyUs.classList.add('hidden');

  }

};

