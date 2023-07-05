import ChessBoard from "./chessBoard.js"
import Move from "./move.js"

const Knight = (x = Math.floor( 8 * Math.random()), y = Math.floor( 8 * Math.random())) => {
    
    let cell = [x,y]

    const writeSequence = (move) => {
        // writ the sequence of moves to get to move
        let sequence = []
        
        let newMove = move
        while(newMove.predecessor != null) {
            sequence.push(newMove.cell)
            newMove = newMove.predecessor
        }
        sequence.push(newMove.cell)
        return sequence.reverse()
    }

    const checkIfVisited = (cell, visitedList) => {
        // returns true if the cell is in the list else false
        for (let index = 0; index < visitedList.length; index++) {
            let element = visitedList[index];
            if(element[0] == cell[0] && element[1] == cell[1]){
                return true
            }            
        }
        return false;
    }

    const knightMoves = (endCell) => {
        // BFS algorithm to search how to arrive to the endCell
        let queue = []
        let chessBoard = ChessBoard()
        const visited = []
        let currentMove = Move(...cell)
        visited.push(cell)
        if (currentMove.cell[0] == endCell[0] && currentMove.cell[1] == endCell[1]) {
            // end condition to be implemented
            return [currentMove.cell]
        }
        let nextMoves = chessBoard.links[currentMove.cell[0]][currentMove.cell[1]]
        let newMove
        
        for (let index = 0; index < nextMoves.length; index++) {
            const newcell = nextMoves[index];
            if (!checkIfVisited(newcell, visited)){
                visited.push(newcell)
                newMove = Move(...newcell)
                newMove.distance = 1
                newMove.predecessor = currentMove   
                if (newcell[0] == endCell[0] && newcell[1] == endCell[1]) {
                    // end condition to be implemented
                    return writeSequence(newMove)
                } 
                queue.push(newMove)
            }
        }
        
        while(queue.length > 0) {
            // loop over the queue
            currentMove = queue.shift()
            nextMoves = chessBoard.links[currentMove.cell[0]][currentMove.cell[1]]
            for (let index = 0; index < nextMoves.length; index++) {
                const newcell = nextMoves[index];
                if (!checkIfVisited(newcell, visited)){
                    visited.push(newcell)
                    newMove = Move(...newcell)
                    newMove.distance = 1
                    newMove.predecessor = currentMove   
                    if (newcell[0] == endCell[0] && newcell[1] == endCell[1]) {
                        // end condition to be implemented
                        return writeSequence(newMove)
                    } 
                    queue.push(newMove)
                }
            }    
        }
    }

    return {
        cell, 
        knightMoves
    }
}

export default Knight