let outer = () => {
    let outerVariable = 1;
    return (innerVariable) => {
        console.log(outerVariable + innerVariable);
    }
}
let closure = outer();
closure(2); // 3