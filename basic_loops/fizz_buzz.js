function fizzBuzz(max) {
    let i = 1;
    while (i < max) {
        if ((i % 3 === 0 || i % 5 === 0) && (i % 15 !== 0)) {
            console.log(i);
        }
        i++;
    }
}
// Examples:

fizzBuzz(20); // prints out:
3
5
6
9
10
12
18
