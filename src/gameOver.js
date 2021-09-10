const gameOver = (a) => {
    for(let i = 0; i<a.length; i++){
        if(i<6){
            console.log('avant : ', a[i]);
            a[i] = undefined;
            console.log('apres : ', a[i]);
        }
        else{
            let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
            for(let j = 0; j<10; j++){
                console.log('avant : ', a[i][letters[j]].div);
                a[i][letters[j]].div.remove();
                console.log('apres : ', a[i][letters[j]].div);
            }
        }
    }
}

export {gameOver}