var is_array = function(input) {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));
console.log("");

var array_Clone = function(arra1) {
  return arra1.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log("");

var first = function(array, n) {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
console.log("");

var last = function(array, n) {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 2));
console.log("");

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));
console.log("");

const num = 121314;
const str = num.toString();
const result = [str[0]];
for (let x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push("-", str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(""));
console.log("");

var str1 = "c";
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
var result1 = [];
for (var x = 0; x < str1.length; x++) {
  if (UPPER.indexOf(str1[x]) !== -1) {
    result1.push(str1[x].toLowerCase());
  } else if (LOWER.indexOf(str[x]) !== -1) {
    result1.push(str1[x].toUpperCase());
  } else {
    result1.push(str1[x]);
  }
}
console.log(result1.join(""));
console.log("");

// a sample 2-D array
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];
for (var i in a) {
  console.log("row " + i);
  for (var j in a[i]) {
    console.log(" " + a[i][j]);
  }
}
console.log("");

function sum_sq(array) {
  var sum = 0,
    i = array.length;
  while (i--) sum += Math.pow(array[i], 2);
  return sum;
}
console.log(sum_sq([0, 1, 2, 3, 4]));
console.log("");

var array = [1, 2, 3, 4, 5, 6],
  s = 0,
  p = 1,
  i;
for (i = 0; i < array.length; i += 1) {
  s += array[i];
  p *= array[i];
}
console.log("Sum : " + s + " Product :  " + p);
console.log("");

function removeDuplicates(num) {
  var x,
    len = num.length,
    out = [],
    obj = {};

  for (x = 0; x < len; x++) {
    obj[num[x]] = 0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result2 = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result2);
console.log("");

function leap_year_range(st_year, end_year) {
  var year_range = [];
  for (var i = st_year; i <= end_year; i++) {
    year_range.push(i);
  }
  var new_array = [];
  year_range.forEach(function(year) {
    if (test_LeapYear(year)) new_array.push(year);
  });
  return new_array;
}
function test_LeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
}
console.log(leap_year_range(2000, 2012));
console.log("");

function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));
