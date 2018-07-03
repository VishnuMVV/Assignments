
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

window.addEventListener("resize", function() {
  document.getElementById("sample").innerHTML = alert("Maximize");
});

var make = document.getElementById("myBtn");
make.addEventListener("click", mDown);
make.addEventListener("mouseover", mOver);
make.addEventListener("mouseout", mOut);

function capture() {
  alert("You are captured");
}
function mOver(ob) {
  ob.innerHTML = "Welcome";
  document.getElementById("sample").innerHTML = "mouseover";
}
make.removeEventListener("click",mDown);
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

function myFunction(event) {
  var x = event.bubbles;
  document.getElementById("sample1").innerHTML =
    x + " => Bubble event is active";
    if(event.x == 2) event.stopPropagation();
}


function insert_Row() {
  var x = document.getElementById("sampleTable").insertRow(0);
  var y = x.insertCell(0);
  var z = x.insertCell(1);
  y.innerHTML = "New Cell1";
  z.innerHTML = "New Cell2";
}
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
