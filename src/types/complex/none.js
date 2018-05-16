export default (testedArgument, typesToCheck) => {
    if (!typesToCheck || !typesToCheck.every || !typesToCheck.length) {
        throw new TypeError("Non zero length array of types not provided");
    }
    return !typesToCheck.some(type => type.test(testedArgument));
};
