
const getRow = (board, cell) => {
    let row = board[cell[1]]
    return row;
}

const availableInRow = (row) => {
    let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let available = allNumbers.filter(c => !row.includes(c));

    return available;
}

module.exports = { getRow, availableInRow };