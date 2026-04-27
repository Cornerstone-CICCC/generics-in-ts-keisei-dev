"use strict";
// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.
class Dictionary {
    constructor() {
        this.storage = new Map();
    }
    add(key, value) {
        this.storage.set(key, value);
    }
    get(key) {
        return this.storage.get(key);
    }
    delete(key) {
        this.storage.delete(key);
    }
}
const scores = new Dictionary();
scores.add('Ann', 90);
scores.add('Bob', 75);
console.log(scores.get('Ann'));
scores.delete('Bob');
console.log(scores.get('Bob'));
const byId = new Dictionary();
byId.add(1, 'apple');
byId.add(2, 'banana');
console.log(byId.get(2));
