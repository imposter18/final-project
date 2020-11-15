export default function KOSTILY(){
var button = document.getElementById("buttonBuy");
var i = 0;
var g = localStorage.getItem("good");
document.getElementById("counter").innerHTML = g;
var i = i + +g;
button.addEventListener('click', function(e) {  
  i = (i + 1);
  document.getElementById("counter").innerHTML = i;
  localStorage.setItem("good", i);
});
}