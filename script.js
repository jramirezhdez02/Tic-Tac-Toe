
function Game(){
    const gameboard = Array(9).fill(null);

    function printGameboard(){
        console.table(gameboard)
    }

    function play(posicion,marker,name){
        const jugada=parseInt(posicion)
        gameboard[jugada]=marker 
        console.log(`El jugador ${name} juega en la posicion ${posicion}`)
    }
    return{ printGameboard , play }
}

const game=Game();

function createPlayer (name,marker){
    if(marker!=='X' && marker!=='O'){
        return 'Introduzca un marcador valido'
    }
    else{
    const userName=name;
    const userSimbol=marker;

    function play(posicion){
        game.play(posicion,marker,name)
    }

    return{name,marker,play}
}
}
const jorge = createPlayer("Jorge", "O");
const mario = createPlayer("Mario", "X")


jorge.play(prompt());
mario.play(prompt());

game.printGameboard()


/* 0|1|2
   -----
   3|4|5
   -----
   6|7|8
   ----- */ 