function mergeSort(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function merge(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = merge(arr.slice(0, mid));
    let right = merge(arr.slice(mid));
    return mergeSort(left, right);
}

console.log(merge([57,6,7,4,3,35,8,34]))