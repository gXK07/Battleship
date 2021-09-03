const gameBoard = require('./gameBoard');
const ship = require('./ship');


const myGameBoard = gameBoard();
test('test board', () => {
    expect(myGameBoard.board.a[7]).toStrictEqual({
        touch : false,
        boat : 'no boat'
    })
})

test('test touch', () => {
    myGameBoard.touch('b', 3);
    expect(myGameBoard.board.b[3]).toStrictEqual({
        touch : true,
        boat : 'no boat'
    })
})

test('test placeBoard()', () => {
    const cor = ['d', 6];
    const dir = 'horizontal';
    const bateau = ship('bateau', 4);
    myGameBoard.placeBoard(bateau, cor, dir)
    for(let i = 6; i<10; i++){
    expect(myGameBoard.board.d[i]).toStrictEqual({
            touch : false,
            boat : 'bateau'
        })
    }
})
test('test placeBoard()', () => {
    const cor = ['d', 6];
    const dir = 'vertical';
    const bateau = ship('bateau', 4);
    myGameBoard.placeBoard(bateau, cor, dir)
    expect(myGameBoard.board.d[6]).toStrictEqual({
            touch : false,
            boat : 'bateau'
        })
    expect(myGameBoard.board.e[6]).toStrictEqual({
            touch : false,
            boat : 'bateau'
        })
    expect(myGameBoard.board.f[6]).toStrictEqual({
            touch : false,
            boat : 'bateau'
        })
    expect(myGameBoard.board.g[6]).toStrictEqual({
            touch : false,
            boat : 'bateau'
        })
})