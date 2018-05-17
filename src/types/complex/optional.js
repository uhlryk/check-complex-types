import checkType from "../../validations/checkType";
export default (testedArgument, optionalType) => {
    checkType(optionalType);
    return typeof testedArgument === "undefined" || optionalType.test(testedArgument);
};
