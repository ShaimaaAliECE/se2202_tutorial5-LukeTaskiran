let nextPlayer = 'X'; 
let nextPlayer2 = document.getElementById('next-lbl');
nextPlayer2.innerText = " " + nextPlayer;
//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard() {
    let tictactoecells = document.getElementsByTagName('td')
    
    for (let i = 0; i < cells.length; i++) {


        let btn0 = document.createElement('button')
        btn0.innerText = "[ ]"
        tictactoecells[i].appendChild(btn0)
    }
}
// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}
// This function will be used to respond to a click event on any of the board buttons.
function takeCell (event) {
    event.target.innerText = "[" + nextPlayer + "]";
    event.target.disabled = true;


    if (nextPlayer == 'X') nextPlayer = 'O';
    else nextPlayer = 'X';
    nextPlayerLabel.innerText = " " + nextPlayer;

    if (isGameOver()) {
        let h1 = document.createElement("h1");
        let textNode = document.createTextNode("Game Over!")
        h1.appendChild(textNode);
        let gameOver0 = document.getElementById('game-over-lbl');
        gameOver0.appendChild(h1);
    }
}

function isGameOver() {// This function returns true if all the buttons are disabled and false otherwise 


    let gameover = 0;
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].gameover) {
            gameover++;
        }
    }
    if (gameover == 9) {
        return true;
    }
    return false;
}
