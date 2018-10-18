// example 1
(function(num) {    
    console.log(num); // prints 10 to the console immediately
})(10)



// example 2
(function(){
    let num = 10;
    console.log(num);
})()

console.log(num); //ReferenceError: num is not defined

