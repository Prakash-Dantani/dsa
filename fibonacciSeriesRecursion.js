const fibonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


let num = 7;
console.log("Fibonacci series of 5 numbers is:");

// for loop to print the fibonacci series.
for (let i = 0; i <= num; i++) {
    console.log(fibonacci(i) + " ");
}