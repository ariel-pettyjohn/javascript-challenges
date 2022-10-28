function arrayIsUnique (arrays: any[][], array1: any[]): boolean {
    return !arrays.some((array2) => {
        return array2.every((element) => {
            return array1.includes(element);
       });
    });
}

function range (n: number, offset: number = 0): number[] {
    if (n === 1) return  [offset];
    const array: number[] = [...Array(n).keys()];
    return offset ? array.map((key) => key + offset) : array;
}

const sum = (x: number, y: number): number => x + y;

function getTargetSumSummandIndexArrays (
    summands   : number[],
    targetSum  : number,
    n          : number,
    indexArrays: number[][] = [],
    arrays     : number[][] = [],
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
            const candidateSumsToTarget = candidate.reduce(sum) === targetSum;
            const candidateIsUnique     = arrayIsUnique(arrays, candidate);
            if (candidateSumsToTarget && candidateIsUnique) {
                indexArrays.push(indexCandidate);
                arrays.push(candidate);
            }
        } else {
            getTargetSumSummandIndexArrays(
                summands, targetSum, n, indexArrays, arrays, indices, depth + 1
            );
        }        
    }
    return indexArrays;
}

export function getTargetSumSummandIndexTuple (
    summands : number[],
    targetSum: number
): number[] {
    const indexTuples = getTargetSumSummandIndexArrays(summands, targetSum, 2);
    const indexTuple  = indexTuples[0];
    return indexTuple;
}

export function getZeroSumSummandTriples (summands: number[]): number[][] {
    const indexTriples   = getTargetSumSummandIndexArrays(summands, 0, 3);
    const summandTriples = indexTriples.map((triple: number[]) => {
        const summandTriple = triple.map((index: number) => summands[index]);
        return summandTriple;
    });
    return summandTriples;
}