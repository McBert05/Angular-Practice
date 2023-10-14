// in TypeScript there are two ways to declare a variable
// we can use the `var` keyword which is global
var number = 1;
// or we can use the `let` keyword which is local


// when we use the `let` keyword a scope is bound to the variable
// let count = 1;
// function doSomething() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
    // console.log("Finally: " + i); the `i` variable here will get an error and will be flagged, this flagging would not occur in js
// }
// doSomething();


// variables can be changed on the fly in js, but not in ts
// let count = 5;
// count = 'a'; the variable 'a` cannot be assigned to count as it would in js

// in ts if you declare a variable like so without assigning a value to it:
let a;
// the type will be `any` which means you can assign different values without ts complaining
a = 'a';
a = true;
a = 1;
console.log(a);

// but if you use `type annotations` as shown below
let b: number;
// the type will be preset to be a number so if you do try to assign different values it will flag as an error
// b = 1;
// b = true;
// b = 'a';
// console.log(a);

// here are all the types in ts
let c: number;
let d: boolean;
let e: string;
let f: any;
let g: number[] = [1, 2, 3];
let h: any[] = [1, true, 'e', false];


const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0, Green = 1, Blue = 2}; //enums by default follow a assigned value pattern starting from 0. So, 0, 1, 2... unless give an assignment
let backgroundColor = Color.Red;
