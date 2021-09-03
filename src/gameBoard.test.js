const gameBoard = require('./gameBoard');
const ship = require('./ship');
const myGameBoard = gameBoard();


test('test board', () => {
    expect(myGameBoard.board.a[7]).toStrictEqual({
        touch : false,
        boat : undefined
    })
})

test('test placeShip() horizontal', () => {
    const cor = ['d', 6];
    const dir = 'horizontal';
    const bateau = ship('bateau', 4);
    myGameBoard.placeShip(bateau, cor, dir)
    for(let i = 6; i<10; i++){
    expect(myGameBoard.board.d[i]).toStrictEqual({
            touch : false,
            boat : bateau,
            nbBoat : i-6

        })
    }
})
test('test placeShip() vertical', () => {
    const cor = ['d', 6];
    const dir = 'vertical';
    const bateau = ship('bateau', 4);
    myGameBoard.placeShip(bateau, cor, dir)
    expect(myGameBoard.board.d[6]).toStrictEqual({
            touch : false,
            boat : bateau,
            nbBoat : 0
        })
    expect(myGameBoard.board.e[6]).toStrictEqual({
            touch : false,
            boat : bateau,
            nbBoat : 1
        })
    expect(myGameBoard.board.f[6]).toStrictEqual({
            touch : false,
            boat : bateau,
            nbBoat : 2
        })
    expect(myGameBoard.board.g[6]).toStrictEqual({
            touch : false,
            boat : bateau,
            nbBoat : 3
        })
})

test('test AttackShip()', () => {
    myGameBoard.AttackShip('d', 7);
    expect(myGameBoard.board.d[7].touch).toBe(true);
})

test('test gameOver', () => {
    const myGameBoard2 = gameBoard();
    const cor = ['a', 3];
    const dir = 'horizontal';
    const bateau1 = ship('bateau', 5);
    myGameBoard2.placeShip(bateau1, cor, dir)
        for(let i=0; i<bateau1.length; i++){
        myGameBoard2.AttackShip(cor[0], cor[1])
        cor[1]++;
    }
    expect(myGameBoard2.gameOver()).toBe(true);
})