import checkType from "../../validators/checkType";

export default (testedArgument, arrayElementType) => {
    if (typeof testedArgument === "object" && testedArgument instanceof Array) {
        if (arrayElementType) {
            checkType(arrayElementType);
            return testedArgument.every(element => arrayElementType.test(element));
        } else {
            return true;
        }
    } else {
        return false;
    }
};
