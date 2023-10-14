// classes group functions and properties that are highly related
// here is an example of a class:
var Point = /** @class */ (function () {
    // private x: number; // fields
    // private y: number;
    // a constcutor is a method that is called when an instance of a class is created:
    // constructor(x: number, y: number) {
    //     this.x = x;
    //     this.y = y;
    // }
    // we can add question marks to the parameters in the constructor to make the fields optional when creating an object
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x!; // What is the TypeScript exclamation mark? The non-null assertion operator tells the TypeScript compiler that a value typed as optional cannot be null or undefined. For example, if we define a variable as possibly a string or undefined, the ! operator tells the compiler to ignore the possibility of it being undefined.
        // this.y = y!;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0.");
        }
        this.x = value;
    };
    return Point;
}());
// let point = new Point(); // object (instance of a class) called without a defined constructor
// point.x = 1;
// point.y = 2;
// point.draw();
var point = new Point(9, 0); // object (instance of a class) called with a defined constructor
point.draw();
// access modifiers are keywords that can be applied to a member of a class that can be control its access from the outside of the class
// in typescript there are three access modifiers:
// public - commonly used
// private - commonly used
// protected
// by default all members of a class are public
var x = point.getX();
point.setX(10);
