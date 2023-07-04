const ChessBoard = () => {
    

    /* Method to create the board, returns the board array with the
    * names of each cell [x,y]
    * returns output, the array containing the board
    */
    function generateBoard() {
        let output = [];
        let line = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                line.push([i, j]);
            }
            output.push(line);
            line = [];
        }
        return output;
    }
    let board = generateBoard()

    return {
        board
    }
}

export default ChessBoard