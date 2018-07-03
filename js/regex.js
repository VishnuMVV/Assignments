//To search for whether first letter is capital
function upper_case(str) {
  regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    console.log("String's first character is uppercase");
  } else {
    console.log("String's first character is not uppercase");
  }
}
upper_case("Abcd");
upper_case("abcd");

//pattern at index
let input = "A string with 3 numbers in it...and 42 and 88 were present.";
let number = /\b\d+\b/g;
let match;
while ((match = number.exec(input))) {
  console.log("Found", match[0], "at", match.index);
}

//To search dash,underscore in a string
function is_alphaDash(str) {
  regexp = /^[a-z0-9_\-]+$/i;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_alphaDash("12-133"));
console.log(is_alphaDash("100_23"));

//To replace whitespaces with special character
function Trim(str) {
  var result;
  if (typeof str === "string") {
    result = str.replace(/^\s+|\s+$/g, "#");
    return result;
  } else {
    return false;
  }
}
console.log(Trim(" developer "));

//To check the time
function is_timeString(str) {
  regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_timeString("11:35:30"));
console.log(is_timeString("90:90:90"));

//To check the value is hexadecimal or not
function is_hexadecimal(str) {
  regexp = /^[0-9a-fA-F]+$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_hexadecimal("ffffff"));
console.log(is_hexadecimal("fz5500"));

//to search a date in a string
function is_dateString(str) {
  regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_dateString("01/01/2015"));
console.log(is_dateString("01/22/2015"));
console.log(is_dateString("32/01/2015"));

//To chech for no. of vowels in a string
function vowel_count(str) {
  return str.match(/[aeiou]/gi).length;
}
vowel = vowel_count("The quick brown fox jumps over the lazy dog");
console.log(vowel);

//To chech for alphanumeric charactersin string
function is_alphaNumeric(str) {
  regexp = /^[A-Za-z0-9]+$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_alphaNumeric("37828sad"));
console.log(is_alphaNumeric("3243#$sew"));

//Domain name checking
function is_domain(str) {
  regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_domain("www.example.com"));
console.log(is_domain("www.npm.co.uk"));
console.log(is_domain("http://www.example.com"));
console.log(is_domain("https://www.example.com"));
console.log(is_domain("www.example.com"));

//to identify a credit card number
function is_creditCard(str) {
  regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_creditCard("378282246310006"));
console.log(is_creditCard("37828224630006"));
