import isType from "./isType";
const isArray = value => typeof value === "object" && value instanceof Array;
const isArrayNotEmpty = value => value.length > 0;

export default arrayOfTypes => {
    if (!isArray(arrayOfTypes) || !isArrayNotEmpty(arrayOfTypes)) {
        return false;
    }
    return arrayOfTypes.every(isType);
};
