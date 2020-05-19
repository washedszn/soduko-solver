
const getColumn = (board, cell) => {
    let column = board.map(r => r[cell[0]])

    return column
}

const availableInCol = (board, cell) => {
    let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let column = getColumn(board, cell);

    let available = allNumbers.filter(r => !column.includes(r));
    
    return available;
}

module.exports = availableInCol;