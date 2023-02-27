// your code here
function uncompress(str) {
	let word = '';

	for(let i = 0; i < str.length; i++) {
		char = str[i];

		if(Number(char)){
			let num = Number(char);
			let letter = str[i-1].repeat(num);
			word += letter;
		}
	}
	return word;
}




console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
