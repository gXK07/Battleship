// const body = document.getElementById("body");
// console.log(body);
const createBoard = (gameBoard) => {
    let boardDOM = [];
    for (let i=0; i<100; i++){
        boardDOM[i] = document.createElement('div');
        boardDOM[i].setAttribute('id', i);
        boardDOM[i].classList.add('field');
        document.body.appendChild(boardDOM[i]);
        
    }
    
}

module.exports = createBoard;