
// function to generate unsorted int array
const generateArray = (arrayCount, maxVal) => {
    let arr = [];
    for (let i = 0; i < arrayCount; i++) {
        arr.push(Math.floor(Math.random() * Math.floor(maxVal)))
    }
    return arr;
}

let randomIntArray = generateArray(30, 10);
console.log(randomIntArray);

// find frequency distribution (histogram)
// iterate over array, set each value as a key of an object
const createFrequencyDistribution = (randomIntArray) => {
    let frequency = {};
    randomIntArray.forEach(int => {
        if (frequency[int.toString()]) {
            frequency[int.toString()] += 1;
        }
        else {
            frequency[int.toString()] = 1;
        }
    });
    return frequency;
}

let freqDist = createFrequencyDistribution(randomIntArray)

console.log(freqDist);

// find most common number
const getMostFrequentValue = (freqDist) => {
    let highestKvp = {};
    Object.entries(freqDist).forEach(([key, val]) => {
        if (Object.keys(highestKvp).length === 0) {
            highestKvp[key] = val;
        }

        if (val > highestKvp[Object.keys(highestKvp)[0]]) {
            highestKvp = {};
            highestKvp[key] = val;
        }
    });
    return highestKvp;
}

let mostFrequentValue = getMostFrequentValue(freqDist);
console.log(mostFrequentValue);