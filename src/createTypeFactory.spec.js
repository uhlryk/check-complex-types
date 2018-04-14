import createTypeFactory from "./createTypeFactory";

describe("createTypeFactory", () => {
    let sandbox;
    let conditionTypeStub;
    let conditionTypeResponseStub;
    let inputStub;
    let testedArgumentStub;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        conditionTypeResponseStub = sandbox.stub();
        conditionTypeStub = sandbox.stub().returns(conditionTypeResponseStub);
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
        expect(createTypeCondition.test(testedArgumentStub)).to.be.equal(conditionTypeResponseStub);
        expect(conditionTypeStub.withArgs(testedArgumentStub, inputStub).calledOnce).to.be.true();
    });
});
