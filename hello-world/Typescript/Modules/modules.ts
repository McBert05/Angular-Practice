export class Points {
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}
//  in typescript you can think of each file as a module
//  we do not want to replciate the mess we made declaring a class in classes.ts so we can `export` a class and then use it in other modules