import { reverse, tailRecursiveArrayReverse } from '../../build/algorithms/arrayReverse';

const tests = [
    [[                                  ], [                                  ]],
    [[ 0                                ], [ 0                                ]],
    [[ 1,  1                            ], [ 1,  1                            ]],
    [[ 2,  2,  2                        ], [ 2,  2,  2                        ]],
    [[ 0 , 1,  2,  3                    ], [ 3,  2,  1,  0                    ]],
    [[ 1,  2,  3,  4,  5                ], [ 5,  4,  3,  2,  1                ]],
    [[ 2,  4,  6,  8, 10, 12            ], [12, 10,  8,  6,  4,  2            ]],
    [[ 2,  3,  5,  7, 11, 13, 17        ], [17, 13, 11,  7,  5,  3,  2        ]],
    [[ 1,  1,  2,  3,  5,  8, 13, 21    ], [21, 13,  8,  5,  3,  2,  1,  1    ]],
    [[10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10]]
];

tests.forEach(([array, expectedArray]) => {
    const text = `of ${array} should equal ${expectedArray}`;

    test(`reverse ${text}`, () => {
        expect(reverse(array)).toEqual(expectedArray);
    });

    test(`tailRecursiveReverse ${text}`, () => {
        expect(tailRecursiveArrayReverse(array)).toEqual(expectedArray);
    });
});