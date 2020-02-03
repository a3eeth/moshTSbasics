// let drawPoint = (x, y) => {
//     // logic to draw
// }

// let drawPoint = (point) => {

// }

// inline annotation - can be rather verbose and repetitive
// instead use interface 
// let drawPoint = (point: {x: number, y: number}) => {

// }

// go with PascalNamingConvention
interface Pointi {
    x: number,
    y: number
}
let drawPoint = (point: Pointi) => {

}


drawPoint ({
    x: 1,
    y: 2
})
