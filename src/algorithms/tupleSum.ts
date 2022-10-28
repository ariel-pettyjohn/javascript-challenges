function nTupleIsUnique (
    nTuples        : number[][], 
    candidateNTuple: number[]
): boolean {
    return !nTuples.some((nTuple) => {
        return nTuple.every((summand) => {
            return candidateNTuple.includes(summand);
       });
    });
} 

function range (n: number, offset: number = 0): number[] {
    if (n === 1) return  [offset];
    const array: number[] = [...Array(n).keys()];
    return offset ? array.map((key) => key + offset) : array;
}

const sum = (x: number, y: number): number => x + y;

function getTargetSumNTupleIndices (
    summands     : number[],
    n            : number,
    targetSum    : number,
    nTupleIndices: number[][] = [],
    nTuples      : number[][] = [],
    loopIndices  : number[]   = Array(n).fill(0),
    loopDepth    : number     = 1
): number[][] {
    const initialIndex: number = loopDepth === 1 ? 0: loopIndices[loopDepth - 2] + 1;
    for (let index = initialIndex; index < summands.length; index++) {
        loopIndices[loopDepth - 1] = index;
        const keyToLoopIndex = (key  : number): number => loopIndices[key];
        const indexToSummand = (index: number): number => summands[index];
        const candidateNTupleIndices = range(loopDepth, 0).map(keyToLoopIndex); 
        const candidateNTuple        = candidateNTupleIndices.map(indexToSummand);
        if (
            n === loopDepth
            && candidateNTuple.reduce(sum) === targetSum
            && nTupleIsUnique(nTuples, candidateNTuple)
        ) {
            nTupleIndices.push(candidateNTupleIndices);
            nTuples.push(candidateNTuple);
        } else {
            getTargetSumNTupleIndices(
                summands,
                n,
                targetSum,
                nTupleIndices,
                nTuples,
                loopIndices,
                loopDepth + 1
            );
        }        
    }
    return nTupleIndices;
}

export function getTargetSumTupleIndices (
    summands : number[],
    targetSum: number
): number[] {
    const indexTuples = getTargetSumNTupleIndices(summands, 2, targetSum)[0];
    return indexTuples;
}

export function getZeroSumTriples (summands: number[]): number[][] {
    return getTargetSumNTupleIndices(summands, 3, 0).map((indices: number[]) => {
        const nTuples = indices.map((index: number) => summands[index]);
        return nTuples;
    });
}