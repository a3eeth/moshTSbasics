class PointAM {
    // private x: number;
    // private y: number;

    // instead put the access modifiers in the constructor
    constructor(private x?: number, private y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x is ' + this.x + '\ny is ' + this.y);
    }
}

let point1 = new PointAM(2,3);
// point1.x = 1;
// point1.y = 2;
point1.draw();