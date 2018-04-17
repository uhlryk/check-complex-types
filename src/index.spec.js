import types from "./index";

describe("index", () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(async () => {
        sandbox.restore();
    });

    describe("NULL", () => {
        it("should test if input is null", () => {
            expect(types.NULL.test(null)).to.be.true();
            expect(types.NULL().test(null)).to.be.true();

            expect(types.NULL.test()).to.be.false();
            expect(types.NULL().test()).to.be.false();
        });
    });

    describe("NUMBER", () => {
        it("should test if input is number", () => {
            expect(types.NUMBER.test(100)).to.be.true();
            expect(types.NUMBER().test(100)).to.be.true();

            expect(types.NUMBER.test(100.001)).to.be.true();
            expect(types.NUMBER().test(100.001)).to.be.true();

            expect(types.NUMBER.test()).to.be.false();
            expect(types.NUMBER().test()).to.be.false();
        });
    });
});
