// frequency counter approach
// function that returns true if the second array has the squares of each element in array 1 and the frequency are the same
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let i of arr1){
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
    }
    for(let i of arr2){
        frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
     return true;
}
console.log(same([1,2,4,5], [1,4,16,25]));
