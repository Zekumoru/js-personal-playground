// https://www.youtube.com/watch?v=mz6tAJMVmfM
// At 11:00
//
// Collatz conjecture
//
// If n is 1, stop.
// Otherwise, if n is even, repeat this process on n / 2.
// Otherwise, if n is odd, repeat this process on 3n + 1.
//

function collatz(n) {
  if (n <= 0) throw new Error('number must be a positive integer');

  console.log(n);
  if (n === 1) return;
  if (n % 2 === 0) return collatz(n / 2);
  return collatz(3 * n + 1);
}

collatz(27);
