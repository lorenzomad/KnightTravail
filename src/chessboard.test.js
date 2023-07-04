import ChessBoard from "./chessBoard";

let chessBoard

beforeEach (() => {
    chessBoard = ChessBoard()
})

afterEach (() => {
    chessBoard = null
})

test('create board ', () => {
    const height = chessBoard.board.length
    const width = chessBoard.board[0].length 
    expect(height).toBe(8);
    expect(width).toBe(8)
});

test('check links', () => {
    const links00 = chessBoard.links[0][0]
    expect(links00).toContain([1,2])
    expect(links00).toContain([2,1])
    expect(links00.length).toBe(2)
    
    const links56 = chessBoard.links[5][6]
    expect(links56).toContain([6,8])
    expect(links56).toContain([6,4])
    expect(links56).toContain([7,7])
    expect(links56).toContain([7,5])
    expect(links56).toContain([4,8])
    expect(links56).toContain([4,4])
    expect(links56).toContain([3,7])
    expect(links56).toContain([3,5])
    expect(links56.length).toBe(8)
});