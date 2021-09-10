import Player from "./Player";
import css from "./style.css";
import {DisplayPreGame, ShowGame} from "./DOM/IndexDOM";
import { dataship } from "./DOM/PreGame";
import {Ships, Ship} from "./ship";
import { gameOver } from "./gameOver";
const gameBoard = require('./gameBoard');

let newGameBtn = document.getElementById('NG');
const alphabet = ['a','b','c','d','e','f','g','h','i','j'];
const game = () => {
    const boardHuman = gameBoard();
    const boardIA = gameBoard();
    const playerHuman = Player('Human', boardHuman, boardIA);
    const playerIA = Player('IA', boardIA, boardHuman);
    const ShipIA = [Ship('Carrier', 5), Ship('Battleship', 4), Ship('Cruiser', 3), 
    Ship('Submarine', 2), Ship('Destroyer', 1)]
    const ShipHuman = [Ship('Carrier', 5), Ship('Battleship', 4), Ship('Cruiser', 3), 
    Ship('Submarine', 2), Ship('Destroyer', 1)]
    for (let i = 0; i < 5; i++){
        playerIA.placeShipIA(ShipIA[i])
    }
    newGameBtn.remove();
    let StartGame = DisplayPreGame(Ships);
    StartGame.addEventListener('click', () => {
        // maintenant utiliser le dataShip pour placer les bateaux sur la board
        const graphicBoardIA = ShowGame.createBoard('IA');
        const graphicBoardHuman = ShowGame.createBoard('Human');
        ShowGame.setShootListener(graphicBoardHuman, graphicBoardIA, playerHuman, playerIA);
        StartGame.remove();
        ShipHuman.forEach(ship => {
            const s = dataship[ship.name];
            boardHuman.placeShip(s.Ship, s.cor, s.dir)
        });
        
    // Essaie de faire mieux la semaine prochaine la je suis fatigué, check si tous les trucs
    // sont bien vidés, la y a truc qui va pas ca génère 2 fois le même btn


    //     document.addEventListener('click', () => {
    //         if(ShowGame.getGameOver()){
    //         gameOver([boardHuman, boardIA, playerHuman, playerIA, ShipHuman,
    //             ShipIA, graphicBoardIA, graphicBoardHuman], newGameBtn)
    //             newGameBtn = document.createElement('button');
    //             document.body.appendChild(newGameBtn);
    //             newGameBtn.setAttribute('id', 'NG');
    //             newGameBtn.textContent = "New Game";
    //     }
        
    // })
        
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

