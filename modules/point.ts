export class Point {
    constructor(private x?: number, private y?: number) {

    }

    draw() {
        console.log('x is ' + this.x + '\ny is ' + this.y);
    }
}