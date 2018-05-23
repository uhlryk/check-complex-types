const extraConditionsResolver = registeredExtraConditions => (testedArgument, conditions = {}) =>
    Object.entries(conditions).every(([conditionName, value]) => {
        const condition = registeredExtraConditions[conditionName];
        if (condition && typeof condition === "function") {
            return condition(testedArgument, value);
        } else {
            return true;
        }
    });

const resolver = (typeCondition, registeredExtraConditions = {}) => (
    testedArgument,
    typeInput,
    extraCondition = {}
) => {
    const resolveExtraConditions = extraConditionsResolver(registeredExtraConditions);
    const typeConditionResult = typeCondition(testedArgument, typeInput);
    if (typeConditionResult) {
        return resolveExtraConditions(testedArgument, extraCondition);
    } else {
        return false;
    }
};

export default function createType(typeCondition, registeredExtraConditions) {
    const preparedResolver = resolver(typeCondition, registeredExtraConditions);

    const typeCheckFunction = typeInput => {
        const extraConditionFunction = extraCondition => ({
            test(testedArgument) {
                return preparedResolver(testedArgument, typeInput, extraCondition);
            }
        });
        extraConditionFunction.test = testedArgument => {
            return preparedResolver(testedArgument, typeInput);
        };
        return extraConditionFunction;
    };
    typeCheckFunction.test = testedArgument => {
        return preparedResolver(testedArgument);
    };
    return typeCheckFunction;
}
