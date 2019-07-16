var toTop = document.getElementsByClassName('to-top')[0];
 toTop.onclick = function() {
   window.scrollTo(0, 1000);
   window.scrollTo({
     top: 1000,
     behavior: "smooth"
   });
 };

window.onscroll = function showBtn() {
  if(window.pageYOffset >= 400){

    toTop.classList.remove('hidden');
    
  } else if(window.pageYOffset < 400){

    toTop.classList.add('hidden');
    
  }
};