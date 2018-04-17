# Check Complex Types "check-complex-types"

[![Build Status](https://travis-ci.org/uhlryk/check-complex-types.svg)](https://travis-ci.org/uhlryk/check-complex-types)
[![Downloads](https://img.shields.io/npm/dt/check-complex-types.svg)](https://www.npmjs.com/package/check-complex-types)
[![Downloads](https://img.shields.io/npm/dm/check-complex-types.svg)](https://www.npmjs.com/package/check-complex-types)
[![NPM version](https://img.shields.io/npm/v/check-complex-types.svg)](https://www.npmjs.com/package/check-complex-types)

Checks if variable has specific type. It can be used for primitives but its power lies in complex types like interfaces and in optional logic.

## install

```
npm install check-complex-types
```

## usage

import types from "check-complex-types";

```javascript 1.6
const testedInterface = types.INTERFACE({
    someVariable: types.NUMBER,
    otherInterface: types.INTERFACE({
        innerVariable: types.STRING
    })
});

testedInterface.test({
    wrongProperty: "someValue"
});// equal false

testedInterface.test({
    someVariable: 1234,
    otherInterface: {
        innerVariable: "some string"
    }
});// equal true

```
## API

* **types.ANY** or **types.ANY()** for any type
* **types.STRING** or **types.STRING()** for string primitive and string object
* **types.ARRAY** or **types.ARRAY()** for arrays
* **types.NUMBER** or **types.NUMBER()** for number primitive and number object
* **types.OBJECT** or **types.OBJECT()** for objects with exception for null and primitive wrappers (primitive objects like Number, String, Boolean)
* **types.FUNCTION** or **types.FUNCTION()** for functions
* **types.BOOLEAN** or **types.BOOLEAN()** for boolean primitive and boolean object
* **types.SYMBOL** or **types.SYMBOL()** for symbols
* **types.UNDEFINED** or **types.UNDEFINED()** for undefined
* **types.NULL** or **types.NULL()** for null
* **types.INTERFACE** or **types.INTERFACE(interfaceOptions)** for checking if tested object has interface properties with correct types
  interfaceOptions is an object with property names and description
  example of interface
    ```
     interfaceOptions = {
         someProperty: NUMBER,
         otherProperty: STRING
     }
    ```
* **types.INSTANCE(class)** check if argument instance of `class`

## License

MIT
