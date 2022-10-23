import SuperArray from '../../build/data-structures/SuperArray';

const sumTests = [
    [new SuperArray(                                  ),          0],
    [new SuperArray( 0                                ),          0],
    [new SuperArray( 1,  1                            ),          2],
    [new SuperArray( 2,  2,  2                        ),          6],
    [new SuperArray( 0 , 1,  2,  3                    ),          6],
    [new SuperArray( 1,  2,  3,  4,  5                ),         15],
    [new SuperArray( 2,  4,  6,  8, 10, 12            ),         42],
    [new SuperArray( 2,  3,  5,  7, 11, 13, 17        ),         58],
    [new SuperArray( 1,  1,  2,  3,  5,  8, 13, 21    ),         54],
    [new SuperArray(10, 10, 10, 10, 10, 10, 10, 10, 10),         90]
];

const multiplicationTests = [
    [new SuperArray(                                  ),          0],
    [new SuperArray( 0                                ),          0],
    [new SuperArray( 1,  1                            ),          1],
    [new SuperArray( 2,  2,  2                        ),          8],
    [new SuperArray( 0 , 1,  2,  3                    ),          0],
    [new SuperArray( 1,  2,  3,  4,  5                ),        120],
    [new SuperArray( 2,  4,  6,  8, 10, 12            ),      46080],
    [new SuperArray( 2,  3,  5,  7, 11, 13, 17        ),     510510],
    [new SuperArray( 1,  1,  2,  3,  5,  8, 13, 21    ),      65520],
    [new SuperArray(10, 10, 10, 10, 10, 10, 10, 10, 10), 1000000000]
];

sumTests.forEach(([array, expectedValue]) => {
    const text = `of sum function over ${array} should be ${expectedValue}`;

    test(`recursiveReduce ${text}`, () => {
        expect(array.superReduce((x, y) => x + y, 0)).toBe(expectedValue);
    });
});

multiplicationTests.forEach(([array, expectedValue]) => {
    const text = `of multiply function over ${array} should be ${expectedValue}`;

    test(`recursiveReduce ${text}`, () => {
        expect(array.superReduce((x, y) => x * y, 0)).toBe(expectedValue);
    });
});