import Player from "./Player";
import css from "./style.css";
import {DisplayPreGame, ShowGame} from "./DOM/IndexDOM";
import { dataship } from "./DOM/PreGame";
import {Ships, Ship} from "./ship";
const gameBoard = require('./gameBoard');

const newGameBtn = document.getElementById('NG');
const alphabet = ['a','b','c','d','e','f','g','h','i','j'];
const game = () => {
    const boardHuman = gameBoard();
    const boardIA = gameBoard();
    const playerHuman = Player('Human', boardHuman, boardIA);
    const playerIA = Player('IA', boardIA, boardHuman);

    for (let i = 0; i < Ships.length; i++){
        playerIA.placeShipIA(Ships[i])
    }
    newGameBtn.remove();
    let StartGame = DisplayPreGame(Ships);
    StartGame.addEventListener('click', () => {
        console.log('dataship dans index : ', dataship);
        // maintenant utiliser le dataShip pour placer les bateaux sur la board
        const graphicBoardIA = ShowGame.createBoard('IA');
        const graphicBoardHuman = ShowGame.createBoard('Human');
        ShowGame.setShootListener(graphicBoardHuman, graphicBoardIA, playerHuman, playerIA);
        StartGame.remove();
        Ships.forEach(ship => {
            const s = dataship[ship.name];
            boardHuman.placeShip(s.Ship, s.cor, s.dir)
        });
        console.log("board human : ", boardHuman.board);
        // si tu veux montrer à l'avance les bateaux de l'ennemi ^ remettre l'aphabet en haut ^ :

        for (let i = 0; i<10; i++){
            for(let j = 0; j<10; j++){
                if(boardIA.board[alphabet[i]][j].boat !== undefined){
                    graphicBoardHuman[alphabet[i]].cases[j].classList.add('hiddenBoat');
                }
                if(boardHuman.board[alphabet[i]][j].boat !== undefined){
                    graphicBoardIA[alphabet[i]].cases[j].classList.add('hiddenBoat');
                }
            }
        }
    })
}


newGameBtn.addEventListener('click', game)

