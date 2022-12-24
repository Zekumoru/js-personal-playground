export default class QuickSort {
  static sort(array) {
    QuickSort.#sort(array, 0, array.length - 1);
  }

  static #sort(array, lowIndex, highIndex) {
    if (lowIndex >= highIndex) return;

    // get pivot
    const pivot = array[highIndex];

    let newPivotIndex = QuickSort.#partition(array, lowIndex, highIndex, pivot);
    
    if (array[newPivotIndex] > array[highIndex]) QuickSort.#swap(array, newPivotIndex, highIndex);
    else newPivotIndex = highIndex;

    QuickSort.#sort(array, lowIndex, newPivotIndex - 1);
    QuickSort.#sort(array, newPivotIndex + 1, highIndex);
  }

  static #partition(array, lowIndex, highIndex, pivot) {
    let leftPointer = lowIndex;
    let rightPointer = highIndex - 1;

    while (leftPointer < rightPointer) {
      while (array[leftPointer] <= pivot && leftPointer < rightPointer) {
        leftPointer++;
      }

      while (array[rightPointer] >= pivot && leftPointer < rightPointer) {
        rightPointer--;
      }

      QuickSort.#swap(array, leftPointer, rightPointer);
    }

    return leftPointer;
  }

  static #swap(array, firstIndex, secondIndex) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
  }
}
