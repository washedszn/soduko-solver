
const getRow = (board, cell) => {
    let row = board[cell[1]]
    return row;
}

const availableInRow = (board, cell) => {
    let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let row = getRow(board, cell);
    
    let available = allNumbers.filter(c => !row.includes(c));

    return available;
}

module.exports = { getRow, availableInRow };