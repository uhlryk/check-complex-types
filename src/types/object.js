export default testedArgument =>
    typeof testedArgument === "object" &&
    testedArgument !== null &&
    testedArgument instanceof String === false &&
    testedArgument instanceof Number === false &&
    testedArgument instanceof Boolean === false;
