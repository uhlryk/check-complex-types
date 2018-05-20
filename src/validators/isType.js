export default type => {
    return !(!type || !type.test || typeof type.test !== "function");
};
