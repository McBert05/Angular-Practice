// when you do not assign a type to a variable upon declaration and try to assign it a value later...
let message;
message = 'abc';

// it may not allow us to get code intellisense so to get past that we can use `type assertions` as shown below
let endswithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

// the function below can be simplified using arrow function:
let log = function(message: any) {
    console.log(message);
}

// we do not even need to specify the function declarator
let doLog = (message: any) => {
    console.log(message);
} 
// or is your function only has one line simplyfy it like so:
let doLogging = (message: any) => console.log(message);
