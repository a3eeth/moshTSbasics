class Pointc {
    x: number;
    y: number;
    draw() {
        console.log('x is ' + this.x + '\ny is ' + this.y);
    }
    getDistance(another: Pointc) {
        // calculate distance
    }
}

// let point: Point = new Point();
let point = new Pointc();
point.x = 1;
point.y = 2;
point.draw();

// // for cohesion to work this should go with the definition
// let drawPoint2(point: Point) => {
//     // logic for drawing
// }

// let getDistance(pointA: Point, pointB: Point) => {
//     // logic for calculating distance
// }

// drawPoint2 ({
//     x: 1,
//     y: 2
// })