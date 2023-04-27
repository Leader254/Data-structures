// // similar to bubble sort but instead of placing large values in the sorted position,
// // it places smaller values in the sorted position.

// Older version
// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let lowest = i;
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }



// ES6 Version

function selectionSort(arr){
    const swap = (arr, indx1, indx2) =>
    ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);

    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[lowest] > arr[j]){
                lowest = j;
            }
        }
        if(i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}

console.log(selectionSort([9, 5, 23, 7, 8, 94, -1]));


// time complexity = O(n^2) comparing every element