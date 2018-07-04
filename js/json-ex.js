//parse()
var x = JSON.parse('{"foo": 1, "bar": 2}');
console.log(x.foo);
console.log(x.bar);
console.log("");

//reviver function for JSON
var reviver = function(key, value) {
  console.log('reviver called with key="' + key + '", value=' + value);
  if (key === "foo") {
    return value * 10;
  }
  return value;
};
var p = JSON.parse('{"foo": 1, "bar": 2}', reviver);
console.log(p.foo);
console.log(p.bar);
console.log("");

//stringify function
console.log("stringify method of JSON")
var t = { foo: 1, bar: 2 };
console.log(JSON.stringify(t));

t.toJSON = function() {
  return { baz: 3 };
};
console.log(JSON.stringify(t));

var x = { foo: 1, bar: 2 };
console.log(JSON.stringify(x, ["foo"]));
//replacer function of JSON
var rpl = { foo: 1, bar: 2 };
var replacer = function(key, value) {
  console.log('replacer called with key="' + key + '", value=' + value);
  if (key === "foo") return value * 10;
  return value;
};
console.log(JSON.stringify(rpl, replacer, " "));
