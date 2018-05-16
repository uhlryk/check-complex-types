export default (testedArgument, optionalType) => {
    if (!optionalType || !optionalType.test) {
        throw new TypeError("Type not provided");
    }
    return typeof testedArgument === "undefined" || optionalType.test(testedArgument);
};
