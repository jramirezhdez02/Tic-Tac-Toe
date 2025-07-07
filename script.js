//Revisar requerimientos restantes del proyecto, esta casi terminado. Funcion de reinicio para volver a jugar


let player1 = null;
let player2 = null;
let player = null;

const display=document.createElement("div")
        display.id="game-display"
        document.body.appendChild(display)
        display.textContent="Welcome to Tic-Tac-Toe"
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
        display.textContent=`El jugador ${name} juega en la posicion ${posicion}`
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
                if (gameboard[a]=== "X"){
                    return player1.name
                }
                else{
                return player2.name; // "X" o "O"
                }
            }
        }
        return null; // no hay ganador
    }
    
    return{ printGameboard , play, getGameboard, checkWinner}
}

function Playround(game){
    const gameboard=game.getGameboard()
    function playround(playpos){

        if(gameboard[playpos]===null){
            player.play(playpos)
            const full = gameboard.every(cell => cell !== null)
            const winner=game.checkWinner()
            
            if (winner){
                display.textContent=`El jugador ${winner} ha ganado`
                const botonReset = document.createElement("button");
                botonReset.textContent = "Reiniciar juego";
                botonReset.addEventListener("click", () => {
                location.reload(); // recarga toda la página
});
document.body.appendChild(botonReset);               
            }
            else if(full){
                display.textContent="El juego termino en empate"              
            }
            else{
                cambiarplayer()
                display.textContent=`Turno de ${player.name}`
            }

        }
        else{
            display.textContent="Esa posicion ya esta ocupada"}                   
    }

    return{ playround }
}
function Display(){
    function players(){
        const input1=document.createElement("input")
        input1.type="text";
        input1.placeholder="Nombre de Player 1 (X)"

        const boton1 = document.createElement("button");
        boton1.textContent = "Guardar nombre";

        document.body.appendChild(input1);
        document.body.appendChild(boton1);

        boton1.addEventListener("click", function() {
            player1 = createPlayer(input1.value, "X");
            display.textContent="Jugador 1 guardado correctamente"
          });

        const input2=document.createElement("input")
        input2.type="text";
        input2.placeholder="Nombre de Player 2 (O)"

        const boton2 = document.createElement("button");
        boton2.textContent = "Guardar nombre";

        document.body.appendChild(input2);
        document.body.appendChild(boton2);

        boton2.addEventListener("click", function() {
            player2 = createPlayer(input2.value, "O");
            display.textContent="Jugador 2 guardado correctamente"
            if (player1 && player2) {
                player = Math.random() < 0.5 ? player1 : player2;
                display.textContent += ` |Turno de ${player.name}`;
            }
          });  
    }


    function displayboard(){        
        const gamecontainer=document.createElement("div")
        gamecontainer.id="game-container"
        document.body.appendChild(gamecontainer)

        
    for (let i=0;i<9;i++){
        const squarei=document.createElement("div")
        squarei.id="square";
        squarei.addEventListener("click", () => {
    let playpos = i;
    const currentPlayer = player;  // Captura el jugador actual ANTES de cambiarlo
    playround1.playround(playpos);
    squarei.textContent = currentPlayer.marker;  // Muestra su marcador, no el del siguiente
});
        gamecontainer.appendChild(squarei);
    }
}
return{displayboard,players}
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


function cambiarplayer(){
    player = (player===player1) ? player2:player1;
    console.log("Estado actual: ", player)
}


const playround1=Playround(game);




game.printGameboard()
const displayInstance=Display();
displayInstance.displayboard()
displayInstance.players()




/* 0|1|2
   -----
   3|4|5
   -----
   6|7|8
   ----- */ 