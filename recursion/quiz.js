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

// Question 2: Power function
// Write a function called power which takes in a 
// base and an exponent. If the exponent is 0, return 1.
const q2 = new Question('Question 2: Power function', [2, 4], {
  power(base, exponent) {
    if (exponent == 0) return 1;
    return base * this.power(base, exponent - 1);
  },
  solve() {
    return this.power.apply(this, this.input);
  }
});

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number.
const q3 = new Question('Question 3: Calculate factorial', 5, {
  factorial(n) {
    if (n <= 1) return 1;
    return n * this.factorial(n - 1);
  },
  solve() {
    return this.factorial(this.input);
  }
});

function run(question) {
  console.log(question.name);
  console.log(question.solve());
}

// Question 4: Check all values in an array
// Write a function called all which accepts an array 
// and a callback and returns true if every value in the
// array returns true when passed as parameter 
// to the callback function
const q4 = new Question('Question 4: Check all values in an array', [
  [1, 2, 9],
  (n) => n < 7,
], {
  all(array, callback) {
    if (!array.length) return true;
    return this.all(array.slice(1), callback) && callback(array[0]);
  },
  solve() {
    const allAreLessThanSeven = this.all.apply(this, this.input);
    return allAreLessThanSeven;
  }
});

// Question 5: Product of an array
// Write a function called productOfArray which takes in
// an array of numbers and returns the product of them all
const q5 = new Question('Question 5: Product of an array', [1, 2, 3, 10], {
  productOfArray(array) {
    if (!array.length) return 1;
    return array[0] * this.productOfArray(array.slice(1));
  },
  solve() {
    return this.productOfArray(this.input);
  }
});

// Question 6: Search JS object
// Write a function called contains that searches for 
// a value in a nested object. It returns true if the
// object contains that value.
const q6 = new Question('Question 6: Search JS object', [
  {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 44,
              something: 'foo2'
            }
          }
        }
      }
    }
  },
  44
], {
  contains(object, value) {
    let found = false;
    Object.values(object).forEach((v) => {
      if (v === value) found = true;
      if (typeof v === 'object') found ||= this.contains(v, value);
    });
    return found;
  },
  solve() {
    return this.contains.apply(this, this.input);
  }
});

// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the 
// total number of integers stored inside this array
const q7 = new Question('Question 7: Parse a multi-dimensional array',
  [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]], {
  totalIntegers(array) {
    let counter = 0;
    for (const item of array) {
      if (typeof item === 'number') counter++;
      if (Array.isArray(item)) counter += this.totalIntegers(item);
    }
    return counter;
  },
  solve() {
    return this.totalIntegers(this.input);
  }
});

// Question 8: Sum of squares
// Write a function that sums squares of numbers 
// in list that may contain more lists
const q8 = new Question('Question 8: Sum of squares', [10,[[10],10],[10]], {
  sumSquares(array) {
    let sum = 0;
    for (const item of array) {
      if (typeof item === 'number') sum += item**2;
      if (Array.isArray(item)) sum += this.sumSquares(item);
    }
    return sum;
  },
  solve() {
    return this.sumSquares(this.input);
  }
});

// Question 9: Replicate number argument
// The function should return an array containing repetitions
// of the number argument. For instance, replicate(3, 5)
// should return [5,5,5]. If the times argument is negative,
// return an empty array.
const q9 = new Question('Question 9: Replicate number argument', [3, 5], {
  replicate(times, number) {
    if (times <= 0) return [];
    return [number].concat(this.replicate(times - 1, number));
  },
  solve() {
    return this.replicate.apply(this, this.input);
  }
});

function run(question) {
  console.log(question.name);
  console.log(question.solve());
}

run(q9);
