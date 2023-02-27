// Your code here
function hasThreeVowels(str) {
	let vowels = "aeiou";
	let counter_vowels = '';
	let counter = 0;

	for(let i = 0; i < str.length; i++) {
		let char = str[i];
		if(vowels.includes(char) && !counter_vowels.includes(char)) {
			counter += 1;
			counter_vowels += char;
		}
		if (counter > 2) {
			return true;
		}
	}
	return false;
}

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
