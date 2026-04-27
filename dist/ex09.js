"use strict";
// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.
class Stack {
    constructor() {
        this.list = [];
    }
    push(value) {
        this.list.push(value);
    }
    pop() {
        return this.list.pop();
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
console.log(numberStack.pop());
const stringStack = new Stack();
stringStack.push('first');
stringStack.push('second');
console.log(stringStack.pop());
