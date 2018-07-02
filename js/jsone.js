let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterable) {
  console.log(entry);
}

for (let [key, value] of iterable) {
  console.log(key);
}