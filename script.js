let board = [[0,0,0],
             [0,0,0],
             [0,0,0]];

console.log(board);

function update_X(x, y) {
    try {
        if (x > 3 || x < 0 || y > 3 || y < 0){
            throw new Error("Values of x and y must be between 0 and 3.");
        }
        if (board[x-1][y-1] != 0) {
            throw new Error("Already marked");
        }

        board[x-1][y-1] = 1;

    } catch (error) {
        console.error(error.message);
    }
    
}

function update_O(x, y) {
    try {
        if (x > 3 || x < 0 || y > 3 || y < 0){
            throw new Error("Values of x and y must be between 0 and 3.");
        }
        if (board[x-1][y-1] != 0) {
            throw new Error("Already marked");
        }

        board[x-1][y-1] = -1;

    } catch (error) {
        console.error(error.message);
    }
    
}

const winning_conditions = [
    // Rows
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // Columns
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    // Diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];

update_X(2,1);
update_O(3,3);
update_X(3,3);
console.log(board);

