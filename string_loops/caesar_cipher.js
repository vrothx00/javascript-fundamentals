// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    // your code here
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let code = '';
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		let idx = alphabet.indexOf(char);
		code += alphabet[(idx + num) % alphabet.length];
	}
	return code;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
