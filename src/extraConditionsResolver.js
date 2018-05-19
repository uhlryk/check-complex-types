export default registeredConditions => (testedArgument, conditions = {}) =>
    Object.entries(conditions).every(([conditionName, value]) => {
        const condition = registeredConditions[conditionName];
        if (condition && typeof condition === "function") {
            return condition(testedArgument, value);
        } else {
            return true;
        }
    });
