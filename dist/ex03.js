"use strict";
// Implement a generic function named `reverseArray` that takes an array of type `T[]` and reverses the order of elements in the same array.
// Provide test cases using arrays of different types, including numbers, strings, and custom objects.
function reverseArray(items) {
    let left = 0;
    let right = items.length - 1;
    while (left < right) {
        const tmp = items[left];
        items[left] = items[right];
        items[right] = tmp;
        left++;
        right--;
    }
    return items;
}
const nums = [1, 2, 3];
reverseArray(nums);
console.log(nums);
const words = ['a', 'b', 'c'];
reverseArray(words);
console.log(words);
const boxes = [{ id: 1 }, { id: 2 }];
reverseArray(boxes);
console.log(boxes);
