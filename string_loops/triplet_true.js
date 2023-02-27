// Your code here
function tripletTrue(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		let next_char = str[i + 1];
		if(char === next_char) {
			count += 1;
		}
		if (count > 2) {
			return true;
		}
	}
	return false;
}


console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
