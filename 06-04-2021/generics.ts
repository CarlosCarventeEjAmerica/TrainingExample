//generics
function echo(data: any): any{
    return data;
}

echo('String');
echo(21);
echo(true);


function betterEcho<T>(data: T): T{
    return data;
}
betterEcho<string>('Hello');
betterEcho<number>(21);
betterEcho<boolean>(true);
betterEcho<{name:string,age:number}>({name: 'Carlos', age: 24});



let myHobbies5: string[]= ['cooking','noc'];
let myHobbies6: Array<string>= ['cooking','noc'];
let myHobbies7: Array<number>= [12,14];
let myHobbies8: Array<boolean>= [true,false];
let myHobbies9: Array<{}>= [{},{}];

type myType1 = {name: string, age: number}

class Collection<T extends string | number> {
    add(data: T){
        console.log(data);
    }
}
let obj10 = new Collection<string>();
obj10.add('Carlos');
let obj11 = new Collection<number>();
obj11.add(21);
