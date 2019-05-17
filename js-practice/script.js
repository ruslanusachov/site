

var num = prompt("Age", 18);
var age = num;

function checkAge(age){
  return ( age > 18) ? true : confirm("Would your parents mind?");
}
