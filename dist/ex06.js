"use strict";
// Define a generic function named `createPair` that takes two arguments of types `A` and `B` and returns them as a pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B` parameters.
function createPair(first, second) {
    return [first, second];
}
console.log(createPair(1, 'one'));
console.log(createPair(true, 99));
console.log(createPair({ x: 1 }, [2, 3]));
