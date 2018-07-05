swapcase = function(str) {
  console.log("complete string " + str);
  return str.replace(/([a-z]+)|([A-Z]+)/g, function(match,cher) {
    console.log("match is " + match);
    console.log("cher is "+ cher);
    // return match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase();
    return cher ? match.toUpperCase() : match.toLowerCase();
  });
};
console.log(swapcase(" AaBbC "));
