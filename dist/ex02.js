"use strict";
// Create a generic function named `identity` that takes a single argument of type `T` and returns that argument.
// Create a few test cases, such as using the function with numbers, strings, and custom objects to demonstrate its type flexibility.
function identity(value) {
    return value;
}
console.log(identity(42));
console.log(identity('TypeScript'));
const dog = { name: 'Pochi' };
console.log(identity(dog));
