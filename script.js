let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

console.log(board);

function transpose(board) {
    return board[0].map((_, colIndex) => board.map(row => row[colIndex]));
}

let winner = 0;

// Row victories
if (
    (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) || // X row victory
    (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) ||
    (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1)
) {
    winner = 1;
} else if (
    (board[0][0] === -1 && board[0][1] === -1 && board[0][2] === -1) || // O row victory
    (board[1][0] === -1 && board[1][1] === -1 && board[1][2] === -1) ||
    (board[2][0] === -1 && board[2][1] === -1 && board[2][2] === -1)
) {
    winner = -1;
}

// Diagonal victories
if (
    (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) || // X diagonal \
    (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) // X diagonal /
) {
    winner = 1;
} else if (
    (board[0][0] === -1 && board[1][1] === -1 && board[2][2] === -1) || // O diagonal \
    (board[0][2] === -1 && board[1][1] === -1 && board[2][0] === -1) // O diagonal /
) {
    winner = -1;
}

const transposedBoard = transpose(board);

// Column victories
if (
    (transposedBoard[0][0] === 1 && transposedBoard[1][0] === 1 && transposedBoard[2][0] === 1) || // X column victory
    (transposedBoard[0][1] === 1 && transposedBoard[1][1] === 1 && transposedBoard[2][1] === 1) ||
    (transposedBoard[0][2] === 1 && transposedBoard[1][2] === 1 && transposedBoard[2][2] === 1)
) {
    winner = 1;
} else if (
    (transposedBoard[0][0] === -1 && transposedBoard[1][0] === -1 && transposedBoard[2][0] === -1) || // O column victory
    (transposedBoard[0][1] === -1 && transposedBoard[1][1] === -1 && transposedBoard[2][1] === -1) ||
    (transposedBoard[0][2] === -1 && transposedBoard[1][2] === -1 && transposedBoard[2][2] === -1)
) {
    winner = -1;
}


function update_X(x, y) {
    try {
        if (x > 3 || x < 0 || y > 3 || y < 0) {
            throw new Error("Values of x and y must be between 0 and 3.");
        }
        if (board[x - 1][y - 1] != 0) {
            throw new Error("Already marked");
        }

        board[x - 1][y - 1] = 1;

    } catch (error) {
        console.error(error.message);
    }

}

function update_O(x, y) {
    try {
        if (x > 3 || x < 0 || y > 3 || y < 0) {
            throw new Error("Values of x and y must be between 0 and 3.");
        }
        if (board[x - 1][y - 1] != 0) {
            throw new Error("Already marked");
        }

        board[x - 1][y - 1] = -1;

    } catch (error) {
        console.error(error.message);
    }

}


update_X(2, 1);
update_O(3, 3);
update_X(3, 3);
transpose_board = transpose(board);
console.log(board);
console.log(transpose_board);


