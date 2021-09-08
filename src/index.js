import Player from "./Player";
import css from "./style.css";
import { createBoard, setShootListener, formBoats} from "./DOM/DOM";
import {Ships, Ship} from "./ship";
const gameBoard = require('./gameBoard');

const newGame = document.getElementById('NG');
const alphabet = ['a','b','c','d','e','f','g','h','i','j'];
const game = () => {
    formBoats();
    const boardHuman = gameBoard();
    const boardIA = gameBoard();
    const playerHuman = Player('Human', boardHuman, boardIA);
    const playerIA = Player('IA', boardIA, boardHuman);

    for (let i = 0; i < Ships.length; i++){
        playerIA.placeShipIA(Ships[i])
    }
    const divBoard2 = createBoard(2);
    const divBoard1 = createBoard(1);
    // const dataShip = takeDataShipPlayer();
    // 
    setShootListener(divBoard1, divBoard2, playerHuman, playerIA);

    // si tu veux montrer à l'avance les bateau de l'ennemi ^ remettre l'aphabet en haut ^ :

    for (let i = 0; i<10; i++){
        for(let j = 0; j<10; j++){
            if(boardIA.board[alphabet[i]][j].boat !== undefined){
                console.log(boardIA.board[alphabet[i]][j]);
                divBoard1[alphabet[i]].cases[j].classList.add('hiddenBoat');
            }
        }
    }
    newGame.remove();
}


newGame.addEventListener('click', game)

