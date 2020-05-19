const {
    availableInBox,
    availableInRow,
    availableInCol
} = require('./src/index');

const log = () => {
    console.log(board.join('\n'))
}

const board = [
    [5, 6, 2, 7, 0, 4, 3, 0, 1],
    [3, 4, 0, 0, 0, 1, 0, 8, 2],
    [0, 8, 0, 0, 3, 0, 4, 5, 0],
    [4, 0, 3, 0, 6, 5, 0, 1, 9],
    [0, 2, 0, 1, 0, 0, 0, 3, 4],
    [0, 0, 5, 8, 0, 0, 2, 0, 0],
    [0, 5, 4, 0, 0, 8, 7, 0, 0],
    [8, 0, 0, 0, 2, 7, 1, 0, 0],
    [7, 3, 0, 0, 0, 0, 0, 0, 8]
];

async function run() {
    for (let i = 0; i < 9; i++) {
        for (let e = 0; e < 9; e++) {
            if (board[i][e] == 0) {
                let aBox = availableInBox(board, [e, i])
                let aRow = availableInRow(board, [e, i])
                let aCol = availableInCol(board, [e, i])
                let all = [...aBox, ...aRow, ...aCol]
                if (aBox.length && aRow.length && aCol.length) {
                    let allN = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    let match = allN.filter(n => all.filter(v => v == n).length == 3)
                    console.log(match)
                    if (match.length == 1) {
                        board[i][e] = match[0]
                    }
                }
            }
        }
    }
    if (board.filter(r => r.filter(n => n == 0).length).length) {
        console.log('hit')
        log()
        return run()
    }
    log()
}

run()
