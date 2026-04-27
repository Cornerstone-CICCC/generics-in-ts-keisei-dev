"use strict";
// Create a function called concatSum that takes two generic arguments.
// These arguments could be strings or numbers. If both are strings, use the concat method; otherwise, just sum the numbers.
// If they are not of the same type, print an error message to the console; If they are not string or number, print an error message
function concatSum(a, b) {
    const okA = typeof a === 'string' || typeof a === 'number';
    const okB = typeof b === 'string' || typeof b === 'number';
    if (!okA || !okB) {
        console.error('Error: both values must be string or number.');
        return undefined;
    }
    if (typeof a !== typeof b) {
        console.error('Error: both values must be the same type (both string or both number).');
        return undefined;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    return a + b;
}
console.log(concatSum('hello', ' world'));
console.log(concatSum(10, 5));
console.log(concatSum('a', 1));
console.log(concatSum({}, 1));
