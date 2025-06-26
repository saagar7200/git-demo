// // data types

// // string
// // number
// // boolean
// // null
// // undefined

// // any
// // unknown


// // implicit /infer
// // let x = 19;
// // x = ''
// // x =10
// // // explicit

// // let y:unknown;
// // y = ''
// // y =10

// let val:any = 'hello world'
// let value:unknown = 'hello world'

// console.log(val.toLocaleUpperCase())

// if(typeof value === 'string'){
//     console.log(value.toLocaleUpperCase())
// }

// // array
// let numbers:number[] = [1,2,3,4]
// let strings:Array<string> = ["1","2","3","4"]

// // tuple
// // fixed length array

// const numTuple:[number,number]= [1,2]
// const tuple:[number,string,boolean]= [1,'hello',true]


// // object types
// // interface
// // interface IPerson {
// //     name:string;
// //     userName?:string;
// // }

// // const person:IPerson ={
// //     name:'abc',
// //     userName:'abc23'
// // }

// // const person2:IPerson ={
// //     name:'abc',

// // }

// // let personArray:IPerson[] = [{name:''},{name:'',userName:'',age:''}]




// // enum
// enum Role {
//     admin = 'ADMIN',
//     user = 'USER',
//     guest = 'GUEST'
// }

// // enum as value
// console.log(Role.admin) 
// console.log(Role.user) 
// console.log(Role.guest) 

// interface IPerson {
//     name:string;
//     userName?:string;
//     role:Role
// }

// const person:IPerson ={
//     name:'abc',
//     userName:'abc23',
//     role:Role.admin
// }

// console.log(person)

// // functions


// const add = (a:number,b:number):number =>{
//     return a + b;
// }

// //? function with return type
// // const add = (a:number,b:number):number =>{
// //     return a + b;
// // }
// // 

// console.log(add(1,1))

// //* void // function with no return type
// const greet = (name:string):void =>{
//     console.log(`Hello ${name}`);
// }



// // intersection ( & )

// interface IPerson {
//     name:string;
//     userName?:string;
//     role:Role
// }

// interface IEmployee extends IPerson {
//     id:number;
//     department:string;
    
// }

// interface IEmployee  {
//     id:number;
//     department:string;
// }

// const employee:IEmployee & IPerson = {
// id:1,
// department:'IT',
// name:'John',
// role:Role.admin
// }

// //! union
// let x:number | null = null

// const employee1:IEmployee | IPerson = {
// id:1,
// department:'IT',
// // name:'John',
// role:Role.admin
// }




// type
interface IPerson {
    name:string;
    userName:string;
    // role:Role
}
const person:IPerson ={
    name:'John',
    userName:'john123'
}

interface IEmployee   {
    id:number;
    department:string;
    
}

const employee:IUser = {
    id:1,
    department:'IT'
}



//! intersection
type  customType = IEmployee & IPerson

type IUser = {
    id:number;
    department:string;

}

type IResponse = {
    status:Status;
    success:boolean;
}

type Status = 'success' | 'error' | 'pending' 

const response:IResponse = {
    status:'error',
    success:false,
}

//? class

class Person {
    private name:string
    public  age:number
    protected email:string

    constructor(name:string,age:number,email:string){
        this.name = name
        this.age = age
        this.email = email
    }
}

class User extends Person {
    userName:string
    constructor(name:string,age:number,email:string,userName:string){
        super(name,age,email)
        this.userName = userName

    }

    getEmail(){
        console.log(this.email)
        return this.email
    }

}

const user  = new Person('abc',20,'abc@gmail.com')
const user1  = new User('abc',20,'abc@gmail.com','abc1')
// console.log(user.name)
// console.log(user.age)
// console.log(user.email)
// console.log(user1.email)
console.log(user1.getEmail())















