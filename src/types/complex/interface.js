export default (testedArgument, targetInterface = {}) =>
    typeof testedArgument === "object" &&
    Object.entries(targetInterface).every(([testedPropertyName, type]) =>
        type.test(testedArgument[testedPropertyName])
    );
