const { factorial, tailRecursiveFactorial } = require('../../build/factorial');

const tests = [
    [0,      1],
    [1,      1],
    [2,      2],
    [3,      6],
    [4,     24],
    [5,    120],
    [6,    720],
    [7,   5040],
    [8,  40320],
    [9, 362880]
];

tests.forEach(([n, expectedValue]) => {
    const text = `of ${n} should be ${expectedValue}`;

    test(`factorial ${text}`, () => {
        expect(factorial(n)).toEqual(expectedValue);
    });

    test(`tailRecursiveFactorial ${text}`, () => {
        expect(tailRecursiveFactorial(n)).toEqual(expectedValue);
    });
});