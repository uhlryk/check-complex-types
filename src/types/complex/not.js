export default (testedArgument, typeNegation) => {
    if (!typeNegation || !typeNegation.test) {
        throw new TypeError("Type not provided");
    }
    return !typeNegation.test(testedArgument);
};
