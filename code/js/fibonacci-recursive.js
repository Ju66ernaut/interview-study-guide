const fib = (index) => {
    if (index < 2) {
        return index;
    }
    return fib(index - 1) + fib(index - 2);
}
console.log(fib(7)) // 13