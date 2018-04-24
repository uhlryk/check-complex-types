import anyCondition from "./types/any";
import arrayCondition from "./types/array";
import booleanCondition from "./types/boolean";
import functionCondition from "./types/function";
import instanceCondition from "./types/instance";
import interfaceCondition from "./types/interface";
import orCondition from "./types/or";
import nullCondition from "./types/null";
import numberCondition from "./types/number";
import objectCondition from "./types/object";
import stringCondition from "./types/string";
import symbolCondition from "./types/symbol";
import undefinedCondition from "./types/undefined";
import createTypeFactory from "./createTypeFactory";

const NUMBER = createTypeFactory(numberCondition);
const STRING = createTypeFactory(stringCondition);
const OBJECT = createTypeFactory(objectCondition);
const ARRAY = createTypeFactory(arrayCondition);
const BOOLEAN = createTypeFactory(booleanCondition);
const FUNCTION = createTypeFactory(functionCondition);
const SYMBOL = createTypeFactory(symbolCondition);
const UNDEFINED = createTypeFactory(undefinedCondition);
const NULL = createTypeFactory(nullCondition);
const ANY = createTypeFactory(anyCondition);
const INSTANCE = createTypeFactory(instanceCondition);
const INTERFACE = createTypeFactory(interfaceCondition);
const OR = createTypeFactory(orCondition);

export default {
    NUMBER,
    STRING,
    OBJECT,
    ARRAY,
    BOOLEAN,
    FUNCTION,
    SYMBOL,
    UNDEFINED,
    NULL,
    ANY,
    INSTANCE,
    INTERFACE,
    OR
};
