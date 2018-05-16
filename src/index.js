import anyCondition from "./types/basic/any";
import arrayCondition from "./types/basic/array";
import booleanCondition from "./types/basic/boolean";
import functionCondition from "./types/basic/function";
import instanceCondition from "./types/basic/instance";
import nullCondition from "./types/basic/null";
import numberCondition from "./types/basic/number";
import objectCondition from "./types/basic/object";
import stringCondition from "./types/basic/string";
import symbolCondition from "./types/basic/symbol";
import undefinedCondition from "./types/basic/undefined";
import createTypeFactory from "./createTypeFactory";

import interfaceCondition from "./types/complex/interface";
import someCondition from "./types/complex/some";
import everyCondition from "./types/complex/every";
import optionalCondition from "./types/complex/optional";
import notCondition from "./types/complex/not";
import noneCondition from "./types/complex/none";

// basic types
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

// complex types
const INTERFACE = createTypeFactory(interfaceCondition);
const SOME = createTypeFactory(someCondition);
const EVERY = createTypeFactory(everyCondition);
const OPTIONAL = createTypeFactory(optionalCondition);
const NOT = createTypeFactory(notCondition);
const NONE = createTypeFactory(noneCondition);

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
    SOME,
    EVERY,
    OPTIONAL,
    NOT,
    NONE
};
