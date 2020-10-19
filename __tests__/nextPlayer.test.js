import { nextPlayer } from "../src/js/functions";

describe("nextPlayer function", () => {
    test("if player === X must return O", () => {
        let player = "X";
        player = nextPlayer(player);
        expect(player).toEqual("O");
    });

    test("if player === O must return X", () => {
        let player = "O";
        player = nextPlayer(player);
        expect(player).toEqual("X");
    });
});
