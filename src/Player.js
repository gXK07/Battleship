                // je veux check si quand on va dans la direction horizontal 
                // pour  le nombre de cases de la taille du bateau, y a pas deja 
                // un autre bateau ou que c'est pas la fin de la board, si oui,  
                // changer de direction (horizontal) et recheck, et si y a aussi
                // un bateau ou que c'est la fin de la board regénérer des 
                // cordonées 


const Player = (type, board, ennemyBoard) => {
    const Attack = (x, y) => {
        ennemyBoard.AttackShip(x, y)
    };


    if(type === 'IA'){
        const randomCor = () => {
            // retourne des cordonné au hazard, utilse math.random
            let x = String.fromCharCode(Math.floor(Math.random() *10) + 97);
            let y = Math.floor(Math.random() *10);
            return {x,y}
        }
        const AttackIA = () => {
            let cor = randomCor();
            while(ennemyBoard.board[cor.x][cor.y].touch === true){
                cor = randomCor();
            }
            ennemyBoard.AttackShip(cor.x, cor.y);
            return cor;
        }

        const checkPlace = (cor, dir, length) => {
            console.log("dans checkplace la direction est : ", dir);
            console.log("dans checkplace les cordonnées sont : ", cor);
            let free = true;
            if(dir === "horizontal"){
                for(let i = 0; i<length; i++){
                    let nextNumber = cor.y + i;
                    if(board.board[cor.x][nextNumber] === undefined ||
                         board.board[cor.x][nextNumber].boat !== undefined){
                            free = false;
                    }
                }
                console.log("apres check free = ", free);
                return free
            }
            else if(dir === "vertical"){
                // pourquoi ca rentre pas dans la boucle ? et pourquoi defois ca sort quand meme false ??
                for(let i = 0; i<length; i++){
                    let nextChar = String.fromCharCode(cor.x.charCodeAt(0) + i);
                    console.log("dans la boucle de check vertical, nextChar = ", nextChar);
                    if(board.board[nextChar] === undefined || 
                       board.board[nextChar][cor.y] === undefined ||
                       board.board[nextChar][cor.y].boat !== undefined){
                            free = false;
                    }
                }
                console.log("apres check free = ", free);
                return free
            }
        }

        const placeShipIA = (Ship) => {
            let cor = randomCor();
            let dir = "vertical";
            while(checkPlace(cor, dir, Ship.length) === false){
                if(dir === "horizontal"){
                    cor = randomCor()
                    dir = "vertical";
                }
                else{
                    dir = "horizontal";
                }
            }
            board.placeShip(Ship, cor, dir);
        }

        return {
             type : 'IA',
             AttackIA,
             board,
             placeShipIA
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