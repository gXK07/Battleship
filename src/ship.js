const Ship = (name, length) => {
    let boardLife = new Array(length);
        boardLife.forEach(e => e = false);
    const hit = (number) => {
        boardLife[number] = true;
    }
    const isSunk = () => {
        let sunk = true;
        for (let i = 0; i<length; i++){
            if(!(boardLife[i])){
                sunk = false;
            }
        }
        return sunk
    }

    return {
        name,
        length,
        hit,
        isSunk,
        boardLife
    }
}

const Carrier = Ship('Carrier', 5);
const Battleship = Ship('Battleship', 4);
const Cruiser = Ship('Cruiser', 3);
const Submarine = Ship('Submarine', 2);
const Destroyer = Ship('Destroyer', 1);
const Ships = [Carrier, Battleship, Cruiser, Submarine, Destroyer];

export {Ships, Ship}