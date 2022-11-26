// https://javascript.info/task/fibonacci-numbers
//
// Fibonacci numbers
//

const forLoop = {
  name: 'forLoop',
  fib(n) {
    if (n == 0) return 0;
    
    let current = 1;
    let previous = 0;
    
    for (let i = 1; i < n; i++) {
      const sum = current + previous;
      previous = current;
      current = sum;
    }
    
    return current;
  }
};

const recursion = {
  name: 'recursion',
  fib(n) {
    if (n == 0) return 0;
    if (n <= 2) return 1;
    return this.fib(n - 1) + this.fib(n - 2);
  }
};

function run(obj, n) {
  console.log(obj.fib(n));
}

run(forLoop, 77);
