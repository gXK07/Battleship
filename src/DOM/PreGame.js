let dataship = {
    Carrier : undefined,
    Battleship : undefined,
    Cruiser : undefined,
    Submarine : undefined,
    Destroyer : undefined,
};
// Ships = [Carrier, Battleship, Cruiser, Submarine, Destroyer];
const DisplayPreGame = (Ships) => {
    const header = document.createElement('div');
    header.textContent = "Place your boats ! ";
    document.body.appendChild(header);

    //TOUT CA C'EST DE LA MERDE FAIT A LA VA VITE, REGARDE TOUT CA LA TETE AU FRAIS >>>>
    // (pour afficher une board qui sert à placer les bateaux)


    // const PreBoard = {
    //     a : undefined,
    //     b : undefined,
    //     c : undefined,
    //     d : undefined,
    //     e : undefined,
    //     f : undefined,
    //     g : undefined,
    //     h : undefined,
    //     i : undefined,
    //     j : undefined,
    // };
    // const preContainer = document.createElement('div');
    // preContainer.setAttribute('id', 'preContainer');
    // document.body.appendChild(preContainer);
    // const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    // for (let i=0; i<10; i++){
    //     PreBoard[letters[i]] = {
    //         div : document.createElement('div'),
    //         cases : []
    //     }
    //     PreBoard[letters[i]].div.setAttribute('id', letters[i]);
    //     PreBoard[letters[i]].div.classList.add('rang');
    //     preContainer.appendChild(PreBoard[letters[i]].div);
    //     for(let j=0; j<10; j++){
    //         PreBoard[letters[i]].cases[j] = document.createElement('button');
    //         PreBoard[letters[i]].cases[j].setAttribute('id', j);
    //         PreBoard[letters[i]].cases[j].classList.add('case');
    //     }
    // }
    // console.log(PreBoard);
    
    const StartGame = document.createElement('button');
    const boatsBtns = {
    Carrier : document.createElement('button'),
    Battleship : document.createElement('button'),
    Cruiser : document.createElement('button'),
    Submarine : document.createElement('button'),
    Destroyer : document.createElement('button'),
    }
    
    const mode = (ship) => {
        if(ship === 'Carrier'){
            dataship[ship] = {
                Ship : Ships[0],
                cor : {x: 'a', y : 0},
                dir : 'horizontal'
            }
        }
        if(ship === 'Battleship'){
            dataship[ship] = {
                Ship : Ships[1],
                cor : {x: 'b', y : 0},
                dir : 'horizontal'
            }
        }
        if(ship === 'Cruiser'){
            dataship[ship] = {
                Ship : Ships[2],
                cor : {x: 'c', y : 0},
                dir : 'horizontal'
            }
        }
        if(ship === 'Submarine'){
            dataship[ship] = {
                Ship : Ships[3],
                cor : {x: 'd', y : 0},
                dir : 'horizontal'
            }
        }
        if(ship === 'Destroyer'){
            dataship[ship] = {
                Ship : Ships[4],
                cor : {x: 'e', y : 0},
                dir : 'horizontal'
            }
        }
    }
    Ships.forEach(ship => {
        document.body.appendChild(boatsBtns[ship.name]);
        boatsBtns[ship.name].textContent = ship.name;
        boatsBtns[ship.name].classList.add('BoatBtns')
        boatsBtns[ship.name].addEventListener('click', () => {
            mode(ship.name);
        })
    });
    document.body.appendChild(StartGame);
    StartGame.addEventListener('click', () => {
        Ships.forEach(ship => {
            boatsBtns[ship.name].remove()
            })
        header.remove()
    })
    return StartGame;
}

export {DisplayPreGame, dataship}