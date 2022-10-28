function nTupleIsUnique(nTuples, candidateNTuple) {
    return !nTuples.some((nTuple) => {
        return nTuple.every((summand) => {
            return candidateNTuple.includes(summand);
        });
    });
}
function range(n, offset = 0) {
    if (n === 1)
        return [offset];
    const array = [...Array(n).keys()];
    return offset ? array.map((key) => key + offset) : array;
}
const sum = (x, y) => x + y;
function getTargetSumNTupleIndices(summands, n, targetSum, nTupleIndices = [], nTuples = [], loopIndices = Array(n).fill(0), loopDepth = 1) {
    const initialIndex = loopDepth === 1 ? 0 : loopIndices[loopDepth - 2] + 1;
    for (let index = initialIndex; index < summands.length; index++) {
        loopIndices[loopDepth - 1] = index;
        const keyToLoopIndex = (key) => loopIndices[key];
        const indexToSummand = (index) => summands[index];
        const candidateNTupleIndices = range(loopDepth, 0).map(keyToLoopIndex);
        const candidateNTuple = candidateNTupleIndices.map(indexToSummand);
        if (n === loopDepth
            && candidateNTuple.reduce(sum) === targetSum
            && nTupleIsUnique(nTuples, candidateNTuple)) {
            nTupleIndices.push(candidateNTupleIndices);
            nTuples.push(candidateNTuple);
        }
        else {
            getTargetSumNTupleIndices(summands, n, targetSum, nTupleIndices, nTuples, loopIndices, loopDepth + 1);
        }
    }
    return nTupleIndices;
}
export function getTargetSumTupleIndices(summands, targetSum) {
    const indexTuples = getTargetSumNTupleIndices(summands, 2, targetSum)[0];
    return indexTuples;
}
export function getZeroSumTriples(summands) {
    return getTargetSumNTupleIndices(summands, 3, 0).map((indices) => {
        const nTuples = indices.map((index) => summands[index]);
        return nTuples;
    });
}
