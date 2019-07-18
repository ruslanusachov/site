var toTop = document.getElementsByClassName('to-top')[0];
toTop.onclick = function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
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