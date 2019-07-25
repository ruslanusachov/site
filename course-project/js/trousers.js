var modal = document.getElementById('myModal');
var buyBtn = document.getElementsByClassName('buy-btn');
var closeBtn = document.getElementById('close');


// нужно итерировать массив элементов с классом buy-btn, а потом к каждому из них применить функцию.

for (var i = 0; i < buyBtn.length; i++) {

  buyBtn[i].onclick = function () {

    modal.classList.remove('none');

  };
  
}
closeBtn.onclick = function() {

  modal.classList.add('none'); 

}
window.onclick = function(event) {

if(event.target == modal){
  modal.classList.add('none'); 

}
};


// var modal = document.getElementById('signIn');
// var buyBtn = document.getElementById('acc');
// var closeBtn = document.getElementById('close');





//   acc.onclick = function () {

//     modal.classList.remove('none');

//   };
  

// closeBtn.onclick = function() {

//   modal.classList.add('none'); 

// }
// window.onclick = function(event) {

// if(event.target == modal){
//   modal.classList.add('none'); 

// }
// };
