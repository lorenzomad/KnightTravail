import Knight from "./knight";

let knight 

test('generate knight', () => {
    knight = Knight(2,3)
    expect(knight.cell).toStrictEqual([2,3])
});

test('knight movement', () => {
    knight = Knight(0,0)
    expect(knight.knightMoves([0,0])).toStrictEqual([[0,0]])
    expect(knight.knightMoves([1,2])).toStrictEqual([[0,0],[1,2]])
});

test('movement more than 1 space', () => {
    knight = Knight(0,0)
    expect(knight.knightMoves([3,3]).length).toBe(3)
    expect(knight.knightMoves([3,3])).toContainEqual([3,3])

    knight = Knight(3,3)
    expect(knight.knightMoves([0,0]).length).toBe(3)
    expect(knight.knightMoves([0,0])).toContainEqual([0,0])

    knight = Knight(0,0)
    expect(knight.knightMoves([7,6]).length).toBe(6)
    expect(knight.knightMoves([7,6])).toContainEqual([7,6])
});