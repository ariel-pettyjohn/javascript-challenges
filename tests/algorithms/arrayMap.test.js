import map from '../../build/algorithms/arrayMap';

const Implementation = {
    for          : 'for',
    while        : 'while',
    recursive    : 'recursive',
    tailRecursive: 'tailRecursive',
}

const tests = [
    [[                                  ], [                                  ]],
    [[ 0                                ], [ 0                                ]],
    [[ 1,  1                            ], [ 2,  2                            ]],
    [[ 2,  2,  2                        ], [ 4,  4,  4                        ]],
    [[ 0 , 1,  2,  3                    ], [ 0,  2,  4,  6                    ]],
    [[ 1,  2,  3,  4,  5                ], [ 2,  4,  6,  8, 10                ]],
    [[ 2,  4,  6,  8, 10, 12            ], [ 4,  8, 12, 16, 20, 24            ]],
    [[ 2,  3,  5,  7, 11, 13, 17        ], [ 4,  6, 10, 14, 22, 26, 34        ]],
    [[ 1,  1,  2,  3,  5,  8, 13, 21    ], [ 2,  2,  4,  6, 10, 16, 26, 42    ]],
    [[10, 10, 10, 10, 10, 10, 10, 10, 10], [20, 20, 20, 20, 20, 20, 20, 20, 20]]
];

tests.forEach(([array, expectedArray]) => {
    const text = `of double function of ${array} should be ${expectedArray}`;

    test(`forMap ${text}`, () => {
        expect(map(array, (x) => 2 * x, Implementation.for)).toEqual(expectedArray);
    });

    test(`whileMap ${text}`, () => {
        expect(map(array, (x) => 2 * x, Implementation.while)).toEqual(expectedArray);
    });

    test(`recursiveMap ${text}`, () => {
        expect(map(array, (x) => 2 * x, Implementation.recursive)).toEqual(expectedArray);
    });

    test(`tailRecursiveMap ${text}`, () => {
        expect(map(array, (x) => 2 * x, Implementation.tailRecursive)).toEqual(expectedArray);
    });
});