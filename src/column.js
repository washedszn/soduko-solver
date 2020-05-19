
const getColumn = (board, cell) => {
    let column = board.map(r => r[cell[1]])

    return column
}

const availableInColumn = (column) => {
    let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let available = allNumbers.filter(r => !column.includes(r));
    
    return available;
}

module.exports = { getColumn, availableInColumn };