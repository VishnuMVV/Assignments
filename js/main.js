window.onload = checkCookies();
function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "cookies enabled";
  } else {
    text = "Please enable the cookies";
  }
  document.getElementById("sample").innerHTML = text;
}

window.addEventListener("resize", function(){
  document.getElementById("sample").innerHTML = alert("Maximize");
});

var make = document.getElementById("myBtn");
make.addEventListener("click",mDown);
make.addEventListener("mouseover",mOver);
make.addEventListener("mouseout",mOut);

function mOver(ob) {
  ob.innerHTML = "Welcome";
  document.getElementById("sample").innerHTML = "mouseover";
}

function mOut(ob) {
  ob.innerHTML = "ThankYou";
  document.getElementById("sample").innerHTML = "mouseout";
}

function mDown(ob) {
  ob.innerHTML = "Succesfully Entered";
  document.getElementById("sample").innerHTML = "mousedown";
}

function mUp(ob) {
  ob.innerHTML = "You leaved";
}

function displayDate() {
  document.getElementById("sample").innerHTML = Date();
}
