// https://javascript.info/recursion#sum-all-numbers-till-the-given-one
//
// Write a function sumTo(n) that calculates 
// the sum of numbers 1 + 2 + ... + n.
//

const forLoop = {
  name: 'forLoop',
  sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    return sum;
  }
};

const recursion = {
  name: 'recursion',
  sumTo(n) {
    if (n == 0) return 0;
    return n + recursion.sumTo(n - 1);
  }
};

const arithProgression = {
  name: 'arithProgression',
  sumTo(n) {
    return (n * (1 + n)) / 2;
  }
}

function run(obj, n) {
  console.log(`${obj.name}: ${obj.sumTo(n)}`)
}

function runTest(obj, n) {
  console.time(obj.name);
  obj.sumTo(n);
  console.timeEnd(obj.name);
}

runTest(forLoop, 100);
runTest(recursion, 100);
runTest(arithProgression, 100);
