/* eslint-disable no-new-wrappers */
import notType from "./not";
import types from "../../index";
describe("NOT type", () => {
    it("throws error for empty type  compared to undefined", () => {
        expect(() => notType()).to.throw("Type not provided");
    });

    it("returns false for compared correct string with string type", () => {
        expect(notType("test", types.STRING)).to.be.false();
    });

    it("returns true for value not match type", () => {
        expect(notType(12345, types.STRING)).to.be.true();
    });
});
