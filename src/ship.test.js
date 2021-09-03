const Ship = require('./ship.js');

test('Test creation obj', () => {
    expect(Ship('bateau', 5).length).toBe(5);
})

const navire = Ship('navire', 7);
navire.hit(4);

test('test hit()', () => {
    expect(navire.isSunk()).toBe(false);
})

const paquebot = Ship('paquebot', 7)
for(let i =0; i<paquebot.length; i++){
    paquebot.hit(i);
}

test('test isSunk()', () => {
    expect(paquebot.isSunk()).toBe(true);
})