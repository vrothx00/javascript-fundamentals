function vowelCipher(string) {
    // your code here
	let vowels = "aeiou";
	let code = '';
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		if(vowels.includes(char)) {
			let idx = vowels.indexOf(char);
			code += vowels[(idx + 1) % vowels.length];
		} else {
			code += char;
		}
	}
	return code;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
