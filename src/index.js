import anyCondition from "./types/any";
import arrayCondition from "./types/array";
import booleanCondition from "./types/boolean";
import functionCondition from "./types/function";
import instanceCondition from "./types/instance";
import interfaceCondition from "./types/interface";
import nullCondition from "./types/null";
import numberCondition from "./types/number";
import objectCondition from "./types/object";
import stringCondition from "./types/string";
import symbolCondition from "./types/symbol";
import undefinedCondition from "./types/undefined";
import createTypeFactory from "./createTypeFactory";

export default {
    NUMBER: createTypeFactory(numberCondition),
    STRING: createTypeFactory(stringCondition),
    OBJECT: createTypeFactory(objectCondition),
    ARRAY: createTypeFactory(arrayCondition),
    BOOLEAN: createTypeFactory(booleanCondition),
    FUNCTION: createTypeFactory(functionCondition),
    SYMBOL: createTypeFactory(symbolCondition),
    UNDEFINED: createTypeFactory(undefinedCondition),
    NULL: createTypeFactory(nullCondition),
    ANY: createTypeFactory(anyCondition),
    INSTANCE: createTypeFactory(instanceCondition),
    INTERFACE: createTypeFactory(interfaceCondition)
};
