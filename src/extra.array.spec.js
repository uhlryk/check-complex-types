/* eslint-disable no-new-wrappers */
import types from "./index";

describe("Array Conditions type", () => {
    describe("min length condition", () => {
        it("return false when array length is shorter then defined min length", () => {
            expect(types.ARRAY.args({ minLength: 5 }).test(["A", "B", "C", "D"])).to.be.false();
        });
        it("return true when array length is longer then defined min length", () => {
            expect(types.ARRAY.args({ minLength: 3 }).test(["A", "B", "C", "D"])).to.be.true();
        });
    });

    describe("max length condition", () => {
        it("return false when array length is longer then defined max length", () => {
            expect(types.ARRAY.args({ maxLength: 3 }).test(["A", "B", "C", "D"])).to.be.false();
        });
        it("return true when array length is shorter then defined max length", () => {
            expect(types.ARRAY.args({ maxLength: 5 }).test(["A", "B", "C", "D"])).to.be.true();
        });
    });
});
