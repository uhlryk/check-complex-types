import checkType from "../../validators/checkType";

export default (testedArgument, typeNegation) => {
    checkType(typeNegation);
    return !typeNegation.test(testedArgument);
};
