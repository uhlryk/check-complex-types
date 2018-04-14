export default function createType(typeCondition) {
    const typeCheckFunction = typeInput => ({
        test(testedArgument) {
            return typeCondition(testedArgument, typeInput);
        }
    });
    typeCheckFunction.test = testedArgument => {
        return typeCondition(testedArgument);
    };
    return typeCheckFunction;
}
