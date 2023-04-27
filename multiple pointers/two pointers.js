// a function that accepts a sorted array and returns the pair which when added up returns 0
// example is [-3,-2,-1,0,1,2,3] here the pair [-3,3] returns zero when the two are added together;
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }
        else if(sum > 0){
            right--;
        }
        else{
            left++;
        }
    }
}
console.log(sumZero([-3,-2,-1,0,1,2]));