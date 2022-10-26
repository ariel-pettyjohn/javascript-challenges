function nTupleIsUnique(nTuples, candidateNTuple) {
    return !nTuples.some((nTuple) => {
        return nTuple.every((summand) => {
            return candidateNTuple.includes(summand);
        });
    });
}
const sum = (x, y) => x + y;
// Only implemented to support cases when n=1, n=2, or n=3.
// TODO: implement as a recursive function that 
//       accepts an arbitrary n <= summands.length
function getTargetSumNTupleIndices(summands, n, targetSum) {
    const indexToSummand = (index) => summands[index];
    const nTupleIndices = [];
    const nTuples = [];
    for (let i = 0; i < summands.length; i++) {
        const candidateNTupleIndices = [i];
        const candidateNTuple = candidateNTupleIndices.map(indexToSummand);
        if (n === 1
            && candidateNTuple.reduce(sum) === targetSum
            && nTupleIsUnique(nTuples, candidateNTuple)) {
            nTupleIndices.push(candidateNTupleIndices);
            nTuples.push(candidateNTuple);
        }
        else {
            for (let j = i + 1; j < summands.length; j++) {
                const candidateNTupleIndices = [i, j];
                const candidateNTuple = candidateNTupleIndices.map(indexToSummand);
                if (n === 2
                    && candidateNTuple.reduce(sum) === targetSum
                    && nTupleIsUnique(nTuples, candidateNTuple)) {
                    nTupleIndices.push(candidateNTupleIndices);
                    nTuples.push(candidateNTuple);
                }
                else {
                    for (let k = j + 1; k < summands.length; k++) {
                        const candidateNTupleIndices = [i, j, k];
                        const candidateNTuple = candidateNTupleIndices.map(indexToSummand);
                        if (n === 3
                            && candidateNTuple.reduce(sum) === targetSum
                            && nTupleIsUnique(nTuples, candidateNTuple)) {
                            nTupleIndices.push(candidateNTupleIndices);
                            nTuples.push(candidateNTuple);
                        }
                    }
                }
            }
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
