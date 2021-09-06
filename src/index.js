import css from "./style.css";

const gameBoard = require('./gameBoard');
const createBoard = require('./DOM/DOM');


const newGame = document.getElementById('NG');

const game = () => {
    createBoard(gameBoard());
}
newGame.addEventListener('click', game)

