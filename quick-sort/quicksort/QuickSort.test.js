import QuickSort from "./QuickSort";

test('that the array is sorted', () => {
  const array = [6, 8, 9, 4, 2, 1, 3];
  const isSorted = (array) => {
    return array.reduce((same, value, index) => {
      if (index === 0) return same;
      if (array[index - 1] > value) return false;
      return same;
    }, true);
  };

  QuickSort.sort(array);

  expect(isSorted(array)).toBe(true);
});
