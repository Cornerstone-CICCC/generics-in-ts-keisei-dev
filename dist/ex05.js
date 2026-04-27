"use strict";
// Develop a generic function named `duplicateElements` that takes an array of type `T[]` and a number `n`, and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values of `n`.
function duplicateElements(items, n) {
    const out = [];
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < n; j++) {
            out.push(items[i]);
        }
    }
    return out;
}
console.log(duplicateElements([1, 2], 3));
console.log(duplicateElements(['a', 'b'], 2));
console.log(duplicateElements([true, false], 1));
