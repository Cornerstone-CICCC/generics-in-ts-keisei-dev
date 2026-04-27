"use strict";
// Create a generic function named `safeAccess` that safely accesses nested properties of an object using an array of keys.
// Demonstrate the function with different object structures and key sequences, including arrays and objects.
function safeAccess(obj, keys) {
    let current = obj;
    for (let i = 0; i < keys.length; i++) {
        if (current === null || current === undefined) {
            return undefined;
        }
        if (typeof current !== 'object') {
            return undefined;
        }
        current = current[keys[i]];
    }
    return current;
}
const user = {
    profile: {
        name: 'Ken',
    },
};
console.log(safeAccess(user, ['profile', 'name']));
console.log(safeAccess(user, ['profile', 'age']));
const list = [['a', 'b'], { ok: true }];
console.log(safeAccess(list, ['0', '1']));
console.log(safeAccess(list, ['1', 'ok']));
console.log(safeAccess(list, ['9']));
