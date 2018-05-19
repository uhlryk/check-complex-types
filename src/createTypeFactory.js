const extraConditionsResolver = registeredConditions => (testedArgument, conditions = {}) =>
    Object.entries(conditions).every(([conditionName, value]) => {
        const condition = registeredConditions[conditionName];
        if (condition && typeof condition === "function") {
            return condition(testedArgument, value);
        } else {
            return true;
        }
    });

const resolver = (typeCondition, extraConditions = {}) => (testedArgument, typeInput) => {
    const resolveExtraConditions = extraConditionsResolver(extraConditions);
    const typeConditionResult = typeCondition(testedArgument, typeInput);
    if (typeConditionResult) {
        return resolveExtraConditions(testedArgument, typeInput);
    } else {
        return false;
    }
};

export default function createType(typeCondition, extraConditions) {
    const preparedResolver = resolver(typeCondition, extraConditions);
    const typeCheckFunction = typeInput => ({
        test(testedArgument) {
            return preparedResolver(testedArgument, typeInput);
        }
    });
    typeCheckFunction.test = testedArgument => {
        return preparedResolver(testedArgument);
    };
    return typeCheckFunction;
}
