//object literal 
let obj3 = {
    name:'Carlos',
    age:24,
    printAge: function(){
        console.log('Age....');
    }
}
obj3.printAge();

// class
//template/ blue print
//scope : public private protected
//Inicialization: Constructors
//Setters and getters
class Person{
    public name: string;
    public age : number;
   // private age: number;
    protected type: string = 'Person';

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
    public printAge(){
        console.log('Age.....');
    }

}

//using the template/blue print
const john = new Person('Carlos', 24);
john.printAge();

class Student extends Person{
    public major: string = '';

    constructor(name: string, age:number,major: string){
        super(name,age);
        this.major = major;
    }
}
const mike = new Student('Mike',2, 'Maths');

////----------Setters and getters

class Person1{
    public name:string = '';
    private _age: number = 0;
    get age(){
        return this._age;
    }
    set age(value: number){
        if (value >150){
            console.log('please give a valid age');
            return;
        }
        this._age = value;
    }
}
let obj = new Person1();
obj.name= 'Carlos';
obj.age = 22;
console.log(obj);

function savetoDB(obj:Person1){
    //save to adapter
}
//---------------------------------------
//Static 

class Helper{
    static  readonly PI: number = 3.14;

    static calculateCircunference(dia:number){
        return Helper.PI*dia;
    }
    saveToDB(){
        console.log('save to DB....')
    }
}
let obj4 = Helper.calculateCircunference(12);
console.log(obj4);

let obj5 = new Helper();
console.log(obj5.saveToDB());



// let result4 = obj4.calculateCircunference(12);

//--------------------------
//abstarct class

abstract class Employee {
    name: string;
    id: string;
    constructor(name:string, id: string) {
        this.name= name;
        this.id= id;
    }
    abstract getSalary(): number;

    getDetails(): string{
        return `Name: $(this.name) Id: $(this.id)`;
    }

}

class Developer extends Employee {
    getSalary(){
        return 7000;
    }
}
let tom = new Developer('Tom', 'ooo');

//------------------------------------------------------

//Interface
interface IEmployee1{
    name: string;
    id: string;
    getDetails(): string;
}

class Employee1 implements IEmployee1{
    name: string;
    id: string;
    constructor(name:string, id: string) {
        this.name= name;
        this.id= id;
    }

    getDetails(): string{
        return `Name: $(this.name) Id: $(this.id)`;
    }
}
let emp1 = new Employee1('Mark', 'EMP23');

interface IEmployeeNew extends IEmployee1{
    age: number;
}
//------ASSIGMENT FOR TODAYS INTERFACE CLASS --------------

// create an interface for encriptor
// create an encryptor class
// create concrete specialuxed class
interface IEncryption{
    data: string;
    Encrypt(data:string): string;
    Decrypt(data:string): string;
}


class Encryptor implements IEncryption{
    data:string;
    constructor(data:string){
        this.data = data;
    }
    Encrypt(data:string): string{
        return data;
    }
    Decrypt(data:string): string{
        return data;
    }
}

class SymetricEnc extends Encryptor{
    constructor(data: string){
        super(data);
        this.data = data + ' symetric encription';
    }

}

class ASymetricEnc extends Encryptor{
    constructor(data: string){
        super(data);
        this.data = data + ' asymetric encription';
    }

}

let Symetrico = new SymetricEnc('hola');
console.log(Symetrico);

let Asymetrico = new ASymetricEnc('hola');
console.log(Asymetrico);

