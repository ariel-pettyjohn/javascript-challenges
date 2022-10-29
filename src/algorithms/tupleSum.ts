function listIsUnique (listArray: any[][], list1: any[]): boolean {
    return !listArray.some((list2) => {
        return list2.every((element) => {
            return list1.includes(element);
       });
    });
}
    
function range (n: number, offset: number = 0): number[] {
    if (n === 1) return [offset];
    const array: number[] = [...Array(n).keys()];
    const keyToOffsetKey = (key: number): number => key + offset;
    return offset ? array.map(keyToOffsetKey) : array;
}

const sum = (x: number, y: number): number => x + y;

interface IReducer {
    (x: any, y: any): any
}

function getTargetReducerIndexTuples (
    summands   : number[],
    target     : any,
    n          : number,
    reducer    : IReducer,
    indexTuples: number[][] = [],
    tuples     : any[][]    = [],
    indices    : number[]   = Array(n).fill(0),
    depth      : number     = 1
): number[][] { 
    const initialIndex: number = depth === 1 ? 0: indices[depth - 2] + 1;
    for (let index = initialIndex; index < summands.length; index++) {
        indices[depth - 1] = index;
        if (n === depth) {
            const keyToIndex     = (key  : number): number => indices[key];
            const indexToSummand = (index: number): number => summands[index];
            const indexCandidate        = range(depth, 0).map(keyToIndex); 
            const candidate             = indexCandidate.map(indexToSummand);
            const candidateSumsToTarget = candidate.reduce(reducer) === target;
            const candidateIsUnique     = listIsUnique(tuples, candidate);
            if (candidateSumsToTarget && candidateIsUnique) {
                indexTuples.push(indexCandidate);
                tuples.push(candidate);
            }
        } else {
            getTargetReducerIndexTuples(
                summands,
                target,
                n,
                reducer,
                indexTuples,
                tuples,
                indices,
                depth + 1
            );
        }        
    }
    return indexTuples;
}

function getTargetSumIndexTuples (
    summands : number[],
    targetSum: number,
    n        : number
): number[][] {
    const tuples = getTargetReducerIndexTuples(summands, targetSum, n, sum);
    return tuples;
}

export function getTargetSumSummandIndexTuple (
    summands : number[],
    targetSum: number
): number[] {
    const indexTuples = getTargetSumIndexTuples(summands, targetSum, 2);
    const indexTuple  = indexTuples[0];
    return indexTuple;
}

export function getZeroSumSummandTriples (summands: number[]): number[][] {
    const indexTriples   = getTargetSumIndexTuples(summands, 0, 3);
    const summandTriples = indexTriples.map((triple: number[]) => {
        const summandTriple = triple.map((index: number) => summands[index]);
        return summandTriple;
    });
    return summandTriples;
}