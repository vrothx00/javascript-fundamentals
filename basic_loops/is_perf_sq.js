// your code here
function isPerfectSquare(num) {
    let i = 1;
    while (i <= num) {
        if(i * i === num) {
            return true;
        }
        i++;
    }
    return false;
}


console.log(isPerfectSquare(1))     // true
console.log(isPerfectSquare(4))     // true
console.log(isPerfectSquare(64))    // true
console.log(isPerfectSquare(100))   // true
console.log(isPerfectSquare(169))   // true
console.log(isPerfectSquare(2))     // false
console.log(isPerfectSquare(40))    // false
console.log(isPerfectSquare(32))    // false
console.log(isPerfectSquare(50))    // false
