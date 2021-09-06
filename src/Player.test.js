const gameBoard = require('./gameBoard');
const ship = require('./ship');
const Player = require('./Player')

test('test cordonnées "Human"', () => {
    const board1 = gameBoard();
    const board2 = gameBoard();
    const player1 = Player('Human', board1, board2)
    const player2 = Player('IA', board2, board1)
    player1.Attack('b', 7);
    expect(board2.board['b'][7].touch).toBe(true);
})

test('test cordonnées "IA"', () => {
    const board3 = gameBoard();
    const board4 = gameBoard();
    const player3 = Player('Human', board3, board4)
    const player4 = Player('IA', board4, board3)
    player4.AttackIA();
    let bol = false;
    let alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    for (let i = 0; i<10; i++){
        // console.log('i :', i);
        console.log(board3.board[alp[i]]);
        for(let j = 0; j<10; j++){
            // console.log('j :', j);
        if (board3.board[alp[i]][j].touch === true){
            bol = true;
        }
    }
    }
    expect(bol).toBe(true);
})