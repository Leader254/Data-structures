function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort([3, 5, 6, 2, 5, 7, 1, -20]));
