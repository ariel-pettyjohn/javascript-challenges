const { range } = require('../range');

const tests = [
    [[0, 0], [                ]],
    [[0, 1], [                ]],
    [[1, 0], [0               ]],
    [[1, 1], [1               ]],
    [[2, 0], [0, 1            ]],
    [[3, 1], [1, 2, 3         ]],
    [[4, 2], [2, 3, 4, 5      ]],
    [[5, 0], [0, 1, 2, 3, 4   ]],
    [[6, 1], [1, 2, 3, 4, 5, 6]]
];

tests.forEach(([args, expectedArray]) => {
    const text = `of ${args[0]} with offset ${args[1]} should be ${expectedArray}`;

    test(`range ${text}`, () => {
        expect(range(...args)).toEqual(expectedArray);
    });

    // TODO: Add test for recursive range function
});