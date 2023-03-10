function logBetweenStepper(n1, n2, step) {
    while (n1 <= n2) {
        console.log(n1);
        n1 += step;
    }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
5
6
7
8
9


logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15
