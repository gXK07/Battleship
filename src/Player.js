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
            const cor = randomCor();
            if(ennemyBoard.board[cor.x][cor.y].touch === false){
            ennemyBoard.AttackShip(cor.x, cor.y)
            }
            else{
                AttackIA();
            }
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