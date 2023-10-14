// sometimes we will work with specific fucntions that will have many parameters as shown below:

// let drawPoint = (x, y, a, b, c, d, e, f) => {
//     //..
// }

// this is not ideal as we can rather pass an object into our parameter containing all the information we need as so:

// let drawPoint = (point) => {
//     //..
// }
// drawPoint({
//     x: 1,
//     y: 2,
//     // the problem with this method is that we can pass a person object that has a name property, instead of x and y properties only
//     name: 'ash'
// });

// there are two ways to fix this issue
// we can indicate that the parameter `point` is an object by using type annotations followed by curly braces to make it a object type of `object`, then following up inside the curly braces with parameters x and y that we utilize type annotations to make it a variable with a type of `number`: this is called `inline annotation`
// let drawPoint = (point: {x: number, y: number}) => {
//     //..
// }
// drawPoint({
//     x: 1,
//     y: 2,
//     // the problem with this method is that we can pass a person object that has a name property, instead of x and y properties only
//     // name: 'ash', now this variable will be flagged as it is not a number
// });

// a better way to approach this is to use interfaces:
// first define an interface
interface Point {
    x: number,
    y: number
}

// now we can simplify the previous function:
let drawPoint = (point: Point) => {

}


