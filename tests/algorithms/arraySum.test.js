import SuperArray from '../../build/data-structures/SuperArray';

const Implementation = {
    for          : 'for',
    while        : 'while',
    reduce       : 'reduce',
    superReduce  : 'superReduce',
    recursive    : 'recursive',
    tailRecursive: 'tailRecursive'
}

const tests = [
    [new SuperArray(                                  ),  0],
    [new SuperArray( 0                                ),  0],
    [new SuperArray( 1,  1                            ),  2],
    [new SuperArray( 2,  2,  2                        ),  6],
    [new SuperArray( 0 , 1,  2,  3                    ),  6],
    [new SuperArray( 1,  2,  3,  4,  5                ), 15],
    [new SuperArray( 2,  4,  6,  8, 10, 12            ), 42],
    [new SuperArray( 2,  3,  5,  7, 11, 13, 17        ), 58],
    [new SuperArray( 1,  1,  2,  3,  5,  8, 13, 21    ), 54],
    [new SuperArray(10, 10, 10, 10, 10, 10, 10, 10, 10), 90]
];

tests.forEach(([array, expectedValue]) => {
    const text = `of ${array} should be ${expectedValue}`;

    test(`forSum ${text}`, () => {
        expect(array.superSum(Implementation.for))
            .toBe(expectedValue);
    });
    
    test(`whileSum ${text}`, () => {
        expect(array.superSum(Implementation.while))
            .toBe(expectedValue);
    });
    
    test(`reduceSum ${text}`, () => {
        expect(array.superSum(Implementation.reduce))
            .toBe(expectedValue);
    });

    test(`superreduceSum ${text}`, () => {
        expect(array.superSum(Implementation.superReduce))
            .toBe(expectedValue);
    });
    
    test(`recursiveSum ${text}`, () => {
        expect(array.superSum(Implementation.recursive))
            .toBe(expectedValue);
    });
    
    test(`tailRecursiveSum ${text}`, () => {
        expect(array.superSum(Implementation.tailRecursive))
            .toBe(expectedValue);
    });
});