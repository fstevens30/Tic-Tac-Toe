// Player setup
const playerOne = "X"; // Player One is always X
const playerTwo = "O"; // Player Two is always O
let currentPlayer = playerOne; // Player One always starts first
document.getElementById("message").innerHTML = currentPlayer + " starts first!";
let gameOver = false; // Game is not over

const winningCombos = [ // Array of winning combinations
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top left
    [2, 4, 6] // Diagonal from top right
];

// Functionality for squares

let square = document.querySelectorAll(".Square"); // Get all the squares
for (let i = 0; i < square.length; i++) { // Loops through each square
    square[i].addEventListener("click", function() { // Adds an event listener to each square
        if (square[i].innerHTML === "" && gameOver === false) { // Checks if the square is empty
            square[i].innerHTML = currentPlayer; // Adds the current player's symbol to the square
            square[i].classList.add("Taken"); // Adds the class of "Taken" to the square
            square[i].classList.remove("Square"); // Removes the class of "Square" from the square
            checkWinner(); // Checks if the current player has won
            changePlayer(); // Changes the current player
        }
    });
}


// Functions

function changePlayer() { // Changes the current player
    if (gameOver === false) { // Checks if the game is over
        if (currentPlayer == playerOne) {
            currentPlayer = playerTwo;
            // Set the message to display the current player
            document.getElementById("message").innerHTML = "Player " + currentPlayer + "'s turn";
        } else {
            currentPlayer = playerOne;
            // Set the message to display the current player
            document.getElementById("message").innerHTML = "Player " + currentPlayer + "'s turn";
        }
    }
}


function checkWinner() { // Checks if the current player has won
    for (let i = 0; i < winningCombos.length; i++) { // Loops through each winning combination
        if (square[winningCombos[i][0]].innerHTML == currentPlayer && square[winningCombos[i][1]].innerHTML == currentPlayer && square[winningCombos[i][2]].innerHTML == currentPlayer) { // Checks if the current player has three in a row
            // Set the message to display the current player
            document.getElementById("message").innerHTML = "Game over! Player " + currentPlayer + " wins!";

            // Add the class of "winner" to the winning squares
            square[winningCombos[i][0]].classList.add("winner");
            square[winningCombos[i][1]].classList.add("winner");
            square[winningCombos[i][2]].classList.add("winner");

            gameOver = true; // Game is over

            // Else is the game is a draw
        } else if (square[0].innerHTML != "" && square[1].innerHTML != "" && square[2].innerHTML != "" && square[3].innerHTML != "" && square[4].innerHTML != "" && square[5].innerHTML != "" && square[6].innerHTML != "" && square[7].innerHTML != "" && square[8].innerHTML != "" && gameOver == false) {
            document.getElementById("message").innerHTML = "It's a draw!"; // Displays the message
            gameOver = true; // Game is over
        }
    }
}