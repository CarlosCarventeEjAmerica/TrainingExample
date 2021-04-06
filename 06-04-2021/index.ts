//console.log('Hello World');

// Primitive types
// let xyz = 'Steve'
// xyz = 'Tom2';
// console.log(xyz);

let myName: string = 'Steve';
myName = 'Tom';
let myAge: number = 21;
let hasJob: boolean = true;
let color: any = 'white';
color = 12345;

console.log(myName);
console.log(myAge);

//reference type
//array
let myHobbies: string[] = ['cooking', 'baseball'];
myHobbies = ['dkkd','dkkd'];

//Tuple
let myAddress: [string,number]= ['park street', 23];
myAddress = ['Eucalipto',2];

//enums
enum Color {
    Grey,
    Green = 100,
    Red
}
let myColor: Color = Color.Red;

//funtion
function sayHello(name:string): string{
    //console.log('Hi my dear',name);
    //return `Hello $(name)`;
    return `Hello $(name)`;
}
//sayHello('Carlos');
let result: string = sayHello('Steve');
function print(): void{
    console.log('Printing ...');
}
print();

function multiply(num1:number, num2: number): number{
    return num1*num2;
}
multiply(10,10);

function PrintMe(data:string): string{
    return `Hello $(data)`;
}

// funtion type

let greetings: (a:string)=>string;
greetings = sayHello;

greetings = PrintMe;
greetings('Steve');

//Object type
type Complex = {name: string, age:number, hobbies:string[], print: (x:string)=>void};
let user: Complex ={
    name: 'Carlos',
    age: 21,
    hobbies: ['Cooking','baseball'],
    print: function(data:string):void{
        console.log(data);
    }
}

let userData: Complex;
userData=user;

console.log(user.name);
//let userData: {name: string, age:number, hobies:string[], print: (x:string)=>void};
//user.print('Steve');

//Union type

let myAge2: number  | string = 27;
let myObj: {} | null = null;

