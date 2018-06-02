/* eslint-disable no-new-wrappers */
import types from "./index";

describe("Number Conditions type", () => {
    describe("equal condition", () => {
        it("return true when number is equal to defined value", () => {
            expect(types.NUMBER.args({ equal: 100 }).test(100)).to.be.true();
        });

        it("return false when number is not equal to defined value", () => {
            expect(types.NUMBER.args({ equal: 100 }).test(200)).to.be.false();
        });
    });

    describe("min value condition", () => {
        it("return true when number is greater than defined value", () => {
            expect(types.NUMBER.args({ minValue: 100 }).test(200)).to.be.true();
        });

        it("return false when number is lower than defined value", () => {
            expect(types.NUMBER.args({ minValue: 100 }).test(50)).to.be.false();
        });
    });

    describe("max value condition", () => {
        it("return false when number is greater than defined value", () => {
            expect(types.NUMBER.args({ maxValue: 100 }).test(200)).to.be.false();
        });

        it("return true when number is lower than defined value", () => {
            expect(types.NUMBER.args({ maxValue: 100 }).test(50)).to.be.true();
        });
    });
});
