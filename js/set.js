var x = new Set();
x.add(1);
x.add("a");
x.add({ foo: "bar" });
for (var item of x) {
  console.log(item);
}
console.log("");

console.log("size operations on set");
var y = new Set(["a", "b", "c"]);
console.log(y.size);
y.add("d");
console.log(y.size);
y.clear();
console.log(y.size);
console.log("");

console.log("finding and deleting properties in a set");
const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1.has(1));
console.log(set1.has(6));
set1.delete(3);
console.log(set1);
console.log("");

//Set using with an array 
console.log("Set using with an array")
var myArray = ["value1", "value2", "value3"];
var mySet = new Set(myArray);
mySet.has("value1"); // returns true
// Use the spread operator to transform a set into an Array.
console.log([...mySet]);
console.log("")

//set with string
console.log("Set using with string")
var text = 'India';
var mySet1 = new Set(text);  // Set ['I', 'n', 'd', 'i', 'a']
console.log(mySet1);
console.log(mySet1.size);

//set using generator function
console.log("set using generator function")
var fromArray = new Set([1, "1", { foo: "bar" }]);
for (var item of fromArray) {
  console.dir(item);
}
var generator = function*() {
  yield 3;
  yield "javascript";
};
var fromGenerator = new Set(generator());
console.log(fromGenerator);
console.log("");
