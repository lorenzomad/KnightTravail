const ChessBoard = () => {
    /* Method to create the board, returns the board array with the
    * names of each cell [x,y]
    * returns output, the array containing the board
    */
    const generateBoard = () => {
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

    /* creates the links from each cell to all the cells which are possibly linked with it*/
    const generateLinks = () => {
        //list all possible moves
        const moves = [
            [1,2],
            [1,-2],
            [2,1],
            [2,-1],
            [-1, 2],
            [-1, -2],
            [-2, 1],
            [-2, -1]
        ]

        let links = []
        let linksLine = []
        let linksCell = []
        let newCell

        board.forEach(line => {
            line.forEach(cell => {
                moves.forEach(move => {
                    newCell = cell.map((num, idx) => {
                        return num + move[idx];
                    })
                    if (newCell[0] < 8 && newCell[0] >= 0 && newCell[1] < 8 && newCell[1] >= 0) {
                        linksCell.push(newCell)
                    }
                });
                linksLine.push(linksCell)
                linksCell = []
            });
            links.push(linksLine)
            linksLine = []
            
        });
        return links;
    }

    let links = generateLinks()

    return {
        board,
        links
    }
}

export default ChessBoard