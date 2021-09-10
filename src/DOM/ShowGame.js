// créer les boards de jeux au niveau du HTML (Humain ou IA)

const createBoard = (type) => {
    let rang = {
        a : undefined,
        b : undefined,
        c : undefined,
        d : undefined,
        e : undefined,
        f : undefined,
        g : undefined,
        h : undefined,
        i : undefined,
        j : undefined,
    };
    let container = undefined;
    let playArea = document.getElementById('playArea');
    if(type === 'Human'){
    container = document.getElementById('HumanZone');
    playArea.appendChild(container);
    }
    else if (type === 'IA'){
    container = document.getElementById('IAZone');
    playArea.appendChild(container);
    }
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    for (let i=0; i<10; i++){
        rang[letters[i]] = {
            div : document.createElement('div'),
            cases : []
        }
        rang[letters[i]].div.setAttribute('id', letters[i]);
        rang[letters[i]].div.classList.add('rang');
        container.appendChild(rang[letters[i]].div);
        for(let j=0; j<10; j++){
            rang[letters[i]].cases[j] = document.createElement('button');
            rang[letters[i]].cases[j].setAttribute('id', j);
            if(type === 'IA'){
            rang[letters[i]].cases[j].classList.add('case');
        }
        else{
            rang[letters[i]].cases[j].classList.add('case');
            rang[letters[i]].cases[j].classList.add('caseIA');
        }
            rang[letters[i]].div.appendChild(rang[letters[i]].cases[j])
        }
    }
    return rang;
}

// Place les listener sur la board ennemie et déclanche l'attaque de l'IA dans 
// la foulée


let gameOver = false;

const setShootListener = (rang1, rang2, player1, player2) => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    for(let i=0; i<10; i++){
        rang1[letters[i]].cases.forEach(element => {
            element.addEventListener('click', () => {
                if(element.classList.contains('touch') || 
                   element.classList.contains('hit')){
                    return;
                }
                else{
                    player1.Attack(element.parentNode.id, element.id);
                    if(player2.board.board[element.parentNode.id][element.id].boat !== undefined){
                        element.classList.add('hit')
                    }
                    else{
                        element.classList.add('touch');
                    }
                    const cor = player2.AttackIA();
                    if(player1.board.board[cor.x][cor.y].boat !== undefined){
                        rang2[cor.x].cases[cor.y].classList.add('hit');
                    }
                    else{
                        rang2[cor.x].cases[cor.y].classList.add('touch');
                    }
                    }
                 if(player1.board.gameOver()){
                    alert("IA won !");
                    gameOver = true;
                }
                if(player2.board.gameOver()){
                    alert("Human player won !");
                    gameOver = true;
                }
            })
            })
        }

    }

    const getGameOver = () => {
        return gameOver
    }

const ShowGame = {
        createBoard,
        setShootListener,
        getGameOver
    }

export {ShowGame}