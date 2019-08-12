window.onscroll = function () {
   var elem2 = document.getElementsByClassName('to-top__img')[0];
    if(window.pageYOffset >= 680) {
      elem2.classList.remove('hidden');
    } else {
      elem2.classList.add('hidden');
    }
   var elem3 = document.getElementsByClassName('element')[1];
    if(window.pageYOffset >= 680) {
      elem3.classList.remove('hidden');
    } else {
      elem3.classList.add('hidden');
    }
    var elem4 = document.getElementsByClassName('element')[2];
    if(window.pageYOffset >= 1080) {
      elem4.classList.remove('hidden');
    } else {
      elem4.classList.add('hidden');
    }
}