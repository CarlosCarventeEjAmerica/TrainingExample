"use strict";
//generics
function echo(data) {
    return data;
}
echo('String');
echo(21);
echo(true);
function betterEcho(data) {
    return data;
}
betterEcho('Hello');
betterEcho(21);
betterEcho(true);
betterEcho({ name: 'Carlos', age: 24 });
var myHobbies5 = ['cooking', 'noc'];
var myHobbies6 = ['cooking', 'noc'];
var myHobbies7 = [12, 14];
var myHobbies8 = [true, false];
var myHobbies9 = [{}, {}];
var Collection = /** @class */ (function () {
    function Collection() {
    }
    Collection.prototype.add = function (data) {
        console.log(data);
    };
    return Collection;
}());
var obj10 = new Collection();
obj10.add('Carlos');
var obj11 = new Collection();
obj11.add(21);
