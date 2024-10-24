let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

console.log(board);

function transpose(board) {
    return board[0].map((_, colIndex) => board.map(row => row[colIndex]));
}

let winner = 0;

function check_victory(board) {
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

    if (winner === 1) { console.log("X wins") }
    else if (winner === -1) { console.log("O wins") }
    else if (winner === 0 && !board.flat().includes(0)) { console.log("Draw") }
}


function update_X(x, y) {
    try {
        if (x > 2 || x < 0 || y > 2 || y < 0) {
            throw new Error("Values of x and y must be between 0 and 3.");
        }
        if (board[x - 1][y - 1] != 0) {
            throw new Error("Already marked");
        }

        board[x - 1][y - 1] = 1;
        check_victory(board);

    } catch (error) {
        console.error(error.message);
    }

}

function update_O(x, y) {
    try {
        if (x > 2 || x < 0 || y > 2 || y < 0) {
            throw new Error("Values of x and y must be between 0 and 3.");
        }
        if (board[x - 1][y - 1] != 0) {
            throw new Error("Already marked");
        }

        board[x - 1][y - 1] = -1;
        check_victory(board);

    } catch (error) {
        console.error(error.message);
    }

}

function coordinate() {
    let input = prompt("Enter coordinates (x,y):", "0,0");

    if (input) {
        let coordinates = input.split(',');

        let x = parseInt(coordinates[0], 10);
        let y = parseInt(coordinates[1], 10);

        if (!isNaN(x) && !isNaN(y)) {
            coordinate_array = [x, y];
            return coordinate_array;
        } else {
            console.log("Invalid input. Please enter numbers in the format x,y.");
        }
    }
}

function displayBoard() {
    // console.clear();
    console.log("Current Board:");
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 1) {
                row.push('X');
            } else if (board[i][j] === -1) {
                row.push('O');
            } else {
                row.push('.');
            }
        }
        console.log(row.join(' | '));
        if (i < 2) {
            console.log('---------');
        }
    }
}

function gameBoard() {
    while (winner === 0 && board.flat().includes(0)) {
        // X move
        console.log("Input X move: ");
        let x_coordinate = coordinate();
        update_X(x_coordinate[0], x_coordinate[1]);
        displayBoard();
        // O move
        console.log("Input O move: ");
        let o_coordinate = coordinate();
        update_O(o_coordinate[0], o_coordinate[1]);
        displayBoard();

        check_victory();
        // if (winner === 1 || winner === -1) {return;}
    }
}

gameBoard();

// // Testing the board
// update_X(2, 3);
// update_X(2, 1);
// update_X(2, 2);
// update_O(3, 3);
// update_X(3, 3);
// transpose_board = transpose(board);
// console.log(board);
// console.log(transpose_board);


