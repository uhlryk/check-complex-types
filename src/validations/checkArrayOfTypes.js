import checkType from "./checkType";
const checkIfArray = value => typeof value === "object" && value instanceof Array;
const checkIfArrayNotEmpty = value => value.length > 0;
const checkIfArrayOfTypes = value => value.every(checkType);

export default arrayOfTypes => {
    if (!checkIfArray(arrayOfTypes) || !checkIfArrayNotEmpty(arrayOfTypes)) {
        throw new TypeError("Non zero length array of types not provided");
    }
    try {
        checkIfArrayOfTypes(arrayOfTypes);
    } catch (err) {
        throw new TypeError("Array contain not correct type");
    }
    return true;
};
