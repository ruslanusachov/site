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