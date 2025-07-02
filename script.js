//Si se llena el tablero sin ganador no dice que esta lleno y que hay empate


function Game(){
    const gameboard = Array(9).fill(null);

    function printGameboard(){
        for (let i = 0; i < 9; i += 3) {
            const row = `${mostrar(i)}|${mostrar(i+1)}|${mostrar(i+2)}`;
            console.log(row);
            if (i < 6) console.log("-----");
    }}

    function mostrar(index) {
        return gameboard[index] === null ? " " : gameboard[index];
    }

    function play(posicion,marker,name){
        const jugada=parseInt(posicion)
        gameboard[jugada]=marker 
        console.log(`El jugador ${name} juega en la posicion ${posicion}`)
        printGameboard()
    }
    function getGameboard(){
        return gameboard
    }
    function checkWinner(){
        const winningLines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
            [0, 4, 8], [2, 4, 6]             // diagonales
        ]

         for (const line of winningLines) {
            const [a, b, c] = line;
            if (
                gameboard[a] !== null &&
                gameboard[a] === gameboard[b] &&
                gameboard[a] === gameboard[c]
            ) {
                return gameboard[a]; // "X" o "O"
            }
        }
        return null; // no hay ganador
    }
    
    return{ printGameboard , play, getGameboard, checkWinner}
}

function Playround(game){
    const gameboard=game.getGameboard()
    function playround(player1,player2){
        for (let i=0; i<9;i++){
            const full = gameboard.every(cell => cell !== null)
            if(full){
                if(!winner){
                    alert("El juego termino en empate")
                }
                alert("El juego termino")
                break
            }
            else{
                console.log("MOSTRANDO PROMPT PARA PLAYER 1");
                const play1pos=parseInt(prompt("Player 1: "))
                if(gameboard[play1pos]===null){
                    player1.play(play1pos)
                    const winner=game.checkWinner()
                    if (winner){
                        alert(`El jugador ${winner} ha ganado`)
                        break
                    }
                    

                    console.log("MOSTRANDO PROMPT PARA PLAYER 2");
                    const play2pos=parseInt(prompt("Player 2 "))
                    if(gameboard[play2pos]===null){
                        player2.play(play2pos)
                        const winner=game.checkWinner()
                    if (winner){
                        alert(`El jugador ${winner} ha ganado`)
                        break
                    }
                    }
                    else{alert("Esa posicion ya esta ocupada")
                        break
                    }

                }
                else{alert("Esa posicion ya esta ocupada")
                    break
                }
                }
            }        
    }

    return{ playround }
}



const game=Game();
const playround1=Playround(game);

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

playround1.playround(jorge,mario)

game.printGameboard()


/* 0|1|2
   -----
   3|4|5
   -----
   6|7|8
   ----- */ 