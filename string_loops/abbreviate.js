// your code here
function abbreviate(word) {
	let vowels = "aeiou";
	word = word.toLowerCase();
	let abb_word = '';
	for(let i = 0; i < word.length; i++) {
		let char = word[i];
		if (!vowels.includes(char)) {
			abb_word += char;
		}
	}
	return abb_word;
}





console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
