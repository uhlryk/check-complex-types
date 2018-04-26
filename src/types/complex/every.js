export default (testedArgument, typesToCheck) => {
    if (!typesToCheck || !typesToCheck.every || !typesToCheck.length) {
        throw new TypeError("Non zero length array of types not provided");
    }
    return typesToCheck.every(type => type.test(testedArgument));
};
