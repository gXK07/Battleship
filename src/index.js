import Player from "./Player";
import css from "./style.css";
import { createBoard, listener, formBoats} from "./DOM/DOM";
const gameBoard = require('./gameBoard');


const newGame = document.getElementById('NG');

const game = () => {
    formBoats();
    const board1 = gameBoard();
    const board2 = gameBoard();
    const player1 = Player('Human', board1, board2);
    const player2 = Player('IA', board2, board1);
    listener(createBoard(1),createBoard(2), player1, player2);
    newGame.remove();
}


newGame.addEventListener('click', game)

