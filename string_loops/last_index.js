function lastIndex(str, char) {
    // your code here
	for(let i = str.length - 1; i >= 0; i--) {
		let letter = str[i];
		if(char === letter) {
			return i;
		}
 	}
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7
