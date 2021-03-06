/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/

function swap(arr, i, j) {
  if (i === j) {
    return;
  }
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition(arr, pivot, low, high) {
  let pivotIndex = low;
  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      swap(arr, pivotIndex, i);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, high);
  return pivotIndex;
}

function quickSort(arr) {
  if (!arr || arr.length <= 1) {
    return arr;
  }
  const pivot = arr.splice(Math.floor(arr.length / 2), 1);
  const left = [];
  const right = [];
  arr.forEach(num => {
    if (num < pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  });
  return []
    .concat(quickSort(left))
    .concat(pivot)
    .concat(quickSort(right));
}

const arr = [3, 7, 8, 4, 2, 1, 5];
console.log(quickSort(arr));
// console.log(partition(arr, 5, 0, arr.length - 1));
