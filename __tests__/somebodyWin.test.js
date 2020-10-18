import { somebodyWin } from "../src/js/functions";

describe("somebodyWin function", () => {
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

    let player = "X";

    test("1 situation", () => {
        document.body.innerHTML = `
            <section class="game__board">
                <div class="game__board-cell" data-cell="X"></div>
                <div class="game__board-cell" data-cell="X"></div>
                <div class="game__board-cell" data-cell="X"></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
            </section>
        `;

        const cells = document.querySelectorAll(".game__board-cell");
        expect(somebodyWin(winMoves, cells, player)).toEqual(true);
    });

    test("2 situation", () => {
        document.body.innerHTML = `
            <section class="game__board">
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell="X"></div>
                <div class="game__board-cell" data-cell="X"></div>
                <div class="game__board-cell" data-cell="X"></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
            </section>
        `;

        const cells = document.querySelectorAll(".game__board-cell");
        expect(somebodyWin(winMoves, cells, player)).toEqual(true);
    });

    test("3 situation", () => {
        document.body.innerHTML = `
                <section class="game__board">
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell="X"></div>
                </section>
            `;

        const cells = document.querySelectorAll(".game__board-cell");
        expect(somebodyWin(winMoves, cells, player)).toEqual(true);
    });

    test("4 situation", () => {
        document.body.innerHTML = `
                <section class="game__board">
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"</div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                </section>
            `;

        const cells = document.querySelectorAll(".game__board-cell");
        expect(somebodyWin(winMoves, cells, player)).toEqual(true);
    });

    test("5 situation", () => {
        document.body.innerHTML = `
                <section class="game__board">
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                </section>
            `;

        const cells = document.querySelectorAll(".game__board-cell");
        expect(somebodyWin(winMoves, cells, player)).toEqual(true);
    });

    test("6 situation", () => {
        document.body.innerHTML = `
                <section class="game__board">
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                </section>
            `;

        const cells = document.querySelectorAll(".game__board-cell");
        expect(somebodyWin(winMoves, cells, player)).toEqual(true);
    });

    test("7 situation", () => {
        document.body.innerHTML = `
                <section class="game__board">
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                </section>
            `;

        const cells = document.querySelectorAll(".game__board-cell");
        expect(somebodyWin(winMoves, cells, player)).toEqual(true);
    });

    test("8 situation", () => {
        document.body.innerHTML = `
                <section class="game__board">
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell="X"></div>
                    <div class="game__board-cell" data-cell></div>
                    <div class="game__board-cell" data-cell></div>
                </section>
            `;

        const cells = document.querySelectorAll(".game__board-cell");
        expect(somebodyWin(winMoves, cells, player)).toEqual(true);
    });

    test("Nobody win", () => {
        document.body.innerHTML = `
            <section class="game__board">
                <div class="game__board-cell" data-cell="X"></div>
                <div class="game__board-cell" data-cell="X"></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell="X"></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
                <div class="game__board-cell" data-cell></div>
            </section>
        `;

        const cells = document.querySelectorAll(".game__board-cell");
        expect(somebodyWin(winMoves, cells, player)).toEqual(false);
    });
});
