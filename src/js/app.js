import "@fortawesome/fontawesome-free/css/all.css";
import { createCircleCross, whoFirst, nextPlayer, clearBoard, somebodyWin, changeColorMode, isColorModeSet } from "./functions";

// Set color mode
!isColorModeSet ? changeColorMode("light-mode") : changeColorMode(localStorage.getItem("color-mode"));

// Get game elements
const board = document.querySelector(".game__board");
const cells = document.querySelectorAll(".game__board-cell");
const message = document.querySelector(".game__messages");
const clear_button = document.querySelector(".clear-b");
const theme_button = document.querySelector(".theme-b");

// Possible win positions
const winMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let player = whoFirst();
let canMove = true;

// Interactions
board.addEventListener("click", (e) => {
    gameController(e);
});

clear_button.addEventListener("click", () => { 
    clearBoard(cells);
    message.innerText = "O vs X";
    canMove = true;
});

theme_button.addEventListener("click", () => {
    let currentColorMode = localStorage.getItem("color-mode");

    if (currentColorMode === "light-mode") {
        changeColorMode("dark-mode");
    } else {
        changeColorMode("light-mode")
    }
});

// Main game controller
function gameController(e) {
    if (canMove) {
        if (!e.target.hasChildNodes()) {
            createCircleCross(player, e.target);

            if (somebodyWin(winMoves, cells, player)) {  // Check if somebody win
                message.innerText = player + " win !!!";
                canMove = false;
            }

            player = nextPlayer(player);
        }
    }
}
