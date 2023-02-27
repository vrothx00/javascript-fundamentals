// Your code here
function sillyString(word) {
	let new_word = '';
	let vowels = "aeiou";
	for(let i = 0; i < word.length; i++) {
		let char = word[i];
		if(vowels.includes(char)) {
			new_word += char + 'b' + char;
		} else {
			new_word += char;
		}
	}
	return new_word;
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
