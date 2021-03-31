// normal funtions
function print(): void{
    console.log('Printing...');
}

//funtion expressions

let addnumbers = function(num1: number, num2: number) : number{
    return num1 + num2;
}

addnumbers(1,2);

//arrow fiunctions
let multiplyNumber = (num1: number, num2: number): number=>{
    return num1*num2;
}

multiplyNumber(2,4);

let multiplyNumber2 = (num1: number, num2: number): number=>  num1*num2;

//-------------------------------------------

//Spread operator (arrays and objects)
const numbers: number[]=[2,10,12,14,16];

type myType = {name:string,age:number}
const numbersduplicate: number[] = [...numbers];
const object:{name:string,age:number}={name:'Steve', age:21};
const objectdup:{name:string,age:number} = {...object}

function save(obj:myType){
    //mutate or modify
    obj.name = 'tom';
    //save obj to db
}

save({...object});

//Destructuring Operator (array and object)
const myHobbies2: string[]= ['baseball', 'cooocking'];
// const hobby1 = myHobbies2[0];
// const hobby2 = myHobbies2[1];

const[hobby1,hobby2] = myHobbies2;

const userData2:myType = {name:'Carlos',age:24};
// const userName = userData2.name;
// const userAge = userData2.age;

const {age:userAge,name:userName} = userData2;

//----------------------------------------


//Template literals (string)
let userName3 = 'Carlos';
let greeting =  'Hello'+ userName3;
console.log(greeting);

let greeting2 = `Hello ${userName3},
    I am cool`;
console.log(greeting2);;
