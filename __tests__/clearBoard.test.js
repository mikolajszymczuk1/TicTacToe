import { clearBoard } from "../src/js/functions";

describe("clearBoard functions", () => {
    test("Must clear all cells in board", () => {
        document.body.innerHTML = `
            <section class="game__board">
                <div class="game__board-cell" data-cell="X"><div class="game__cross"></div></div>
                <div class="game__board-cell" data-cell="X"><div class="game__cross"></div></div>
                <div class="game__board-cell" data-cell="X"><div class="game__cross"></div></div>
                <div class="game__board-cell" data-cell="X"><div class="game__cross"></div></div>
                <div class="game__board-cell" data-cell="X"><div class="game__cross"></div></div>
                <div class="game__board-cell" data-cell="X"><div class="game__cross"></div></div>
                <div class="game__board-cell" data-cell="X"><div class="game__cross"></div></div>
                <div class="game__board-cell" data-cell="X"><div class="game__cross"></div></div>
                <div class="game__board-cell" data-cell="X"><div class="game__cross"></div></div>
            </section>
        `;

        const cells = document.querySelectorAll(".game__board-cell");
        clearBoard(cells);

        for (let c of cells) {
            expect(c.innerHTML).toEqual("");
            expect(c.dataset.cell).toEqual("");
        }
    });
});
