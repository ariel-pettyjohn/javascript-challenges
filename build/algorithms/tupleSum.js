function arrayIsUnique(arrays, array1) {
    return !arrays.some((array2) => {
        return array2.every((element) => {
            return array1.includes(element);
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
function getTargetSumSummandIndexArrays(summands, targetSum, n, indexArrays = [], arrays = [], indices = Array(n).fill(0), depth = 1) {
    const initialIndex = depth === 1 ? 0 : indices[depth - 2] + 1;
    for (let index = initialIndex; index < summands.length; index++) {
        indices[depth - 1] = index;
        if (n === depth) {
            const keyToIndex = (key) => indices[key];
            const indexToSummand = (index) => summands[index];
            const indexCandidate = range(depth, 0).map(keyToIndex);
            const candidate = indexCandidate.map(indexToSummand);
            const candidateSumsToTarget = candidate.reduce(sum) === targetSum;
            const candidateIsUnique = arrayIsUnique(arrays, candidate);
            if (candidateSumsToTarget && candidateIsUnique) {
                indexArrays.push(indexCandidate);
                arrays.push(candidate);
            }
        }
        else {
            getTargetSumSummandIndexArrays(summands, targetSum, n, indexArrays, arrays, indices, depth + 1);
        }
    }
    return indexArrays;
}
export function getTargetSumSummandIndexTuple(summands, targetSum) {
    const indexTuples = getTargetSumSummandIndexArrays(summands, targetSum, 2);
    const indexTuple = indexTuples[0];
    return indexTuple;
}
export function getZeroSumSummandTriples(summands) {
    const indexTriples = getTargetSumSummandIndexArrays(summands, 0, 3);
    const summandTriples = indexTriples.map((triple) => {
        const summandTriple = triple.map((index) => summands[index]);
        return summandTriple;
    });
    return summandTriples;
}
