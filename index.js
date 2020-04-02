const getBox = require('./src/box');

const b = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

let f = [];
let o = b.slice();

for (let i = 0; i < 9; i++) {
    if (i == 3 || i == 6) {
        b.splice(0, 3);
    }
    let first = [b[0][0], b[0][1], b[0][2]];
    let second = [b[1][0], b[1][1], b[1][2]];
    let third = [b[2][0], b[2][1], b[2][2]];

    b[0].splice(0, 3)
    b[1].splice(0, 3)
    b[2].splice(0, 3)

    f[i] = [...first, ...second, ...third]
}

const checkOutside = (n, x, y) => {
    if (b.includes) {

    }
}


const check =  (x, y) => {
    let a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
    a.forEach(place => {
        if (!a.includes(place)) {
            
        }
    })
}

o.forEach(y => {
    row.map((x, place) => {
        if (place == 0) {
            return check(x, y)
        }
    })
});