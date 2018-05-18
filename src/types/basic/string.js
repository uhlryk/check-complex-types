const registeredConditions = {
    minLength: (testedArgument, minValue) => {
        return testedArgument.length > minValue;
    }
};

export default (testedArgument, conditions = {}) => {
    if (typeof testedArgument === "string" || testedArgument instanceof String) {
        return Object.entries(conditions).every(([conditionName, value]) => {
            const condition = registeredConditions[conditionName];
            if (condition && typeof condition === "function") {
                return condition(testedArgument, value);
            } else {
                return false;
            }
        });
    } else {
        return false;
    }
};
