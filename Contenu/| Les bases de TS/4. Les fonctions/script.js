"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiply(num1, num2, action) {
    return num1 * num2;
}
console.log(multiply(6, 10));
let foo;
foo = () => { };
// Function signtures
let baz;
baz = (a, b) => a + b;
// Callback
function greeting(fn) {
    fn('Hello world');
}
const print = (msg) => {
    console.log(msg);
};
greeting(print);
//# sourceMappingURL=script.js.map