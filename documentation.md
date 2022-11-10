## Technical Report

----------------------

This program is part of a project for WEB503, NMIT. The HTML and CSS have been provided (although modified slightly) by the tutor, with the goal of students creating the JavaScript functionality.

This project was made by:

- [Keith Jhaeron Cayatoc](https://github.com/Yugenzariah)
- [Flynn Stevens](https://github.com/fstevens30)

The following documentation describes the functionality behind the Tic Tac Toe web application.

---------------------------

## Board Setup

The setup contains a few lines of code to setup variables such as the players, their icons (either `X` or `O`) as well as arrays for the board and an array of winning combinations. None of these lines do anything special but are important to declare beforehand to be referenced later in the program.

### Players

First we setup the players and gave them a variable and allocated an icon for each of them. There is also a variable cretaed for the player which starts to allow a creation of a function to switch players. Here is an example of the code:

```JavaScript
const playerOne = "X";
const playerTwo = "O";

let currentPlayer = playerOne;
```

### Board and other elements

Now we can setup the board and other elements within the HTML code. Firstly we can target the `message` div to display a message stating which player starts the game. We can also declare a variable to a boolean for whether or not the game is over.

```JavaScript
document.getElementById('message').innerHTML = currentPlayer + " starts first!"

let gameOver = false;
```

Lastly we can make an array of winning combinations to reference later.

```JavaScript
const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top left
    [2, 4, 6] // Diagonal from top right
]
```

-----------------------------

## Event listners

Next event listners are created and functionality is added for when each cell is clicked. This is done by creating a for loop to loop through all of the cells and attach certain classes to them depending on whether they are taken or not.

```JavaScript
let square = document.querySelectorAll(".Square") 
```

The above code selects all elements in the HTML with the class of `Square`. Then using event listners and callback functions we can add functionality for clicking on each square.

```JavaScript
for (let i = 0; i < square.length; i++) { 
    square[i].addEventListener("click", function() { 
    // Do something
    }
```

Now within the function we can add code to display the users icon and add a class of `Taken` so it cannot be clicked again.

```JavaScript
if (square[i].innerHTML === "" && gameOver === false) {
    square[i].innerHTML = currentPlayer;
    square[i].classList.add("Taken");
    square[i].classList.remove("Square");
    checkWinner();
    changePlayer();
}
```

The above code first checks if the square is empty and if the game is not over. IF these conditions are met it will add the current players icon the the square, add the class of `Taken`, remove the class of `Square` and then run the functions to check if the game is over and lastly change the player (which will be explained next).

The class of `Taken` contains mostly the same CSS attributes as the class of `Square` however it changes the cursor when hovered so the user cannot click it at all.

```CSS
.Taken {
    height: 80px;
    width: 80px;
    font-size: 45pt;
    text-align: center;
    cursor: not-allowed;
}
```

-------------------------------

## Changing players

The changing players function is a simple if statement to change the player and is run after a player places an icon. It also displays a message in the `message` div letting the players know who's turn it is.

```JavaScript
function changePlayer() {
    if (gameOver === false) {
        if (currentPlayer === playerOne) {
            currentPlayer === playerTwo;
            document.getElementById("message").innerHTML = "Player " + currentPlayer + "'s turn!"
        }
        else {
            currentPlayer === playerOne;
            document.getElementById("message").innerHTML = "Player " + currentPlayer + "'s turn!"
        }
    }
}
```

------------------------

## End game

This functionality checks if the game is over, either by a draw or a win. It runs after an element is clicked and before the player is changed.

### Win

Firstly it loops through the array of winning comboniations ands checks if the square that was just placed created a match to any of the combiniations.

```JavaScript
function checkWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        if (square[winningCombos[i][0]].innerHTML == currentPlayer && square[winningCombos[i][1]].innerHTML == currentPlayer && square[winningCombos[i][2]].innerHTML == currentPlayer) {
            //Do something
        }
    }
}
```

If the game is won the following lines are executed. Firstly it displayed a message that the current player has won, then it highlights the squares that were the winning squares by giving them a class of `winner` and finally sets the `gameOver` variable to `false`.

```JavaScript
document.getElementById("message").innerHTML = "Game over! Player " + currentPlayer + " wins!";

square[winningCombos[i][0]].classList.add("winner");
square[winningCombos[i][1]].classList.add("winner");
square[winningCombos[i][2]].classList.add("winner");

gameOver = true;
```

### Draw

Inside of the `checkWinner()` function it also checks for a draw. This is when all tiles are full and no winner has been found. It will display a message and set the `gameOver` variable to `false`. This is after the if statement that checks for a winner.

```JavaScript
else if (square[0].innerHTML != "" && square[1].innerHTML != "" && square[2].innerHTML != "" && square[3].innerHTML != "" && square[4].innerHTML != "" && square[5].innerHTML != "" && square[6].innerHTML != "" && square[7].innerHTML != "" && square[8].innerHTML != "" && gameOver == false) {
    document.getElementById("message").innerHTML = "It's a draw!";
    gameOver = true;
}
```

--------------------------------
