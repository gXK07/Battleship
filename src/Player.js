const Player = (type, board, ennemyBoard) => {
    const Attack = (x, y) => {
        ennemyBoard.AttackShip(x, y)
    };


    if(type === 'IA'){
        const randomCor = () => {
            // retourne des cordonné au hazard, utilse math.random
            let x = String.fromCharCode(Math.floor(Math.random() *10) + 97);
            let y = Math.floor(Math.random() *10);
            return {
                x,
                y
            }
        }
        const AttackIA = () => {
            let cor = randomCor();
            while(ennemyBoard.board[cor.x][cor.y].touch === true){
                cor = randomCor();
            }
            ennemyBoard.AttackShip(cor.x, cor.y);
            return cor;
        }

        return {
             type : 'IA',
             AttackIA,
             board
        }
    }

    else if(type === 'Human'){
        return {
            type : 'Human',
            Attack,
            board
        }
    }
}

module.exports = Player;