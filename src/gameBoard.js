const gameBoard = () => {

    const field = () => {
        return {
        touch : false,
        boat : 'no boat'
    }
}
    let board = {
        a : new Array(10),
        b : new Array(10),
        c : new Array(10),
        d : new Array(10),
        e : new Array(10),
        f : new Array(10),
        g : new Array(10),
        h : new Array(10),
        i : new Array(10),
        j : new Array(10),
    }
    const alphabet = ['a','b','c','d','e','f','g','h','i','j'];
    for(let i = 0; i<10; i++){
        let letter = alphabet[i]
            for(let j = 0; j<10; j++){
                board[letter][j] = field();
            }
    }

    const touch = (x, y) => {
        board[x][y].touch = true;
    }

    const nextChar = (c) => {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    const placeBoard = (ship, cor, dir) => {
        let x = cor[0];
        let y = cor[1];
            for(let i= 0; i<ship.length; i++){
                board[x][y].boat = ship.name;
                (dir === 'horizontal') ? y++ : x = nextChar(x);
            }
    }

    
    return {
        touch,
        board,
        placeBoard
    }
}

module.exports = gameBoard