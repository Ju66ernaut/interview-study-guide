const fib = (index) => {
    if (index < 2) {
        return index;
    }
    let fibSequence = [0, 1];
    for (let i = 2; i <= index; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence[index];
}

console.log(fib(8)) // 21