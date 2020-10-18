import { createCircleCross } from "../src/js/functions";

describe("createCircleCross function", () => {
    test("if t === O must create circle div and data-cell must be equal O", () => {
        document.body.innerHTML = `
            <div class="game__board-cell" data-cell></div>
        `;

        const c = document.querySelector(".game__board-cell");
        const equal_div = '<div class="game__circle"></div>';
        createCircleCross("O", c);
        expect(c.innerHTML).toEqual(equal_div);
        expect(c.dataset.cell).toEqual("O");
    });

    test("if t === X must create cross div and data-cell must be equal X", () => {
      document.body.innerHTML = `
            <div class="game__board-cell" data-cell></div>
        `;

      const c = document.querySelector(".game__board-cell");
      const equal_div = '<div class="game__cross"></div>';
      createCircleCross("X", c);
      expect(c.innerHTML).toEqual(equal_div);
      expect(c.dataset.cell).toEqual("X");
    });
});
