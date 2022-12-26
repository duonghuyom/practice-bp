// rest (...) parameter used to allows us to quickly copy all or part of an existing
// array or object into another array or object.

const number = [1, 2, 3, 4, 5, 6, 7];

// sum of all the number in array
function summary(num) {
  let sum = 0;
  num.forEach((arg) => (sum += arg));
  return sum;
}

console.log(summary([...number]));

// sort the number in descending way
function sortRestArg(...arg) {
  return arg.sort();
}

console.log(sortRestArg(4, 3, 11, 3, 4, 1, 0));
