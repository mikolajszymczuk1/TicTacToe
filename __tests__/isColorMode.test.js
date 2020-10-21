import { isColorModeSet } from "../src/js/functions";

describe("isColorModeSet function", () => {
    test("If color-mode is in local storage return true", () => {
        localStorage.setItem("color-mode", "light-mode");
        expect(isColorModeSet()).toEqual(true);
    });

    test("If color-mode is not in local storage reutrn false", () => {
        localStorage.clear()
        expect(isColorModeSet()).toEqual(false);
    });
});
