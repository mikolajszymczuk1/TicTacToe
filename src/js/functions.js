// Create circle or cross and add to parent
function createCircleCross(t, p) {
    let div = document.createElement("div");

    if (t === "O") {
        div.classList.add("game__circle");
    } else {
        div.classList.add("game__cross");
    }

    p.dataset.cell = t;
    p.appendChild(div);
}

// Check if somebody is winner
function somebodyWin(winMoves, cells, player) {
    for (let win of winMoves) {
        if ((cells[win[0]].dataset.cell === player) && (cells[win[1]].dataset.cell === player) && (cells[win[2]].dataset.cell === player)) {
            return true;
        }
    }
    
    return false;
}

// Pick a player who will be first
function whoFirst() {
    const num = Math.floor(Math.random() * 2);
    let firstPlayer;

    if (num === 0) {
        firstPlayer = "O";
    } else {
        firstPlayer = "X";
    }

    return firstPlayer;
}

// Change to next player
function nextPlayer(p) {
    if (p === "O") {
        return "X";
    }

    return "O";
}

// Clear board
function clearBoard(cells) {
    for (let c of cells) {
        c.innerHTML = "";
        c.dataset.cell = "";
    }
}

// Color mode functions
function changeColorMode(mode) {
    document.documentElement.classList = mode;
    localStorage.setItem("color-mode", mode);
}

function isColorModeSet() {
    return localStorage.getItem("color-mode") ? true : false;
}


export { createCircleCross, whoFirst, nextPlayer, clearBoard, somebodyWin, changeColorMode, isColorModeSet};
