// Your code here
function moreDotLessDash(word) {
	let dots = 0;
	let dashs = 0;
	for(let i = 0; i < word.length; i++) {
		char = word[i];
		if(char === '.') {
			dots += 1;
		}
		if (char === '-') {
			dashs += 1;
		}
	}
	return dots > dashs;
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
