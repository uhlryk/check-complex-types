import checkType from "../../validations/checkType";

export default (testedArgument, typeNegation) => {
    checkType(typeNegation);
    return !typeNegation.test(testedArgument);
};
