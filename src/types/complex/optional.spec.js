/* eslint-disable no-new-wrappers */
import optionalType from "./optional";
import types from "../../index";
describe("OPTIONAL type", () => {
    it("throws error for empty type", () => {
        expect(() => optionalType()).to.throw("Argument is not correct type");
    });

    it("returns false when value has wrong type", () => {
        expect(optionalType("test", types.NUMBER)).to.be.false();
    });

    it("returns true for undefined matched to optional type", () => {
        expect(optionalType(undefined, types.STRING)).to.be.true();
    });

    it("returns true for string matched to optional string type", () => {
        expect(optionalType("test", types.STRING)).to.be.true();
    });
});
