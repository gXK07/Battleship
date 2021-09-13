
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
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
    
    const StartGame = document.createElement('button');

    const boatsForm = {
    Carrier : {
        div : document.createElement('form'),
        x : [new Array(10), document.createElement('input')]
    },
    Battleship : {
        div : document.createElement('form'),
        x : [new Array(10), document.createElement('input')]
    },
    Cruiser : {
        div : document.createElement('form'),
        x : [new Array(10), document.createElement('input')]
    },
    Submarine : {
        div : document.createElement('form'),
        x : [new Array(10), document.createElement('input')]
    },
    Destroyer : {
        div : document.createElement('form'),
        x : [new Array(10), document.createElement('input')]
    }
    }
    
    // const mode = (ship) => {
    //     if(ship === 'Carrier'){
    //         dataship[ship] = {
    //             Ship : Ships[0],
    //             cor : {x: 'a', y : 0},
    //             dir : 'horizontal'
    //         }
    //     }
    //     if(ship === 'Battleship'){
    //         dataship[ship] = {
    //             Ship : Ships[1],
    //             cor : {x: 'b', y : 0},
    //             dir : 'horizontal'
    //         }
    //     }
    //     if(ship === 'Cruiser'){
    //         dataship[ship] = {
    //             Ship : Ships[2],
    //             cor : {x: 'c', y : 0},
    //             dir : 'horizontal'
    //         }
    //     }
    //     if(ship === 'Submarine'){
    //         dataship[ship] = {
    //             Ship : Ships[3],
    //             cor : {x: 'd', y : 0},
    //             dir : 'horizontal'
    //         }
    //     }
    //     if(ship === 'Destroyer'){
    //         dataship[ship] = {
    //             Ship : Ships[4],
    //             cor : {x: 'e', y : 0},
    //             dir : 'horizontal'
    //         }
    //     }
    // }

    const mode = (ship, cor, dir) => {
        if(ship === 'Carrier'){
            dataship[ship] = {
                Ship : Ships[0],
                cor,
                dir
            }
        }
        if(ship === 'Battleship'){
            dataship[ship] = {
                Ship : Ships[1],
                cor,
                dir
            }
        }
        if(ship === 'Cruiser'){
            dataship[ship] = {
                Ship : Ships[2],
                cor,
                dir
            }
        }
        if(ship === 'Submarine'){
            dataship[ship] = {
                Ship : Ships[3],
                cor,
                dir
            }
        }
        if(ship === 'Destroyer'){
            dataship[ship] = {
                Ship : Ships[4],
                cor,
                dir
            }
        }
    }
    Ships.forEach(ship => {
        document.body.appendChild(boatsForm[ship.name].div);
        boatsForm[ship.name].div.textContent = ship.name;
        for(let i = 0; i<11; i++){
            if(i<10){
            boatsForm[ship.name].x[0][i] = document.createElement('input');
            boatsForm[ship.name].x[1][i] = document.createElement('label');
            boatsForm[ship.name].x[0][i].setAttribute('type', 'radio')
            boatsForm[ship.name].x[0][i].setAttribute('id', letters[i])
            boatsForm[ship.name].x[0][i].setAttribute('name', ship.name)
            boatsForm[ship.name].x[1][i].setAttribute('for', letters[i])
            boatsForm[ship.name].x[1][i].textContent = letters[i];
            boatsForm[ship.name].x[0][i].setAttribute('value', letters[i])
            boatsForm[ship.name].div.appendChild(boatsForm[ship.name].x[0][i])
            boatsForm[ship.name].div.appendChild(boatsForm[ship.name].x[1][i])
            }
            if(i === 10){
                boatsForm[ship.name].x[0][i] = document.createElement('button');
                boatsForm[ship.name].div.appendChild(boatsForm[ship.name].x[0][i])
                boatsForm[ship.name].x[0][i].addEventListener("click", () => {
                    console.log("data");
                })
            }
        }
        console.log(boatsForm);
        boatsForm[ship.name].div.classList.add('BoatBtns')
        boatsForm[ship.name].div.addEventListener('click', () => {
            mode(ship.name, {x : 'a', y : 0}, "horizontal" );
        })
    });
    document.body.appendChild(StartGame);
    StartGame.addEventListener('click', () => {
        Ships.forEach(ship => {
            boatsForm[ship.name].div.remove()
            })
        header.remove()
    })
    return StartGame;
}

export {DisplayPreGame, dataship}