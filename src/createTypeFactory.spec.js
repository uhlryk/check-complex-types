import createTypeFactory from "./createTypeFactory";

describe("createTypeFactory", () => {
    let sandbox;
    let conditionTypeStub;
    let inputStub;
    let testedArgumentStub;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        conditionTypeStub = sandbox.stub().returns(true);
        inputStub = sandbox.stub();
        testedArgumentStub = sandbox.stub();
    });

    afterEach(async () => {
        sandbox.restore();
    });

    it("should be conditionTypeResponseStub", () => {
        const createType = createTypeFactory(conditionTypeStub);
        expect(typeof createType).to.be.equal("function");
        const createTypeCondition = createType(inputStub);
        expect(createTypeCondition).to.have.property("test");
        expect(createTypeCondition.test(testedArgumentStub)).to.be.equal(true);
        expect(conditionTypeStub.withArgs(testedArgumentStub, inputStub).calledOnce).to.be.true();
    });
});
