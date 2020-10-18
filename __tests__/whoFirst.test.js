import { whoFirst } from "../src/js/functions";

describe("whoFirst function", () => {
    test("Must return only X or O", () => {
        let player;
        while (player = whoFirst() === "X") {
            expect(player).toBeTruthy();
        }

        while (player = whoFirst() === "O") {
            expect(player).toBeTruthy();
        }
    });
});
