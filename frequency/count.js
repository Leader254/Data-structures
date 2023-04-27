// function to return count of characters in a string
function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // char code (0-9)
       !(code > 64 && code < 91) && // char code (A-Z)
       !(code > 96 && code <123))  // char code (a-z)
       {
        return false;
       }
       return true;
}
function charCount(str){
    var obj = {};
    for(let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            // if(obj[char] > 0){
            //     obj[char]++;
            // }
            // else{
            //     obj[char] = 1
            // }
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
console.log(charCount("hello World!"));
