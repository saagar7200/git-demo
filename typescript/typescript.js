// data types
// string
// number
// boolean
// null
// undefined
// any
// unknown
// implicit /infer
// let x = 19;
// x = ''
// x =10
// // explicit
// let y:unknown;
// y = ''
// y =10
var val = 'hello world';
var value = 'hello world';
console.log(val.toLocaleUpperCase());
if (typeof value === 'string') {
    console.log(value.toLocaleUpperCase());
}
// array
var numbers = [1, 2, 3, 4];
var strings = ["1", "2", "3", "4"];
// tuple
// fixed length array
var numTuple = [1, 2];
var tuple = [1, 'hello', true];
// object types
// interface
// interface IPerson {
//     name:string;
//     userName?:string;
// }
// const person:IPerson ={
//     name:'abc',
//     userName:'abc23'
// }
// const person2:IPerson ={
//     name:'abc',
// }
// let personArray:IPerson[] = [{name:''},{name:'',userName:'',age:''}]
// enum
var Role;
(function (Role) {
    Role["admin"] = "ADMIN";
    Role["user"] = "USER";
    Role["guest"] = "GUEST";
})(Role || (Role = {}));
// enum as value
console.log(Role.admin);
console.log(Role.user);
console.log(Role.guest);
var person = {
    name: 'abc',
    userName: 'abc23',
    role: Role.admin
};
console.log(person);
