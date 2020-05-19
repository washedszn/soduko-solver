const { getBox, availableInBox } = require('./box');
const { getRow, availableInRow } = require('./row');
const { getColumn, availableInCol } = require('./column');

module.exports = {
    getBox,
    getRow,
    getColumn,
    availableInBox,
    availableInRow,
    availableInCol
}