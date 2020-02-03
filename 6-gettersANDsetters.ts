class Point {
    _x: number;
    _y: number;

    constructor(_x?: number, y?: number) {
        this._x = _x;
        this._y = y;
    }

    draw() {
        console.log('x is ' + this._x + '\ny is ' + this._y);
    }


    get x() {
        return this._x;
    }
    set x(value) {
        if(value < 0) 
            throw new Error('value cannot be less than 0');
        
        this._x = value;
    }
}

let point = new Point();
point._x = 1;
point._y = 2;

// point.getX();
let x = point.x;
console.log(x);
// point.setX(22);


point.draw();