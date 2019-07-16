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



var whyUs = document.getElementById('advantages');


window.onscroll = function showBlock () {
    if (window.pageYOffset > 1370) {
    whyUs.classList.remove('hidden');

  }else if(window.pageYOffset < 1370) {
    
    whyUs.classList.add('hidden');

  } 
};


var toTop = document.getElementsByClassName('to-top')[0];
 toTop.onclick = function() {
   window.scrollTo(0, 1000);
   window.scrollTo({
     top: 1000,
     behavior: "smooth"
   });
 };