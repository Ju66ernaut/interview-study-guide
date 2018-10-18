const sumThreeValues = (x) => {
    return (y) => {
        return (z) => {
            return x + y + z;
        };
    };
}
console.log(sumThreeValues(1)(2)(3)) // 6