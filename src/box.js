const getRow = (b2, y) => {
    let c;

    if (y <= 2) {
        c = 2;
    } else if (3 <= y >= 5) {
        c = 5;
    } else if (y >= 6) {
        c = 8;
    }

    switch (c) {
        case 2:
            b2.splice(3, 6);
            break;
        case 5:
            b2.splice(0, 3);
            b2.splice(3, 3);
            break;
        case 8:
            b2.splice(0, 6);
            break;
    }
    return [...b2[0], ...b2[1], ...b2[2]];
}

const getColumn = (b2, x) => {
    let c;

    if (x <= 2) {
        c = 2;
    } else if (3 <= x >= 5) {
        c = 5;
    } else if (x >= 6) {
        c = 8;
    }

    return b2.map(r => {
        switch (c) {
            case 2:
                r.splice(3, 6);
                break;
            case 5:
                r.splice(0, 3);
                r.splice(3, 3);
                break;
            case 8:
                r.splice(0, 6);
                break;
        }
        return r;
    })
}

export const getBox = (board, x, y) => {
    let column = getColumn(board, x);
    return getRow(column, y);
}