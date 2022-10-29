function listIsUnique(listArray, list1) {
    return !listArray.some((list2) => {
        return list2.every((element) => {
            return list1.includes(element);
        });
    });
}
function range(n, offset = 0) {
    if (n === 1)
        return [offset];
    const array = [...Array(n).keys()];
    const keyToOffsetKey = (key) => key + offset;
    return offset ? array.map(keyToOffsetKey) : array;
}
const sum = (x, y) => x + y;
function getTargetReducerIndexTuples(summands, target, n, reducer, indexTuples = [], tuples = [], indices = Array(n).fill(0), depth = 1) {
    const initialIndex = depth === 1 ? 0 : indices[depth - 2] + 1;
    for (let index = initialIndex; index < summands.length; index++) {
        indices[depth - 1] = index;
        if (n === depth) {
            const keyToIndex = (key) => indices[key];
            const indexToSummand = (index) => summands[index];
            const indexCandidate = range(depth, 0).map(keyToIndex);
            const candidate = indexCandidate.map(indexToSummand);
            const candidateSumsToTarget = candidate.reduce(reducer) === target;
            const candidateIsUnique = listIsUnique(tuples, candidate);
            if (candidateSumsToTarget && candidateIsUnique) {
                indexTuples.push(indexCandidate);
                tuples.push(candidate);
            }
        }
        else {
            getTargetReducerIndexTuples(summands, target, n, reducer, indexTuples, tuples, indices, depth + 1);
        }
    }
    return indexTuples;
}
function getTargetSumIndexTuples(summands, targetSum, n) {
    const tuples = getTargetReducerIndexTuples(summands, targetSum, n, sum);
    return tuples;
}
export function getTargetSumSummandIndexTuple(summands, targetSum) {
    const indexTuples = getTargetSumIndexTuples(summands, targetSum, 2);
    const indexTuple = indexTuples[0];
    return indexTuple;
}
export function getZeroSumSummandTriples(summands) {
    const indexTriples = getTargetSumIndexTuples(summands, 0, 3);
    const summandTriples = indexTriples.map((triple) => {
        const summandTriple = triple.map((index) => summands[index]);
        return summandTriple;
    });
    return summandTriples;
}
