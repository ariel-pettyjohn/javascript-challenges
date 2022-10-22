const { recursiveReduce } = require('../../build/algorithms/arrayReduce');

const sumTests = [
    [[                                  ],          0],
    [[ 0                                ],          0],
    [[ 1,  1                            ],          2],
    [[ 2,  2,  2                        ],          6],
    [[ 0 , 1,  2,  3                    ],          6],
    [[ 1,  2,  3,  4,  5                ],         15],
    [[ 2,  4,  6,  8, 10, 12            ],         42],
    [[ 2,  3,  5,  7, 11, 13, 17        ],         58],
    [[ 1,  1,  2,  3,  5,  8, 13, 21    ],         54],
    [[10, 10, 10, 10, 10, 10, 10, 10, 10],         90]
];

const multiplicationTests = [
    [[                                  ],          1],
    [[ 0                                ],          0],
    [[ 1,  1                            ],          1],
    [[ 2,  2,  2                        ],          8],
    [[ 0 , 1,  2,  3                    ],          0],
    [[ 1,  2,  3,  4,  5                ],        120],
    [[ 2,  4,  6,  8, 10, 12            ],      46080],
    [[ 2,  3,  5,  7, 11, 13, 17        ],     510510],
    [[ 1,  1,  2,  3,  5,  8, 13, 21    ],      65520],
    [[10, 10, 10, 10, 10, 10, 10, 10, 10], 1000000000]
];

sumTests.forEach(([array, expectedValue]) => {
    const text = `of sum function over ${array} should be ${expectedValue}`;

    test(`recursiveReduce ${text}`, () => {
        expect(recursiveReduce(array, (x, y) => x + y, 0)).toBe(expectedValue);
    });
});

multiplicationTests.forEach(([array, expectedValue]) => {
    const text = `of multiply function over ${array} should be ${expectedValue}`;

    test(`recursiveReduce ${text}`, () => {
        expect(recursiveReduce(array, (x, y) => x * y, 1)).toBe(expectedValue);
    });
});