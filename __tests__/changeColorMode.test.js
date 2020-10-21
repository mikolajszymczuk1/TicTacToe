import { changeColorMode } from "../src/js/functions";

describe("changeColorMode", () => {
    test("html tag must has classname 'mode' and color-mode must be in local storage", () => {
        let mode = "dark-mode";
        changeColorMode(mode);
        expect(document.documentElement.classList.contains(mode)).toBeTruthy();
        expect(localStorage.getItem("color-mode")).toEqual(mode);
    });
});
