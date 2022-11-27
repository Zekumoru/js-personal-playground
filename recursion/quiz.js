// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

class Question {
  constructor(name, input, object = {}) {
    this.name = name;
    this.input = input;
    Object.entries(object).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  solve() {
    throw new Error('Unimplemented solution');
  }
}

// Question 1: Sum all numbers
// Write a function called sumRange. 
// It will take a number and return the sum of 
// all numbers from 1 up to the number passed in.
const q1 = new Question('Question 1: Sum all numbers', 3, {
  sumRange(n) {
    if (n == 0) return 0;
    return n + this.sumRange(n - 1);
  },
  solve() {
    return this.sumRange(this.input);
  }
});

function run(question) {
  console.log(question.name);
  console.log(question.solve());
}

run(q1);
