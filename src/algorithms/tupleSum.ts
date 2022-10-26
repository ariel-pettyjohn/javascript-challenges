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

const sum = (x: number, y: number): number => x + y;

// Only implemented to support cases when n=1, n=2, or n=3.
// TODO: implement as a recursive function that 
//       accepts an arbitrary n <= summands.length
function getTargetSumNTupleIndices (
    summands : number[],
    n        : number,
    targetSum: number
): number[][] {
    const indexToSummand = (index: number): number => summands[index];
    const nTupleIndices: number[][] = [];
    const nTuples      : number[][] = [];
    for (let i = 0; i < summands.length; i++) {
        const candidateNTupleIndices = [i];
        const candidateNTuple        = candidateNTupleIndices.map(indexToSummand);
        if (
            n === 1 
            && candidateNTuple.reduce(sum) === targetSum
            && nTupleIsUnique(nTuples, candidateNTuple)      
        ) {
            nTupleIndices.push(candidateNTupleIndices);
            nTuples.push(candidateNTuple);
        } else {
            for (let j = i + 1; j < summands.length; j++) {
                const candidateNTupleIndices = [i, j];
                const candidateNTuple        = candidateNTupleIndices.map(indexToSummand);
                if (
                    n === 2 
                    && candidateNTuple.reduce(sum) === targetSum
                    && nTupleIsUnique(nTuples, candidateNTuple)       
                ) {
                    nTupleIndices.push(candidateNTupleIndices);
                    nTuples.push(candidateNTuple);
                } else {
                    for (let k = j + 1; k < summands.length; k++) {  
                        const candidateNTupleIndices = [i, j, k];
                        const candidateNTuple        = candidateNTupleIndices.map(indexToSummand);
                        if (
                            n === 3 
                            && candidateNTuple.reduce(sum) === targetSum
                            && nTupleIsUnique(nTuples, candidateNTuple)    
                        ) {
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