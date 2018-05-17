import checkType from "../../validations/checkType";

export default (testedArgument, targetInterface = {}) =>
    typeof testedArgument === "object" &&
    Object.entries(targetInterface).every(([testedPropertyName, type]) => {
        checkType(type);
        return type.test(testedArgument[testedPropertyName]);
    });
