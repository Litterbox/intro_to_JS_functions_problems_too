// Write a function called greetOrInsult() that takes
// two arguments:
// 1) a person's name
// 2) a boolean value
//
// If the the second argument, the boolean, is true,
// then greet them nicely. If the second argument is
// false, then insult them! The function should return
// the result rather than logging it to the console.


// YOUR FUNCTION HERE!



// LEAVE EVERYTHING BELOW HERE ALONE
var beNice = greetOrInsult("Bob", true);
var beMean = greetOrInsult("Tim", false);
if (beNice === "Hello, Bob!") {
    console.log("Congratulations, you were nice to Bob.");
} else {
    console.log("Uh oh, you weren't nice to Bob :(");
}
if (beMean === "You smell, Tim!") {
    console.log("Congratulations, you were mean to Tim.");
} else {
    console.log("Uh oh, you weren't mean to Tim :(");
}
