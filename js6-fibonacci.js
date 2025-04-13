function fibonacci(n) {
    const fib = [0, 1]; 

    for (let i = 2; i < n; i++) {
     
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.slice(0, n);
}


const n = 60; 
const numeriFibonacci = fibonacci(n);
console.log(`I primi ${n} numeri di Fibonacci sono: ${numeriFibonacci}`);
