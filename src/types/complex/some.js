export default (testedArgument, typesToCheck = []) => typesToCheck.some(type => type.test(testedArgument));
