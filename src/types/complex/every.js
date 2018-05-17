import checkArrayOfTypes from "../../validations/checkArrayOfTypes";

export default (testedArgument, typesToCheck) => {
    checkArrayOfTypes(typesToCheck);
    return typesToCheck.every(type => type.test(testedArgument));
};
