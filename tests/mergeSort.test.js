const { mergeSort } = require('../mergeSort');

const ascendingTests = [
    [[                                  ], [                                  ]],
    [[ 0                                ], [ 0                                ]],
    [[ 1,  1                            ], [ 1,  1                            ]],
    [[ 2,  2,  2                        ], [ 2,  2,  2                        ]],
    [[ 2,  1,  0,  3                    ], [ 0 , 1,  2,  3                    ]],
    [[ 4,  5,  1,  3,  2                ], [ 1,  2,  3,  4,  5                ]],
    [[12, 10,  4,  6,  8,  2            ], [ 2,  4,  6,  8, 10, 12            ]],
    [[11, 13,  7, 17,  2,  5,  3        ], [ 2,  3,  5,  7, 11, 13, 17        ]],
    [[ 3,  1,  1,  5,  2, 21,  8, 13    ], [ 1,  1,  2,  3,  5,  8, 13, 21    ]],
    [[10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10]]
];

const descendingTests = [
    [[                                  ], [                                  ]],
    [[ 0                                ], [ 0                                ]],
    [[ 1,  1                            ], [ 1,  1                            ]],
    [[ 2,  2,  2                        ], [ 2,  2,  2                        ]],
    [[ 2,  1,  0,  3                    ], [ 3,  2,  1,  0                    ]],
    [[ 4,  5,  1,  3,  2                ], [ 5,  4,  3,  2,  1                ]],
    [[12, 10,  4,  6,  8,  2            ], [12, 10,  8,  6,  4,  2            ]],
    [[11, 13,  7, 17,  2,  5,  3        ], [17, 13, 11,  7,  5,  3,  2        ]],
    [[ 3,  1,  1,  5,  2, 21,  8, 13    ], [21, 13,  8,  5,  3,  2,  1,  1    ]],
    [[10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10]]
];

ascendingTests.forEach(([array, expectedArray]) => {
    const text = `of ${array} in ascending order should be ${expectedArray}`;

    test(`mergeSort ${text}`, () => {
        expect(mergeSort(array, (x, y) => x < y)).toEqual(expectedArray);
    });
});

descendingTests.forEach(([array, expectedArray]) => {
    const text = `of ${array} in descending order should be ${expectedArray}`;

    test(`mergeSort ${text}`, () => {
        expect(mergeSort(array, (x, y) => x > y)).toEqual(expectedArray);
    });
});