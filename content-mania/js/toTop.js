var toTop = document.getElementsByClassName('to-top')[0];
  toTop.onclick = function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };