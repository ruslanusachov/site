

// var num = prompt("Age", 18);
// var age = num;

// function checkAge(age){
//   return ( age > 18) ? true : confirm("Would your parents mind?");
// }
var modal = document.getElementById('my-modal');
var btn = document.getElementById('buy');
var close = document.getElementsByClassName('close')[0];

btn.onclick = function openModal() {
modal.style.display = 'block';
}

close.onclick = function close() {
  modal.style.display = 'none';
}

window.onclick = function(event) {

  if(event.target == modal) {
    modal.style.display = 'none';
  }
}