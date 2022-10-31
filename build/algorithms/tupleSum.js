import Tuple from '../data-structures/Tuple';
function getTargetReducerIndexTuples(values, target, 
// TODO: replace indices with an n-length tuple and make n derived*
n, reducer, indexTuples = [], valueTuples = [], 
// TODO: replace indices with an n-length tuple and make n derived*
indices = new Tuple(...Array(n).fill(0)), loopDepth = 1) {
    const initialIndex = loopDepth === 1 ? 0 : indices.get(loopDepth - 2) + 1;
    for (let index = initialIndex; index < values.length; index++) {
        indices.set(loopDepth - 1, index);
        if (n === loopDepth) {
            const keyToIndex = (key) => indices.get(key);
            const indexToValue = (index) => values[index];
            const indexCandidate = Tuple.range(loopDepth, 0).map(keyToIndex);
            const valueCandidate = indexCandidate.map(indexToValue);
            const candidateReducesToTarget = valueCandidate.reduce(reducer) === target;
            const candidateIsUnique = valueCandidate.isUnique(valueTuples);
            if (candidateReducesToTarget && candidateIsUnique) {
                indexTuples.push(indexCandidate);
                valueTuples.push(valueCandidate);
            }
        }
        else {
            getTargetReducerIndexTuples(values, target, n, reducer, indexTuples, valueTuples, indices, loopDepth + 1);
        }
    }
    return indexTuples;
}
function getTargetSumIndexTuples(summands, targetSum, n) {
    const sum = (x, y) => x + y;
    const valueTuples = getTargetReducerIndexTuples(summands, targetSum, n, sum);
    return valueTuples;
}
export function getTargetSumSummandIndexTuple(summands, targetSum) {
    // const initialIndices: [0, 0];
    const indexTuples 
    // = getTargetSumIndexTuples(summands, targetSum, initialIndices);
    = getTargetSumIndexTuples(summands, targetSum, 2);
    const indexTuple = indexTuples[0];
    return indexTuple;
}
export function getZeroSumSummandTriples(summands) {
    // const initialIndices: [0, 0, 0]; 
    // const indexTriples  : Tuple[] 
    //     = getTargetSumIndexTuples(summands, 0, initialIndices);
    const indexTriples = getTargetSumIndexTuples(summands, 0, 3);
    const indexTripleToSummandTriple = (indexTriple) => {
        const indexToSummand = (index) => summands[index];
        const summandTriple = indexTriple.map(indexToSummand);
        return summandTriple;
    };
    const summandTriples = indexTriples.map(indexTripleToSummandTriple);
    return summandTriples;
}
