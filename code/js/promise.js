// promises take a callback function
// first argument is the function that will execute if the code inside the promise completes or runs without error
// second argument is the function that will execute if the code inside the promise fail or encounters an error

// example 1
let myPromise = new Promise((successFunc, failureFunc) => {
    let ms = 3000 + new Date().getTime();

    while (new Date() < ms) {
        let isDone = true;
        if (isDone) {
            successFunc('success');
        }
        else {
            failureFunc('an error');
        }
    }
});

// create promise
// call .then() which (if true) calls the successFunc and then passes the word 'success'
// we can pick up that argument in the function that is passed to .then(). 
// below I have called it 'successMessage' and log it out
myPromise.then(successMessage => console.log(successMessage)).catch(errorMessage => console.log(errorMessage)); // 'success'


// example 2
// create 3 functions that return promises
// each promise simulates a success
// in the success function(s) (in the then method) we call the next function that returns the next promise
// allowing us to chain promises one after the other
let cleanRoom = () => {
    return new Promise((resolve, reject) => {
        resolve('cleaned the room');
    });
}

let removeGarbage = () => {
    return new Promise((resolve, reject) => {
        resolve('removed garbage');
    });
}

let getIceCream = () => {
    return new Promise((resolve, reject) => {
        resolve('win ice cream');
    });
}

cleanRoom().then(cleanedRoomMsg => {
    console.log(cleanedRoomMsg);
    return removeGarbage();
}).then(removedGarbageMsg => {
    console.log(removedGarbageMsg);
    return getIceCream();
}).then(iceCreamMsg => console.log(iceCreamMsg));

// "cleaned the room"
// "removed garbage"
// "win ice cream"