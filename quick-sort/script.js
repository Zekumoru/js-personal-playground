import MergeSort from '@zekumoru-dev/merge-sort';
import QuickSort from './quicksort/QuickSort.js';

printSortingTime('MergeSort', MergeSort);
printSortingTime('QuickSort', QuickSort);

function printSortingTime(label, sortingClass) {
  const array = [];
  for (let i = 0; i < 10000000; i++) {
    const randomInt = Math.floor(Math.random() * 10000000);
    array.push(randomInt);
  }

  console.time(label);
  sortingClass.sort(array);
  console.timeEnd(label);
}
