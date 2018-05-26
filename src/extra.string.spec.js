/* eslint-disable no-new-wrappers */
import types from "./index";

describe("String Conditions type", () => {
    describe("min length condition", () => {
        it("return false when string length is shorter then defined min length", () => {
            expect(types.STRING.args({ minLength: 10 }).test("toshort")).to.be.false();
        });
        it("return true when string length is longer then defined min length", () => {
            expect(types.STRING.args({ minLength: 5 }).test("enoughLong")).to.be.true();
        });
    });

    describe("max length condition", () => {
        it("return false when string length is longer then defined max length", () => {
            expect(types.STRING.args({ maxLength: 3 }).test("tolong")).to.be.false();
        });
        it("return true when string length is shorter then defined max length", () => {
            expect(types.STRING.args({ maxLength: 15 }).test("enoughLong")).to.be.true();
        });
    });
});
