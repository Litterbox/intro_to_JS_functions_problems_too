// Write a function that takes one argument,
// someone's name, and returns a string that
// says hello to them.

// Hint: this function will look similar to
// the function in part two, except is will
// NOT use console.log(). Instead it will use
// the return keyword.

// YOUR FUNCTION HERE
var makeGreeting = function (name) {
    return "Hello, " + name + "!";
};


// LEAVE EVERYTHING BELOW HERE ALONE
var helloFrank = makeGreeting("Frank");
var helloAlice = makeGreeting("Alice");
if (helloFrank === "Hello, Frank!") {
    console.log("Congratulations, you greeted Frank");
} else {
    console.log("Uh oh, you didn't greet Frank :(");
}
if (helloAlice === "Hello, Alice!") {
    console.log("Congratulations, you greeted Alice");
} else {
    console.log("Uh oh, you didn't greet Alice :(");
}
