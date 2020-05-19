
const getBox = (board, cell) => {
    
    for (let i = 0; i < 2; i++) {
        if (cell[i] <= 3) {
            board = i == 0 ? board.map(r => r.slice(0, 3)) : board.slice(0, 3)
        } else if (4 <= cell[i] && cell[i] <= 6) {
            board = i == 0 ? board.map(e => e.slice(3, 6)) : board.slice(3, 6)
        } else if (7 <= cell[i]) {
            board = i == 0 ? board.map(r => r.slice(6, 9)) : board.slice(6, 9)
        }
    }
    return [...board[0], ...board[1], ...board[2]];
}

const availableInBox = (box) => {
    let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let required = allNumbers.filter(n => !box.includes(n));

    return required;
}

module.exports = { getBox, availableInBox };