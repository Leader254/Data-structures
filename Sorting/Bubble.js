function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j + 1]);
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
console.log(bubbleSort([100,76,45,89,69,23]));

// time complexity = O(n^2) since because we have a nested loop
// Best Case = O(n) for nearly sorted data
// Use it when the data is nearly sorted