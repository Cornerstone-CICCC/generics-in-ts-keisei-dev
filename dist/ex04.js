"use strict";
// Write a generic function called `getFirstElement` that accepts an array of type `T[]` and returns the first element.
// Create test cases using arrays of various types to demonstrate that the function works correctly.
// Don't forget to cover the situation where the array is empty.
function getFirstElement(items) {
    if (items.length === 0) {
        return undefined;
    }
    return items[0];
}
console.log(getFirstElement([10, 20, 30]));
console.log(getFirstElement(['x', 'y']));
console.log(getFirstElement([]));
