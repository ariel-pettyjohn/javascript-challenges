import SuperArray from '../../build/data-structures/SuperArray';

const tests = [
    [[0, 0], new SuperArray(                )],
    [[0, 1], new SuperArray(                )],
    [[1, 0], new SuperArray(0               )],
    [[1, 1], new SuperArray(1               )],
    [[2, 0], new SuperArray(0, 1            )],
    [[3, 1], new SuperArray(1, 2, 3         )],
    [[4, 2], new SuperArray(2, 3, 4, 5      )],
    [[5, 0], new SuperArray(0, 1, 2, 3, 4   )],
    [[6, 1], new SuperArray(1, 2, 3, 4, 5, 6)]
];

tests.forEach(([[n, offset], expectedArray]) => {
    const text = `of ${n} with offset ${offset} should be ${expectedArray}`;

    test(`SuperArray.range ${text}`, () => {
        expect(SuperArray.range(n, offset)).toEqual(expectedArray);
    });

    // TODO: Add test for recursive range function
});