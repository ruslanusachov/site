// Toggling section "About Lady Look"

var head = document.getElementsByClassName('custome-heading')[0];
var aboutUs = document.getElementById('about-us');
head.onclick = function () {
  aboutUs.classList.toggle('disappear');
};




//  window.onscroll = function showBtn() {
//    if(window.pageYOffset >= 400){

//      toTop.classList.remove('hidden');

//    } else if(window.pageYOffset < 400){

//      toTop.classList.add('hidden');

//    }
//  };

//  window.onscroll = function() {

//   if(window.pageYOffset >= 400){
//     toTop.classList.remove ('disappear');
//   }

// }




function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
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