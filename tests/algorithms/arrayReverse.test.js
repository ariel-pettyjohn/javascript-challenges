//import { reverse, tailRecursiveArrayReverse } from '../../build/algorithms/arrayReverse';
import SuperArray from '../../build/data-structures/SuperArray';

const Implementation = {
    recursive    : 'recursive',
    tailRecursive: 'tailRecursive',
}

const tests = [
    [new SuperArray(                                  ), new SuperArray(                                  )],
    [new SuperArray( 0                                ), new SuperArray( 0                                )],
    [new SuperArray( 1,  1                            ), new SuperArray( 1,  1                            )],
    [new SuperArray( 2,  2,  2                        ), new SuperArray( 2,  2,  2                        )],
    [new SuperArray( 0 , 1,  2,  3                    ), new SuperArray( 3,  2,  1,  0                    )],
    [new SuperArray( 1,  2,  3,  4,  5                ), new SuperArray( 5,  4,  3,  2,  1                )],
    [new SuperArray( 2,  4,  6,  8, 10, 12            ), new SuperArray(12, 10,  8,  6,  4,  2            )],
    [new SuperArray( 2,  3,  5,  7, 11, 13, 17        ), new SuperArray(17, 13, 11,  7,  5,  3,  2        )],
    [new SuperArray( 1,  1,  2,  3,  5,  8, 13, 21    ), new SuperArray(21, 13,  8,  5,  3,  2,  1,  1    )],
    [new SuperArray(10, 10, 10, 10, 10, 10, 10, 10, 10), new SuperArray(10, 10, 10, 10, 10, 10, 10, 10, 10)]
];

tests.forEach(([array, expectedArray]) => {
    const text = `of ${array} should equal ${expectedArray}`;

    test(`recursiveReverse ${text}`, () => {
        expect(array.superReverse(Implementation.recursive)).toEqual(expectedArray);
    });

    test(`tailRecursiveReverse ${text}`, () => {
        expect(array.superReverse(Implementation.tailRecursive)).toEqual(expectedArray);
    });
});