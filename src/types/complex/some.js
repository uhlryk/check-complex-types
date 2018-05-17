import checkArrayOfTypes from "../../validations/checkArrayOfTypes";
export default (testedArgument, typesToCheck) => {
    checkArrayOfTypes(typesToCheck);
    return typesToCheck.some(type => type.test(testedArgument));
};
