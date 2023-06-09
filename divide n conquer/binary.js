// a function that returns the index of a value in a sorted given array
function search(array, val){
    let min = 0;
    let max = array.length - 1;
    while(min <= max){
        let middle = Math.floor((min + max)/2);
        let currentElement = array[middle];
        if(currentElement < val){
            min = middle + 1; //new min will be the current middle plus 1
        }
        else if (currentElement > val){
            max = middle - 1; 
        }
        else{
            return middle;
        }
    }
    return -1;
}
console.log(search([1,2,3,5,6,7,8,9,10],9));