// src/data/functions.js
// Single source of truth for all barbero function definitions.
// Populated in Plan 03.

import {
  isTruthy, isFalsey,
  isEqual, isStrictEqual,
  isNullOrUndefined, isUndefinedNullOrEmpty,
  isEmptyArray, isEmptyObject,
  isArray, isObject, isFunction, isDate, isRegExp,
  xor, nand,
  allPass, anyPass, nonePass, composePredicates,
  isNumber, isString, isBoolean, isSymbol, isBigInt, isPrimitive, isClassInstance,
  isInteger, isFloat, isPositive, isNegative, isZero,
  isEven, isOdd, isInRange, isDivisibleBy, isFiniteNumber, isNaNValue,
  parseBoolean, isBooleanable, isTruthyString, isFalseyString,
} from 'barbero';

export const modules = [
  {
    name: 'Core',
    slug: 'core',
    description: 'Fundamental boolean and truthiness evaluations.',
    functions: [
      {
        name: 'isTruthy',
        slug: 'isTruthy',
        signature: 'isTruthy(value)',
        description: 'Returns true if the value is truthy (coerces to true), false otherwise.',
        inputs: [
          { label: 'value', placeholder: '1' },
        ],
        fn: (value) => isTruthy(value),
        example: 'isTruthy(1)     // true\nisTruthy(0)     // false\nisTruthy("hi")  // true\nisTruthy("")    // false',
      },
      {
        name: 'isFalsey',
        slug: 'isFalsey',
        signature: 'isFalsey(value)',
        description: 'Returns true if the value is falsey (coerces to false), false otherwise.',
        inputs: [
          { label: 'value', placeholder: '0' },
        ],
        fn: (value) => isFalsey(value),
        example: 'isFalsey(0)      // true\nisFalsey(null)   // true\nisFalsey(1)      // false\nisFalsey("hi")   // false',
      },
      {
        name: 'isEqual',
        slug: 'isEqual',
        signature: 'isEqual(a, b)',
        description: 'Returns true if a and b are deeply equal by value, false otherwise.',
        inputs: [
          { label: 'a', placeholder: '{a: 1}' },
          { label: 'b', placeholder: '{a: 1}' },
        ],
        fn: (a, b) => isEqual(a, b),
        example: 'isEqual({a: 1}, {a: 1})  // true\nisEqual([1, 2], [1, 2])  // true\nisEqual(1, "1")          // false',
      },
      {
        name: 'isStrictEqual',
        slug: 'isStrictEqual',
        signature: 'isStrictEqual(a, b)',
        description: 'Returns true if a and b are the same value using Object.is semantics, false otherwise.',
        inputs: [
          { label: 'a', placeholder: '1' },
          { label: 'b', placeholder: '1' },
        ],
        fn: (a, b) => isStrictEqual(a, b),
        example: 'isStrictEqual(1, 1)      // true\nisStrictEqual(NaN, NaN)  // true\nisStrictEqual(1, "1")    // false',
      },
    ],
  },

  {
    name: 'Validation',
    slug: 'validation',
    description: 'Checks for null, undefined, empty values, and type shapes.',
    functions: [
      {
        name: 'isNullOrUndefined',
        slug: 'isNullOrUndefined',
        signature: 'isNullOrUndefined(value)',
        description: 'Returns true if the value is null or undefined, false otherwise.',
        inputs: [
          { label: 'value', placeholder: 'null' },
        ],
        fn: (value) => isNullOrUndefined(value),
        example: 'isNullOrUndefined(null)       // true\nisNullOrUndefined(undefined)  // true\nisNullOrUndefined(0)          // false',
      },
      {
        name: 'isUndefinedNullOrEmpty',
        slug: 'isUndefinedNullOrEmpty',
        signature: 'isUndefinedNullOrEmpty(value)',
        description: 'Returns true if the value is undefined, null, NaN, an empty string, empty array, or empty object.',
        inputs: [
          { label: 'value', placeholder: '""' },
        ],
        fn: (value) => isUndefinedNullOrEmpty(value),
        example: 'isUndefinedNullOrEmpty("")     // true\nisUndefinedNullOrEmpty([])     // true\nisUndefinedNullOrEmpty({})     // true\nisUndefinedNullOrEmpty("hi")   // false',
      },
      {
        name: 'isEmptyArray',
        slug: 'isEmptyArray',
        signature: 'isEmptyArray(array)',
        description: 'Returns true if the value is an array with no elements, false otherwise.',
        inputs: [
          { label: 'array', placeholder: '[]' },
        ],
        fn: (array) => isEmptyArray(array),
        example: 'isEmptyArray([])       // true\nisEmptyArray([1, 2])   // false\nisEmptyArray({})       // false',
      },
      {
        name: 'isEmptyObject',
        slug: 'isEmptyObject',
        signature: 'isEmptyObject(object)',
        description: 'Returns true if the value is a plain object with no own enumerable properties, false otherwise.',
        inputs: [
          { label: 'object', placeholder: '{}' },
        ],
        fn: (object) => isEmptyObject(object),
        example: 'isEmptyObject({})         // true\nisEmptyObject({a: 1})     // false\nisEmptyObject([])         // false',
      },
      {
        name: 'isArray',
        slug: 'isArray',
        signature: 'isArray(value)',
        description: 'Returns true if the value is an array, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '[1, 2, 3]' },
        ],
        fn: (value) => isArray(value),
        example: 'isArray([1, 2, 3])  // true\nisArray([])         // true\nisArray({})         // false',
      },
      {
        name: 'isObject',
        slug: 'isObject',
        signature: 'isObject(value)',
        description: 'Returns true if the value is a non-null, non-array plain object, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '{}' },
        ],
        fn: (value) => isObject(value),
        example: 'isObject({})         // true\nisObject({a: 1})     // true\nisObject([])         // false\nisObject(null)       // false',
      },
      {
        name: 'isFunction',
        slug: 'isFunction',
        signature: 'isFunction(value)',
        description: 'Returns true if the value is a function, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '() => {}' },
        ],
        fn: (value) => isFunction(value),
        example: 'isFunction(() => {})   // true\nisFunction(function(){}) // true\nisFunction(42)           // false',
      },
      {
        name: 'isDate',
        slug: 'isDate',
        signature: 'isDate(value)',
        description: 'Returns true if the value is a Date instance, false otherwise.',
        inputs: [
          { label: 'value', placeholder: 'new Date()' },
        ],
        fn: (value) => isDate(value),
        example: 'isDate(new Date())        // true\nisDate(new Date("2024-01-01"))  // true\nisDate("2024-01-01")      // false',
      },
      {
        name: 'isRegExp',
        slug: 'isRegExp',
        signature: 'isRegExp(value)',
        description: 'Returns true if the value is a RegExp instance, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '/abc/' },
        ],
        fn: (value) => isRegExp(value),
        example: 'isRegExp(/abc/)            // true\nisRegExp(new RegExp("abc"))  // true\nisRegExp("abc")            // false',
      },
    ],
  },

  {
    name: 'Logic',
    slug: 'logic',
    description: 'Boolean logic operations beyond AND, OR, and NOT.',
    functions: [
      {
        name: 'xor',
        slug: 'xor',
        signature: 'xor(a, b)',
        description: 'Returns true if exactly one of a or b is truthy (exclusive OR), false otherwise.',
        inputs: [
          { label: 'a', placeholder: 'true' },
          { label: 'b', placeholder: 'false' },
        ],
        fn: (a, b) => xor(a, b),
        example: 'xor(true, false)   // true\nxor(false, true)   // true\nxor(true, true)    // false\nxor(false, false)  // false',
      },
      {
        name: 'nand',
        slug: 'nand',
        signature: 'nand(a, b)',
        description: 'Returns true if at least one of a or b is falsey (NOT AND), false otherwise.',
        inputs: [
          { label: 'a', placeholder: 'true' },
          { label: 'b', placeholder: 'true' },
        ],
        fn: (a, b) => nand(a, b),
        example: 'nand(true, true)    // false\nnand(true, false)   // true\nnand(false, false)  // true',
      },
    ],
  },

  {
    name: 'Predicates',
    slug: 'predicates',
    description: 'Higher-order functions that compose and combine predicates.',
    functions: [
      {
        name: 'allPass',
        slug: 'allPass',
        signature: 'allPass(...predicates)(value)',
        description: 'Returns a function that returns true only if the test value passes every predicate, false otherwise.',
        inputs: [
          { label: 'predicate 1', placeholder: 'v => v > 0' },
          { label: 'predicate 2', placeholder: 'v => v < 10' },
          { label: 'value', placeholder: '5' },
        ],
        // Inputs are already evaluated by FunctionView — p1 and p2 arrive as functions, value as any.
        fn: (p1, p2, value) => allPass(p1, p2)(value),
        example: 'allPass(v => v > 0, v => v < 10)(5)   // true\nallPass(v => v > 0, v => v < 10)(15)  // false',
      },
      {
        name: 'anyPass',
        slug: 'anyPass',
        signature: 'anyPass(...predicates)(value)',
        description: 'Returns a function that returns true if the test value passes at least one predicate, false otherwise.',
        inputs: [
          { label: 'predicate 1', placeholder: 'v => v > 0' },
          { label: 'predicate 2', placeholder: 'v => v < 0' },
          { label: 'value', placeholder: '5' },
        ],
        fn: (p1, p2, value) => anyPass(p1, p2)(value),
        example: 'anyPass(v => v > 0, v => v < 0)(5)   // true\nanyPass(v => v > 0, v => v < 0)(-5)  // true\nanyPass(v => v > 10, v => v < 0)(5)  // false',
      },
      {
        name: 'nonePass',
        slug: 'nonePass',
        signature: 'nonePass(...predicates)(value)',
        description: 'Returns a function that returns true only if the test value fails every predicate, false otherwise.',
        inputs: [
          { label: 'predicate 1', placeholder: 'v => v > 10' },
          { label: 'predicate 2', placeholder: 'v => v < 0' },
          { label: 'value', placeholder: '5' },
        ],
        fn: (p1, p2, value) => nonePass(p1, p2)(value),
        example: 'nonePass(v => v > 10, v => v < 0)(5)   // true\nnonePass(v => v > 10, v => v < 0)(15)  // false',
      },
      {
        name: 'composePredicates',
        slug: 'composePredicates',
        signature: 'composePredicates(...predicates)(value)',
        description: 'Returns a function that sequentially applies each predicate; returns true only if all pass, false otherwise.',
        inputs: [
          { label: 'predicate 1', placeholder: 'v => v > 0' },
          { label: 'predicate 2', placeholder: 'v => v < 10' },
          { label: 'value', placeholder: '5' },
        ],
        fn: (p1, p2, value) => composePredicates(p1, p2)(value),
        example: 'composePredicates(v => v > 0, v => v < 10)(5)   // true\ncomposePredicates(v => v > 0, v => v < 10)(15)  // false',
      },
    ],
  },

  {
    name: 'Types',
    slug: 'types',
    description: 'JavaScript primitive and structural type identity checks.',
    functions: [
      {
        name: 'isNumber',
        slug: 'isNumber',
        signature: 'isNumber(value)',
        description: 'Returns true if the value has typeof "number" (including NaN), false otherwise.',
        inputs: [
          { label: 'value', placeholder: '42' },
        ],
        fn: (value) => isNumber(value),
        example: 'isNumber(42)     // true\nisNumber(NaN)    // true  — NaN has typeof "number"\nisNumber("42")   // false',
      },
      {
        name: 'isString',
        slug: 'isString',
        signature: 'isString(value)',
        description: 'Returns true if the value is a primitive string, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '"hello"' },
        ],
        fn: (value) => isString(value),
        example: 'isString("hello")  // true\nisString("")       // true\nisString(42)       // false',
      },
      {
        name: 'isBoolean',
        slug: 'isBoolean',
        signature: 'isBoolean(value)',
        description: 'Returns true if the value is a primitive boolean, false otherwise.',
        inputs: [
          { label: 'value', placeholder: 'true' },
        ],
        fn: (value) => isBoolean(value),
        example: 'isBoolean(true)   // true\nisBoolean(false)  // true\nisBoolean(1)      // false',
      },
      {
        name: 'isSymbol',
        slug: 'isSymbol',
        signature: 'isSymbol(value)',
        description: 'Returns true if the value is a Symbol, false otherwise.',
        inputs: [
          { label: 'value', placeholder: 'Symbol()' },
        ],
        fn: (value) => isSymbol(value),
        example: 'isSymbol(Symbol())         // true\nisSymbol(Symbol("label"))  // true\nisSymbol("symbol")         // false',
      },
      {
        name: 'isBigInt',
        slug: 'isBigInt',
        signature: 'isBigInt(value)',
        description: 'Returns true if the value is a BigInt, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '9n' },
        ],
        fn: (value) => isBigInt(value),
        example: 'isBigInt(9n)         // true\nisBigInt(BigInt(9))  // true\nisBigInt(9)          // false',
      },
      {
        name: 'isPrimitive',
        slug: 'isPrimitive',
        signature: 'isPrimitive(value)',
        description: 'Returns true if the value is a primitive (string, number, boolean, symbol, bigint, null, or undefined), false otherwise.',
        inputs: [
          { label: 'value', placeholder: '"hello"' },
        ],
        fn: (value) => isPrimitive(value),
        example: 'isPrimitive("hello")  // true\nisPrimitive(1)        // true\nisPrimitive(null)     // true\nisPrimitive({})       // false',
      },
      {
        name: 'isClassInstance',
        slug: 'isClassInstance',
        signature: 'isClassInstance(value)',
        description: 'Returns true if the value is an instance of a non-Object constructor class, false otherwise.',
        inputs: [
          { label: 'value', placeholder: 'new Date()' },
        ],
        fn: (value) => isClassInstance(value),
        example: 'isClassInstance(new Date())   // true\nisClassInstance(new Map())    // true\nisClassInstance({})           // false\nisClassInstance([])           // false',
      },
    ],
  },

  {
    name: 'Number',
    slug: 'number',
    description: 'Boolean predicates for numeric checks and math properties.',
    functions: [
      {
        name: 'isInteger',
        slug: 'isInteger',
        signature: 'isInteger(value)',
        description: 'Returns true if the value is an integer, false otherwise. Does not coerce — returns false for NaN, Infinity, and floats.',
        inputs: [
          { label: 'value', placeholder: '4' },
        ],
        fn: (value) => isInteger(value),
        example: 'isInteger(4)      // true\nisInteger(4.5)    // false\nisInteger(NaN)    // false',
      },
      {
        name: 'isFloat',
        slug: 'isFloat',
        signature: 'isFloat(value)',
        description: 'Returns true if the value is a finite number that is not an integer, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '4.5' },
        ],
        fn: (value) => isFloat(value),
        example: 'isFloat(4.5)       // true\nisFloat(4)         // false\nisFloat(Infinity)  // false',
      },
      {
        name: 'isPositive',
        slug: 'isPositive',
        signature: 'isPositive(value)',
        description: 'Returns true if the value is a number strictly greater than zero, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '1' },
        ],
        fn: (value) => isPositive(value),
        example: 'isPositive(1)     // true\nisPositive(0)     // false\nisPositive(-1)    // false',
      },
      {
        name: 'isNegative',
        slug: 'isNegative',
        signature: 'isNegative(value)',
        description: 'Returns true if the value is a number strictly less than zero, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '-1' },
        ],
        fn: (value) => isNegative(value),
        example: 'isNegative(-1)    // true\nisNegative(0)     // false\nisNegative(-0)    // false',
      },
      {
        name: 'isZero',
        slug: 'isZero',
        signature: 'isZero(value)',
        description: 'Returns true if the value is zero (0 or -0), false otherwise.',
        inputs: [
          { label: 'value', placeholder: '0' },
        ],
        fn: (value) => isZero(value),
        example: 'isZero(0)     // true\nisZero(-0)    // true\nisZero(1)     // false',
      },
      {
        name: 'isEven',
        slug: 'isEven',
        signature: 'isEven(value)',
        description: 'Returns true if the value is an integer divisible by 2, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '4' },
        ],
        fn: (value) => isEven(value),
        example: 'isEven(4)      // true\nisEven(3)      // false\nisEven(2.5)    // false',
      },
      {
        name: 'isOdd',
        slug: 'isOdd',
        signature: 'isOdd(value)',
        description: 'Returns true if the value is an integer not divisible by 2, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '3' },
        ],
        fn: (value) => isOdd(value),
        example: 'isOdd(3)      // true\nisOdd(4)      // false\nisOdd(3.1)    // false',
      },
      {
        name: 'isInRange',
        slug: 'isInRange',
        signature: 'isInRange(value, min, max)',
        description: 'Returns true if the value is a number within the inclusive range [min, max], false otherwise.',
        inputs: [
          { label: 'value', placeholder: '5' },
          { label: 'min', placeholder: '1' },
          { label: 'max', placeholder: '10' },
        ],
        fn: (value, min, max) => isInRange(value, min, max),
        example: 'isInRange(5, 1, 10)   // true\nisInRange(1, 1, 10)   // true  — inclusive\nisInRange(11, 1, 10)  // false',
      },
      {
        name: 'isDivisibleBy',
        slug: 'isDivisibleBy',
        signature: 'isDivisibleBy(value, divisor)',
        description: 'Returns true if the value is an integer evenly divisible by divisor, false otherwise.',
        inputs: [
          { label: 'value', placeholder: '9' },
          { label: 'divisor', placeholder: '3' },
        ],
        fn: (value, divisor) => isDivisibleBy(value, divisor),
        example: 'isDivisibleBy(9, 3)    // true\nisDivisibleBy(10, 3)   // false\nisDivisibleBy(9, 0)    // false  — zero guard',
      },
      {
        name: 'isFiniteNumber',
        slug: 'isFiniteNumber',
        signature: 'isFiniteNumber(value)',
        description: 'Returns true if the value is a finite number, false otherwise. Returns false for NaN, Infinity, and non-numbers.',
        inputs: [
          { label: 'value', placeholder: '42' },
        ],
        fn: (value) => isFiniteNumber(value),
        example: 'isFiniteNumber(42)         // true\nisFiniteNumber(Infinity)   // false\nisFiniteNumber(NaN)        // false',
      },
      {
        name: 'isNaNValue',
        slug: 'isNaNValue',
        signature: 'isNaNValue(value)',
        description: 'Returns true if the value is NaN, false otherwise. Uses Number.isNaN — does not coerce.',
        inputs: [
          { label: 'value', placeholder: 'NaN' },
        ],
        fn: (value) => isNaNValue(value),
        example: 'isNaNValue(NaN)        // true\nisNaNValue(undefined)  // false  — unlike global isNaN\nisNaNValue(42)         // false',
      },
    ],
  },

  {
    name: 'Parsing',
    slug: 'parsing',
    description: 'Semantic boolean recognition — converts strings and numbers to boolean meaning.',
    functions: [
      {
        name: 'parseBoolean',
        slug: 'parseBoolean',
        signature: 'parseBoolean(value)',
        description: 'Returns true if the value is a recognised truthy semantic representation — e.g. "yes", "on", "enabled", 1, true. Returns false for everything else.',
        inputs: [
          { label: 'value', placeholder: '"yes"' },
        ],
        fn: (value) => parseBoolean(value),
        example: 'parseBoolean("yes")      // true\nparseBoolean("enabled")  // true\nparseBoolean(1)          // true\nparseBoolean("no")       // false\nparseBoolean("maybe")    // false',
      },
      {
        name: 'isBooleanable',
        slug: 'isBooleanable',
        signature: 'isBooleanable(value)',
        description: 'Returns true if the value is any recognised boolean representation — either truthy or falsy. "no" and "false" are booleanable even though they represent false.',
        inputs: [
          { label: 'value', placeholder: '"no"' },
        ],
        fn: (value) => isBooleanable(value),
        example: 'isBooleanable("yes")    // true\nisBooleanable("no")     // true  — falsy but booleanable\nisBooleanable("maybe")  // false\nisBooleanable(null)     // false',
      },
      {
        name: 'isTruthyString',
        slug: 'isTruthyString',
        signature: 'isTruthyString(value)',
        description: 'Returns true if the value is one of the recognised truthy semantic representations. Complements isTruthy for string and number input forms.',
        inputs: [
          { label: 'value', placeholder: '"enabled"' },
        ],
        fn: (value) => isTruthyString(value),
        example: 'isTruthyString("yes")      // true\nisTruthyString("enabled")  // true\nisTruthyString(1)          // true\nisTruthyString("no")       // false',
      },
      {
        name: 'isFalseyString',
        slug: 'isFalseyString',
        signature: 'isFalseyString(value)',
        description: 'Returns true if the value is one of the recognised falsy semantic representations. Complements isFalsey for string and number input forms.',
        inputs: [
          { label: 'value', placeholder: '"disabled"' },
        ],
        fn: (value) => isFalseyString(value),
        example: 'isFalseyString("no")        // true\nisFalseyString("disabled")  // true\nisFalseyString(0)           // true\nisFalseyString("yes")       // false',
      },
    ],
  },
];
