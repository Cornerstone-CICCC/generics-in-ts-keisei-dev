"use strict";
// Develop a generic function named `customMap` that takes an array of type `T[]` and a mapping function `mapper: (item: T) => U`, and returns a new array of type `U[]`.
// Test the function with arrays of different types and custom mapping functions.
function customMap(items, mapper) {
    const next = [];
    for (let i = 0; i < items.length; i++) {
        next.push(mapper(items[i]));
    }
    return next;
}
const doubled = customMap([1, 2, 3], (n) => n * 2);
console.log(doubled);
const lengths = customMap(['hi', 'hello'], (s) => s.length);
console.log(lengths);
const greetings = customMap([{ name: 'Ken' }], (u) => 'Hello ' + u.name);
console.log(greetings);
