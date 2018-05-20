import isType from "./isType";
export default type => {
    const result = isType(type);
    if (!result) {
        throw new TypeError("Argument is not correct type");
    }
    return true;
};
