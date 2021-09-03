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
        isSunk
    }
}

module.exports = Ship;