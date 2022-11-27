// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// Question 1: Sum all numbers
// Write a function called sumRange. 
// It will take a number and return the sum of 
// all numbers from 1 up to the number passed in.
const q1 = {
  name: 'Question 1: Sum all numbers',
  input: 3,
  sumRange(n) {
    if (n == 0) return 0;
    return n + this.sumRange(n - 1);
  },
  solve() {
    return this.sumRange(this.input);
  }
}

function run(question) {
  console.log(question.name);
  console.log(question.solve());
}

run(q1);
