const { 
    forSum, whileSum, reduceSum, recursiveSum, tailRecursiveSum 
} = require('../arraySumImplementations');

const tests = [
    [[                                  ],  0],
    [[ 1,  2,  3,  4,  5                ], 15],
    [[ 2,  4,  6,  8, 10, 12            ], 42],
    [[ 2,  3,  5,  7, 11, 13, 17        ], 58],
    [[ 1,  1,  2,  3,  5,  8, 13, 21    ], 54],
    [[10, 10, 10, 10, 10, 10, 10, 10, 10], 90]
];

tests.forEach(([array, expectedValue]) => {
    const text = `of ${array} should be ${expectedValue}`;

    test(`forSum ${text}`, () => {
        expect(forSum(array)).toBe(expectedValue);
    });
    
    test(`whileSum ${text}`, () => {
        expect(whileSum(array)).toBe(expectedValue);
    });
    
    test(`reduceSum ${text}`, () => {
        expect(reduceSum(array)).toBe(expectedValue);
    });
    
    test(`recursiveSum ${text}`, () => {
        expect(recursiveSum(array)).toBe(expectedValue);
    });
    
    test(`tailRecursiveSum ${text}`, () => {
        expect(tailRecursiveSum(array)).toBe(expectedValue);
    });
});