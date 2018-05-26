import arrayType from "./array";
import types from "../../index";

describe("Array type", () => {
    it("returns true for arrays", () => {
        expect(arrayType([])).to.be.true();
        expect(arrayType(["element", 1234, true])).to.be.true();
    });

    it("returns false for empty", () => {
        expect(arrayType()).to.be.false();
    });

    it("returns false for arguments", () => {
        expect(arrayType(arguments)).to.be.false();
    });

    it("returns false other types", () => {
        expect(arrayType("1234")).to.be.false();
        expect(arrayType({})).to.be.false();
        expect(arrayType(123)).to.be.false();
    });

    describe("array of types", () => {
        it("should throw error when argument is not a type", () => {
            expect(() => arrayType([], "NOT_A_TYPE")).to.throw("Argument is not correct type");
        });

        it("should return true when all elements in array has same type as defined", () => {
            expect(arrayType(["a", "b", "c", "d"], types.STRING)).to.be.true();
        });

        it("should return false when any element in array has not same type as defined", () => {
            expect(arrayType(["a", "b", 1234, "d"], types.STRING)).to.be.false();
        });
    });
});
