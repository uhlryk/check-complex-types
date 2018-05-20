import isArrayOfTypes from "./isArrayOfTypes";

export default arrayOfTypes => {
    const result = isArrayOfTypes(arrayOfTypes);
    if (!result) {
        throw new TypeError("Only Non zero length array of types is accepted");
    }
    return true;
};
