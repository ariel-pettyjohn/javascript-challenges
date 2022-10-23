import SuperArray from '../../build/data-structures/SuperArray';

const Implementation = {
    for          : 'for',
    while        : 'while',
    recursive    : 'recursive',
    tailRecursive: 'tailRecursive',
}

const tests = [
    [new SuperArray(                                  ), new SuperArray(                                  )],
    [new SuperArray( 0                                ), new SuperArray( 0                                )],
    [new SuperArray( 1,  1                            ), new SuperArray( 2,  2                            )],
    [new SuperArray( 2,  2,  2                        ), new SuperArray( 4,  4,  4                        )],
    [new SuperArray( 0 , 1,  2,  3                    ), new SuperArray( 0,  2,  4,  6                    )],
    [new SuperArray( 1,  2,  3,  4,  5                ), new SuperArray( 2,  4,  6,  8, 10                )],
    [new SuperArray( 2,  4,  6,  8, 10, 12            ), new SuperArray( 4,  8, 12, 16, 20, 24            )],
    [new SuperArray( 2,  3,  5,  7, 11, 13, 17        ), new SuperArray( 4,  6, 10, 14, 22, 26, 34        )],
    [new SuperArray( 1,  1,  2,  3,  5,  8, 13, 21    ), new SuperArray( 2,  2,  4,  6, 10, 16, 26, 42    )],
    [new SuperArray(10, 10, 10, 10, 10, 10, 10, 10, 10), new SuperArray(20, 20, 20, 20, 20, 20, 20, 20, 20)]
];

tests.forEach(([array, expectedArray]) => {
    const text = `of double function of ${array} should be ${expectedArray}`;

    test(`forMap ${text}`, () => {
        expect(array.superMap((x) => 2 * x, Implementation.for)).toEqual(expectedArray);
    });

    test(`whileMap ${text}`, () => {
        expect(array.superMap((x) => 2 * x, Implementation.while)).toEqual(expectedArray);
    });

    test(`recursiveMap ${text}`, () => {
        expect(array.superMap((x) => 2 * x, Implementation.recursive)).toEqual(expectedArray);
    });

    test(`tailRecursiveMap ${text}`, () => {
        expect(array.superMap((x) => 2 * x, Implementation.tailRecursive)).toEqual(expectedArray);
    });
});