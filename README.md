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

### Types
There are number of types:

#### ANY

for any type

```javascript
import types from "check-complex-types";

types.ANY.test("testString");// equal true
types.ANY.test(true);// equal true
types.ANY.test(false);// equal true
types.ANY.test(12345);// equal true
```

#### STRING or STRING.args([conditions])
for string primitives and string objects

```javascript
import types from "check-complex-types";

types.STRING.test("testString");// equal true
types.STRING.test(true);// equal false
```
##### string conditions

###### minLength: positive number
Check if string length is bigger then `minLength` value

```javascript
import types from "check-complex-types";

types.STRING.args({ minLength: 3 }).test("testString");// equal true
types.STRING.args({ minLength: 20 }).test("testString");// equal false
```

###### maxLength: positive number
Check if string length is shorter then `maxLength` value

```javascript
import types from "check-complex-types";

types.STRING.args({ maxLength: 20 }).test("testString");// equal true
types.STRING.args({ maxLength: 3 }).test("testString");// equal false
```

#### ARRAY([elementType])
checks if value is array. If `elementType` is provided it also checks if every array element has specified type.

```javascript
import types from "check-complex-types";

types.ARRAY.test("testString");// equal false
types.ARRAY.test(["testStringA", "something", true]);// equal true


types.ARRAY(types.STRING).test(["testStringA", "something", true]);// equal false
types.ARRAY(types.STRING).test(["testStringA", "something", "somethingElse"]);// equal true
```

#### NUMBER
for number primitive and number object

#### OBJECT
for objects with exception for null and primitive wrappers (primitive objects like Number, String, Boolean)
#### FUNCTION
for functions

#### BOOLEAN
for boolean primitive and boolean object

#### SYMBOL
for symbols

#### UNDEFINED
for undefined

#### NULL
for null

#### OPTIONAL(optionalType)
check if value has specific type `optionalType` or doesn't exist (is undefined)

```javascript
import types from "check-complex-types";

types.OPTIONAL(types.NUMBER).test(1234);// equal true
types.OPTIONAL(types.NUMBER).test();// equal true
```


#### INTERFACE(interface)
for checking if tested object has interface properties with correct types interface is an object with property names and description

example
```javascript
import types from "check-complex-types";

const someObject = {
    someFunction: () => {},
    someString: "test",
    someValue: 1234,
    someObject: {
        someInnerString: "inner"
    }
};

types.INTERFACE({
    someFunction: types.FUNCTION,
    someString: types.STRING,
    someValue: types.NUMBER,
    someObject: types.INTERFACE({
        someInnerString: types.STRING
    })
}).test(someObject);// equal true
```

#### INSTANCE(class)
check if argument instance of `class`

#### SOME(arrayOfTypes)
for checking if value has one or more types from array of types `arrayOfTypes`

```javascript
import types from "check-complex-types";

types.SOME([types.STRING, types.NUMBER]).test("testString");// equal true
types.SOME([types.STRING, types.NUMBER]).test(true);// equal false
```

#### EVERY(arrayOfTypes)
for checking if value match all types in array of types `arrayOfTypes`

```javascript
import types from "check-complex-types";

types.EVERY([types.STRING, types.NUMBER]).test("testString");// equal false

types.EVERY([
    types.INTERFACE({ someProp: types.NUMBER }),
    types.INTERFACE({ otherProp: types.STRING })
]).test({ someProp: 123, otherProp: "test" }); // equal true
```

#### NOT(type)

Accept different type and return true if provided type is false.

```javascript
import types from "check-complex-types";

types.NOT(types.STRING).test("testString");// equal false
types.NOT(types.NUMBER).test("testString");// equal true
```

#### NONE(arrayOfTypes)
for checking if value not match any types in array of types `arrayOfTypes`

```javascript
import types from "check-complex-types";

types.NONE([types.STRING, types.NUMBER]).test("testString");// equal false
types.NONE([types.BOOLEAN, types.NUMBER]).test("testString");// equal true
```

### Types methods
Each type can be used as function to pass additional properties or uses as is.
Each type has methods

#### test(testedValue): boolean

Method is used to check if **testedValue** match specific type. It will return **true** if it match or **false** otherwise.

Example

We would like to check if specific value is a string


```javascript
import types from "check-complex-types";

const someValue = "test";

types.STRING.test(someValue);// equal true
```

#### args(conditions)

Some types have additional conditions like min/max length and it can be set by this method.
It returns object with method `test`.

```javascript
types.STRING.args(someConditions).test(someValue);// equal true
```

More complex example

We would like to check if tested object has some specific properties with specific types

```javascript
import types from "check-complex-types";

const someObject = {
    someFunction: () => {},
    someString: "test",
    someValue: 1234,
    someObject: {
        someInnerString: "inner"
    }
};

types.INTERFACE({
    someFunction: types.FUNCTION,
    someString: types.STRING,
    someValue: types.NUMBER,
    someObject: types.INTERFACE({
        someInnerString: types.STRING
    })
}).test(someObject);// equal true
```


## License

MIT
