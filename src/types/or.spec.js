/* eslint-disable no-new-wrappers */
import orType from "./or";
import types from "../index";
describe("Or type", () => {
    it("returns false for empty array compared to undefined", () => {
        expect(orType()).to.be.false();
    });

    it("returns false for empty array compared to some value", () => {
        expect(orType("test")).to.be.false();
    });

    it("returns true for compared correct string with string type", () => {
        expect(orType("test", [types.STRING])).to.be.true();
    });

    it("returns true for compared string to array of STRING type and OBJECT type", () => {
        expect(orType("test", [types.STRING, types.OBJECT])).to.be.true();
        expect(orType("test", [types.OBJECT, types.STRING])).to.be.true();
    });

    it("returns false for value not match by any type in array", () => {
        expect(orType(12345, [types.STRING, types.OBJECT])).to.be.false();
    });
});
