// this spread (...) used to take all the element and expand it

// example 1
function sum(x, y, z, w, b) {
  return x + y + z + w + b;
}

const numbers = [1, 2, 3, 5, 6];

console.log(sum(...numbers));
console.log(sum.apply(null, numbers));

// example 2
var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];

console.log(arr);
console.log(arr[3]);

var arr = [2, 4, 8, 6, 0];
var max = Math.max(...arr);

console.log(max);

const word = "hello";
const word_spread = [...word];
console.log(word_spread);
