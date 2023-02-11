"use strict";
function greeter(person) {
    return "Hello ".concat(person);
}
var user = 'John Doe';
document.body.textContent = greeter(user);
