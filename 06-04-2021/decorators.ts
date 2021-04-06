// Decorators
function EncryptionD(abc: Function){
   //encryption here
    
   console.log('Encryption from decorator')
   let data = ' encrypted data'
   abc.prototype.save(data);
}
@EncryptionD

class DataBase5{
    data: string;
    constructor(data: string){
        this.data=data;
    }
    save(data: string){
        console.log('Printing from person 5....', data);
    }
}