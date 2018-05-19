/* eslint-disable no-new-wrappers */
import string from "./string";

describe("String type", () => {
    it("returns true for strings", () => {
        expect(string("something")).to.be.true();
        expect(string("")).to.be.true();
    });

    it("returns true for primitive constructor", () => {
        expect(string(new String("test"))).to.be.true();
    });

    it("returns false for empty", () => {
        expect(string()).to.be.false();
    });

    it("returns false other types", () => {
        expect(string(123)).to.be.false();
        expect(string({})).to.be.false();
        expect(string(true)).to.be.false();
    });

    describe("min length condition", () => {
        it("return false when string length is shorter then min value", () => {
            expect(string("toshort", { minLength: 10 })).to.be.false();
        });
        it("return true when string length is longer then min value", () => {
            expect(string("enoughLong", { minLength: 5 })).to.be.true();
        });
    });

    describe("max length condition", () => {
        it("return false when string length is longer then max value", () => {
            expect(string("tolong", { maxLength: 3 })).to.be.false();
        });
        it("return true when string length is longer then min value", () => {
            expect(string("enoughLong", { maxLength: 15 })).to.be.true();
        });
    });
});
