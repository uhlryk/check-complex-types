# FUNCTION OVERLOADER

[![Build Status](https://travis-ci.org/uhlryk/check-complex-types.svg)](https://travis-ci.org/uhlryk/check-complex-types)
[![Downloads](https://img.shields.io/npm/dt/check-complex-types.svg)](https://www.npmjs.com/package/check-complex-types)
[![Downloads](https://img.shields.io/npm/dm/check-complex-types.svg)](https://www.npmjs.com/package/check-complex-types)
[![NPM version](https://img.shields.io/npm/v/check-complex-types.svg)](https://www.npmjs.com/package/check-complex-types)

Introduce the mechanism for easy overloading functions and method.

## install

```
npm install check-complex-types
```

## Introduction


## usage


## API

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
* **INSTANCE(class)** check if argument instance of `class`

## License

MIT
