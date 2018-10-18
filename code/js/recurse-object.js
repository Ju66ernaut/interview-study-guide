// given a JSON
// print out all key, value pairs where the value is a number
// assuming each key is unique

let obj = {
    'a': 1,
    'b': 2,
    'c': [],
    'd': {
        'e': 3,
        'f': 'g',
        'h': [4, 5]
    },
    'i': {
        'j': {
            'k': [6],
            'l': 'm',
            'n': 7
        }
    }
}

const iterateObject = (obj) => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'number') {
            console.log(`Key: ${key}, Value: ${obj[key]}`);
        }
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            iterateObject(obj[key]);
        }
    })
}

iterateObject(obj);
// "Key: a, Value: 1"
// "Key: b, Value: 2"
// "Key: e, Value: 3"
// "Key: n, Value: 7"