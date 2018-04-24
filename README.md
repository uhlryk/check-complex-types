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

```javascript

import types from "check-complex-types";

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

There are number of types:

* **ANY** or **ANY()** for any type
* **STRING** or **STRING()** for string primitive and string object
* **ARRAY** or **ARRAY()** for arrays
* **NUMBER** or **NUMBER()** for number primitive and number object
* **OBJECT** or **OBJECT()** for objects with exception for null and primitive wrappers (primitive objects like Number, String, Boolean)
* **FUNCTION** or **FUNCTION()** for functions
* **BOOLEAN** or **BOOLEAN()** for boolean primitive and boolean object
* **SYMBOL** or **SYMBOL()** for symbols
* **UNDEFINED** or **UNDEFINED()** for undefined
* **NULL** or **NULL()** for null
* **INTERFACE** or **INTERFACE(interfaceOptions)** for checking if tested object has interface properties with correct types
  interfaceOptions is an object with property names and description
  example of interface
    ```
     interfaceOptions = {
         someProperty: NUMBER,
         otherProperty: STRING
     }
    ```
* **types.INSTANCE(class)** check if argument instance of `class`

Each type can be used as function to pass additional properties or uses as is.
Each type has methods

### test(testedValue): boolean

Method is used to check if **testedValue** match specific type. It will return **true** if it match or **false** otherwise.

Example

We would like to check if specific value is a string


```javascript
import types from "check-complex-types";

const someValue = "test";

types.STRING.test(someValue);// equal true
```

## License

MIT
