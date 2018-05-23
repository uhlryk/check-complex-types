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

function createTypeCheckFunction(preparedResolver) {
    const typeCheckFunction = typeInput => ({
        test(testedArgument) {
            return preparedResolver(testedArgument, typeInput);
        },
        args(extraCondition) {
            return {
                test(testedArgument) {
                    return preparedResolver(testedArgument, typeInput, extraCondition);
                }
            };
        }
    });
    typeCheckFunction.test = testedArgument => {
        return preparedResolver(testedArgument);
    };
    typeCheckFunction.args = extraCondition => ({
        test(testedArgument) {
            return preparedResolver(testedArgument, null, extraCondition);
        }
    });
    return typeCheckFunction;
}

export default function createType(typeCondition, registeredExtraConditions) {
    const preparedResolver = resolver(typeCondition, registeredExtraConditions);

    return createTypeCheckFunction(preparedResolver);
}
