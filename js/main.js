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
function mOver(ob) {
  ob.innerHTML = "Welcome";
}
function mOut(ob) {
  ob.innerHTML = "ThankYou";
}
function mDown(ob) {
  ob.innerHTML = "Succesfully Entered";
}
function mUp(ob) {
  ob.innerHTML = "You leaved";
}
function displaydate() {
  document.getElementById("sample").innerHTML = Date();
}
