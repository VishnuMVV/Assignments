var objectKey = { foo: "bar" };

var x = new Map();
x.set(1, "keys are not converted to strings");
x.set("1", "this is stored separately than the previous value");
x.set(objectKey, ["you use arbitrary objects as keys and values"]);
console.log(x.get(1));
console.log(x.get("1"));
console.log(x.get(objectKey));
console.log("");
var fromArray = new Map([[0, "array0"], [objectKey, "array1"]]);

console.log(fromArray.get(0));
console.log(fromArray.get(objectKey));
console.log("");

var generator = function*() {
  yield [0, "generator0"];
  yield [objectKey, "generator1"];
};
var fromGenerator = new Map(generator());
console.log(fromGenerator.get(0));
console.log(fromGenerator.get(objectKey));
var myMap = new Map();
var keyString = "a string",
  keyObj = {},
  keyFunc = function() {};
// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");
myMap.size; // 3
console.log("");
// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc));
console.log("");
var x2 = new Map([["a", "value A"], ["b", "value B"], ["c", "value C"]]);
console.log(x.size);
x2.set("d", "value D");
console.log(x2.size);
x2.clear();
console.log(x2.size);
console.log("");
var kvArray = [["key1", "value1"], ["key2", "value2"]];
var myMap = new Map(kvArray);
myMap.get("key1"); // returns "value1"
console.log(Array.from(myMap)); 
console.log(Array.from(myMap.keys())); // Will show ["key1", "key2"]
console.log("")
//For ...each loop for Map
console.log("For each loop for Map")
var x3 = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);

x3.forEach(function(value, key, map) {
  console.log('key: "' + key + '", value: "' + value + '"');
});
console.log("")
//For ...of loop for Map
console.log("For of loop for Map")
var x4 = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);
for (var value of x4) {
  console.log(value);
}