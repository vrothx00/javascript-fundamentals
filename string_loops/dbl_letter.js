function doubleLetterCount(string) {
    // your code here
	let counter = 0;
	for(let i = 0; i < string.length; i++) {
		let char = string[i];
		let next_char = string[i + 1];
		if(char === next_char) {
			counter += 1;
		}
	}
	return counter;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
