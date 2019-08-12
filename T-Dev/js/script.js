
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
  var whiteText = document.getElementsByClassName('element');
  for(var i = 0; i < whiteText.length; i++) {
    if (isScrolledIntoView(whiteText[i])) {
      whiteText[i].classList.remove('hidden');
  
    } else {
      whiteText[i].classList.add('hidden');
    }
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
