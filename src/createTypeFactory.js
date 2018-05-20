const extraConditionsResolver = registeredExtraConditions => (testedArgument, conditions = {}) =>
    Object.entries(conditions).every(([conditionName, value]) => {
        const condition = registeredExtraConditions[conditionName];
        if (condition && typeof condition === "function") {
            return condition(testedArgument, value);
        } else {
            return true;
        }
    });

const resolver = (typeCondition, registeredExtraConditions = {}) => (testedArgument, typeInput) => {
    const resolveExtraConditions = extraConditionsResolver(registeredExtraConditions);
    console.log(typeCondition.length);
    const typeConditionResult = typeCondition(testedArgument, typeInput);
    if (typeConditionResult) {
        return resolveExtraConditions(testedArgument, typeInput);
    } else {
        return false;
    }
};

export default function createType(typeCondition, registeredExtraConditions) {
    const preparedResolver = resolver(typeCondition, registeredExtraConditions);
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
