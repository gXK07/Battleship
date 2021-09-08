const createBoard = (nb) => {
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
    if(nb === 1){
    container = document.getElementById('HumanZone');
    playArea.appendChild(container);
    }
    else if (nb === 2){
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
            rang[letters[i]].cases[j].classList.add('case');
            rang[letters[i]].div.appendChild(rang[letters[i]].cases[j])
        }
    }
    return rang;
}

const setShootListener = (rang1, rang2, player1, player2) => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    for(let i=0; i<10; i++){
        rang1[letters[i]].cases.forEach(element => {
            element.addEventListener('click', () => {
                player1.Attack(element.parentNode.id, element.id);
                if(player2.board.board[element.parentNode.id][element.id].boat !== undefined){
                    element.classList.add('hit')
                }
                else{
                    element.classList.add('touch');
                }
                const cor = player2.AttackIA();
                console.log(cor);
                if(player1.board.board[cor.x][cor.y].boat !== undefined){
                    rang2[cor.x].cases[cor.y].classList.add('hit');
                }
                else{
                    rang2[cor.x].cases[cor.y].classList.add('touch');
                }
                })
            })
        }
    }

const formBoats = () => {
    const form = {
        cor : {
            Carrier : undefined,
            Battleship : undefined,
            Cruiser : undefined,
            Submarine : undefined,
            Destroyer : undefined
        },
        questions : document.createElement('form')
    }
    const questions = [];
    for(let i =0; i<5; i++){
        questions[i] = document.createElement('input');
        form.questions.appendChild(questions[i])
    }
    questions[0].setAttribute('placeholder', 'Carrier')
    questions[1].setAttribute('placeholder', 'Battleship')
    questions[2].setAttribute('placeholder', 'Cruiser')
    questions[3].setAttribute('placeholder', 'Submarine')
    questions[4].setAttribute('placeholder', 'Destroyer')
    document.body.appendChild(form.questions);
}


// const listenerShip = (ship) => {
//     for(let i=0; i<10; i++){
//         for(let j=0; j<10; j++){
//             addEventListener
//         }
//     }
// }


export {createBoard, setShootListener, formBoats}