// both let and const do not follow the same hoisting fules that 'var' does
const someFunc = () => {
    const myArray = [1, 2];
    // const can be mutated in certain ways
    myArray.push(3); //acceptable

    // but cannot be reassigned
    // myArray = [] // not allowed;

    if (true) {
        var functionScopeVariable = 1000; // available anywhere in the function scope
        let blockScopeVariable = 10; // only available in this block
    }

    console.log(functionScopeVariable); // 1000
    console.log(v); // will log 'undefined' because of hoisting
    console.log(l); // will cause error because let (const too) is not hoisted to the top of the function

    var v = 'something';
    let l = 'something else!';
}

someFunc();
// 1000
// undefined
// error - l is not defined