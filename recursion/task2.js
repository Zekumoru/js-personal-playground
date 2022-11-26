// https://javascript.info/task/factorial
//
// Calculate factorial
//

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

const n = 5;
console.log(`Factorial of ${n} is ${factorial(n)}`);
