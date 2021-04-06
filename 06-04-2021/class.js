"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//object literal 
var obj3 = {
    name: 'Carlos',
    age: 24,
    printAge: function () {
        console.log('Age....');
    }
};
obj3.printAge();
// class
//template/ blue print
//scope : public private protected
//Inicialization: Constructors
//Setters and getters
var Person = /** @class */ (function () {
    function Person(name, age) {
        // private age: number;
        this.type = 'Person';
        this.name = name;
        this.age = age;
    }
    Person.prototype.printAge = function () {
        console.log('Age.....');
    };
    return Person;
}());
//using the template/blue print
var john = new Person('Carlos', 24);
john.printAge();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, major) {
        var _this = _super.call(this, name, age) || this;
        _this.major = '';
        _this.major = major;
        return _this;
    }
    return Student;
}(Person));
var mike = new Student('Mike', 2, 'Maths');
////----------Setters and getters
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = '';
        this._age = 0;
    }
    Object.defineProperty(Person1.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 150) {
                console.log('please give a valid age');
                return;
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
var obj = new Person1();
obj.name = 'Carlos';
obj.age = 22;
console.log(obj);
function savetoDB(obj) {
    //save to adapter
}
//---------------------------------------
//Static 
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calculateCircunference = function (dia) {
        return Helper.PI * dia;
    };
    Helper.prototype.saveToDB = function () {
        console.log('save to DB....');
    };
    Helper.PI = 3.14;
    return Helper;
}());
var obj4 = Helper.calculateCircunference(12);
console.log(obj4);
var obj5 = new Helper();
console.log(obj5.saveToDB());
// let result4 = obj4.calculateCircunference(12);
//--------------------------
//abstarct class
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee.prototype.getDetails = function () {
        return "Name: $(this.name) Id: $(this.id)";
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.getSalary = function () {
        return 7000;
    };
    return Developer;
}(Employee));
var tom = new Developer('Tom', 'ooo');
var Employee1 = /** @class */ (function () {
    function Employee1(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee1.prototype.getDetails = function () {
        return "Name: $(this.name) Id: $(this.id)";
    };
    return Employee1;
}());
var emp1 = new Employee1('Mark', 'EMP23');
var symetricEncryption = /** @class */ (function () {
    function symetricEncryption() {
    }
    symetricEncryption.prototype.encrypt = function (data) {
        return "xyz$(data)";
    };
    symetricEncryption.prototype.decrypt = function (data) {
        return data.slice(3);
    };
    return symetricEncryption;
}());
var asymetricEncryption = /** @class */ (function () {
    function asymetricEncryption() {
    }
    asymetricEncryption.prototype.encrypt = function (data) {
        return "abc$(data)";
    };
    asymetricEncryption.prototype.decrypt = function (data) {
        return data.slice(3);
    };
    return asymetricEncryption;
}());
//percistance  cluster
var Oracle = /** @class */ (function () {
    function Oracle(encObj) {
        this._encObj = encObj;
    }
    Oracle.prototype.save = function (data) {
        var enccryptedData = this._encObj.encrypt(data);
        // save data to DB
        console;
    };
    return Oracle;
}());
//use  oracle to save data
//read a config file and get what encryption is used
var dbObj = new Oracle(new asymetricEncryption());
dbObj.save('Hello');
function great(xyz) {
    console.log("Hello $(xyz.name)");
}
//usage
var person = {
    name: 'Carlos',
    age: 24
};
great(person);
//generics
