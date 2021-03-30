"use strict";
//console.log('Hello World');
// Primitive types
// let xyz = 'Steve'
// xyz = 'Tom2';
// console.log(xyz);
var myName = 'Steve';
myName = 'Tom';
var myAge = 21;
var hasJob = true;
var color = 'white';
color = 12345;
console.log(myName);
console.log(myAge);
//reference type
//array
var myHobbies = ['cooking', 'baseball'];
myHobbies = ['dkkd', 'dkkd'];
//Tuple
var myAddress = ['park street', 23];
myAddress = ['Eucalipto', 2];
//enums
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Red;
//funtion
function sayHello(name) {
    //console.log('Hi my dear',name);
    //return `Hello $(name)`;
    return "Hello $(name)";
}
//sayHello('Carlos');
var result = sayHello('Steve');
function print() {
    console.log('Printing ...');
}
print();
function multiply(num1, num2) {
    return num1 * num2;
}
multiply(10, 10);
function PrintMe(data) {
    return "Hello $(data)";
}
// funtion type
var greetings;
greetings = sayHello;
greetings = PrintMe;
greetings('Steve');
//Object
var user = {
    name: 'Carlos',
    age: 21,
    hobbies: ['Cooking', 'baseball'],
    print: function (data) {
        console.log(data);
    }
};
user.print('Steve');
