const gameOver = (a) => {
    console.log(a);
    for(let i = 0; i<a.length; i++){
        if(i<6){
            a[i] = undefined;
        }
        else{
            let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
            console.log("boards à remove", a[i]);
            for(let j = 0; j<10; j++){
                a[i][letters[j]].div = undefined;
                console.log(a[i][letters[j]].div);
            }
        }
    }
}

export {gameOver}