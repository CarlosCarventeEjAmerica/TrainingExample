"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// normal funtions
function print() {
    console.log('Printing...');
}
//funtion expressions
var addnumbers = function (num1, num2) {
    return num1 + num2;
};
addnumbers(1, 2);
//arrow fiunctions
var multiplyNumber = function (num1, num2) {
    return num1 * num2;
};
multiplyNumber(2, 4);
var multiplyNumber2 = function (num1, num2) { return num1 * num2; };
//-------------------------------------------
//Spread operator (arrays and objects)
var numbers = [2, 10, 12, 14, 16];
var numbersduplicate = __spreadArray([], numbers);
var object = { name: 'Steve', age: 21 };
var objectdup = __assign({}, object);
function save(obj) {
    //mutate or modify
    obj.name = 'tom';
    //save obj to db
}
save(__assign({}, object));
//Destructuring Operator (array and object)
var myHobbies2 = ['baseball', 'cooocking'];
// const hobby1 = myHobbies2[0];
// const hobby2 = myHobbies2[1];
var hobby1 = myHobbies2[0], hobby2 = myHobbies2[1];
var userData2 = { name: 'Carlos', age: 24 };
// const userName = userData2.name;
// const userAge = userData2.age;
var userAge = userData2.age, userName = userData2.name;
//----------------------------------------
//Template literals (string)
var userName3 = 'Carlos';
var greeting = 'Hello' + userName3;
console.log(greeting);
var greeting2 = "Hello " + userName3 + ",\n    I am cool";
console.log(greeting2);
;
