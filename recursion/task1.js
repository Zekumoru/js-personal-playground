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

function run(obj, n) {
  console.log(`${obj.name}: ${obj.sumTo(n)}`)
}

run(forLoop, 100);
