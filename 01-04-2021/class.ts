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
    static PI: number = 3.14;

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

