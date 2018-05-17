export default type => {
    if (!type || !type.test || typeof type.test !== "function") {
        throw new TypeError("Argument is not correct type");
    }
    return true;
};
