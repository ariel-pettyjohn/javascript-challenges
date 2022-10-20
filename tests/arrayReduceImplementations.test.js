const { recursiveReduce } = require('../arrayReduceImplementations');

const tests = [
    [[                                  ],  0],
    [[ 0                                ],  0],
    [[ 1,  1                            ],  2],
    [[ 2,  2,  2                        ],  6],
    [[ 0 , 1,  2,  3                    ],  6],
    [[ 1,  2,  3,  4,  5                ], 15],
    [[ 2,  4,  6,  8, 10, 12            ], 42],
    [[ 2,  3,  5,  7, 11, 13, 17        ], 58],
    [[ 1,  1,  2,  3,  5,  8, 13, 21    ], 54],
    [[10, 10, 10, 10, 10, 10, 10, 10, 10], 90]
];

tests.forEach(([array, expectedValue]) => {
    const text = `of sum function over ${array} should be ${expectedValue}`;

    test(`recursiveReduce ${text}`, () => {
        expect(recursiveReduce(array, (x, y) => x + y, 0)).toBe(expectedValue);
    });
});