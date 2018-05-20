/* eslint-disable no-new-wrappers */
import noneType from "./none";
import types from "../../index";
describe("NONE type", () => {
    it("throws error for undefined types list", () => {
        expect(() => noneType()).to.throw("Only Non zero length array of types is accepted");
    });

    it("throws error for empty type list", () => {
        expect(() => noneType(undefined, [])).to.throw("Only Non zero length array of types is accepted");
    });

    it("returns true value for comparing to single type and is not matched", () => {
        expect(noneType("test", [types.NUMBER])).to.be.true();
    });

    it("returns false value for comparing to single type and is matched", () => {
        expect(noneType("test", [types.STRING])).to.be.false();
    });

    it("returns true value for comparing to multiple types in array and not matched any", () => {
        expect(noneType("test", [types.NUMBER, types.BOOLEAN])).to.be.true();
    });

    it("returns false value for comparing to multiple types in array and matched some", () => {
        expect(noneType("test", [types.STRING, types.BOOLEAN])).to.be.false();
    });
});
