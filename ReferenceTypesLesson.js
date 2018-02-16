"use strict";

var a= true;
function foo(a) {
    a= false;
}
foo(a);
console.log(a)