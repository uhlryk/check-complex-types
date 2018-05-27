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
});
