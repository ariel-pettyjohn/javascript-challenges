import { getTargetSumTupleIndices, getZeroSumTriples } from '../../build/algorithms/tupleSum';

const getTargetSumTupleIndicesTests = [
    [[[2, 7, 11, 15], 9], [0, 1]],
    [[[3, 2, 4]     , 6], [1, 2]],
    [[[3, 3]        , 6], [0, 1]]
];

getTargetSumTupleIndicesTests.forEach(([[summands, targetSum], expectedIndexArray]) => {
    describe(`getTargetSumTupleIndices:`, () => {
        test(`given ${summands} and ${targetSum}, returns ${expectedIndexArray}`, () => {
            expect(getTargetSumTupleIndices(summands, targetSum)).toEqual(expectedIndexArray);
        });
    });
});

const getZeroSumTriplesTests = [
    [[-1, 0, 1, 2, -1, -4], [[-1, 0, 1], [-1, 2, -1]]]
];

getZeroSumTriplesTests.forEach(([summands, expectedSummandsArrays]) => {
    describe(`getZeroSumTriples:`, () => {
        test(`given ${summands}, returns ${expectedSummandsArrays}`, () => {
            expect(getZeroSumTriples(summands)).toEqual(expectedSummandsArrays);
        });
    });
});