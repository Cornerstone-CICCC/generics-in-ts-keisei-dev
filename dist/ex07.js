"use strict";
// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.
function filterByType(items, targetType) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        if (typeof items[i] === targetType) {
            result.push(items[i]);
        }
    }
    return result;
}
const mixed = [1, 'two', 3, 'four'];
const onlyStrings = filterByType(mixed, 'string');
console.log(onlyStrings);
const mixed2 = [true, 10, false, 20];
const onlyNumbers = filterByType(mixed2, 'number');
console.log(onlyNumbers);
