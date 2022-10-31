import { 
    getTargetSumSummandIndexTuple, 
    getZeroSumSummandTriples 
} from '../../build/algorithms/tupleSum';

import Tuple from '../../build/data-structures/Tuple';

const getTargetSumSummandIndexTupleTests = [
    [[2, 7, 11, 15], 9, new Tuple(0, 1)],
    [[3, 2,  4    ], 6, new Tuple(1, 2)],
    [[3, 3        ], 6, new Tuple(0, 1)]
];

getTargetSumSummandIndexTupleTests.forEach(([summands, targetSum, expectedIndexArray]) => {
    describe(`getTargetSumSummandIndexTuple:`, () => {
        test(`given ${summands} and ${targetSum}, returns ${expectedIndexArray}`, () => {
            expect(getTargetSumSummandIndexTuple(summands, targetSum))
                .toEqual(expectedIndexArray);
        });
    });
});

const getZeroSumTriplesTests = [
    [[-1, 0, 1, 2, -1, -4], [new Tuple(-1, 0, 1), new Tuple(-1, 2, -1)]]
];

getZeroSumTriplesTests.forEach(([summands, expectedSummandsArrays]) => {
    describe(`getZeroSumSummandTriples:`, () => {
        test(`given ${summands}, returns ${expectedSummandsArrays}`, () => {
            expect(getZeroSumSummandTriples(summands)).toEqual(expectedSummandsArrays);
        });
    });
});