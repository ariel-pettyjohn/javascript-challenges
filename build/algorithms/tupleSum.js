function nTupleIsUnique(nTuples, candidateNTuple) {
    return !nTuples.some((nTuple) => {
        return nTuple.every((summand) => {
            return candidateNTuple.includes(summand);
        });
    });
}
// Only implemented to support cases when n=1, n=2, or n=3.
// TODO: implement as a recursive function that 
//       accepts an arbitrary n <= summands.length
function getTargetSumNTupleIndices(summands, n, targetSum) {
    const sum = (x, y) => x + y;
    const indexToSummand = (index) => summands[index];
    const nTupleIndices = [];
    const nTuples = [];
    let candidateNTupleIndices = [];
    let candidateNTuple = [];
    for (let i = 0; i < summands.length; i++) {
        candidateNTupleIndices = [i];
        candidateNTuple = candidateNTupleIndices.map(indexToSummand);
        if (n === 1
            && candidateNTuple.reduce(sum) === targetSum
            && nTupleIsUnique(nTuples, candidateNTuple)) {
            nTupleIndices.push(candidateNTupleIndices);
            nTuples.push(candidateNTuple);
        }
        else {
            for (let j = i + 1; j < summands.length; j++) {
                candidateNTupleIndices = [i, j];
                candidateNTuple = candidateNTupleIndices.map(indexToSummand);
                if (n === 2
                    && candidateNTuple.reduce(sum) === targetSum
                    && nTupleIsUnique(nTuples, candidateNTuple)) {
                    nTupleIndices.push(candidateNTupleIndices);
                    nTuples.push(candidateNTuple);
                }
                else {
                    for (let k = j + 1; k < summands.length; k++) {
                        candidateNTupleIndices = [i, j, k];
                        candidateNTuple = candidateNTupleIndices.map(indexToSummand);
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
    console.log(indexTuples);
    return indexTuples;
}
export function getZeroSumTriples(summands) {
    return getTargetSumNTupleIndices(summands, 3, 0).map((indices) => {
        const nTuples = indices.map((index) => summands[index]);
        return nTuples;
    });
}
/*
export function getTargetSumTupleIndices (
    summands : number[],
    targetSum: number
): number[] {
    for (let i = 0; i < summands.length; i++) {
        for (let j = i + 1; j < summands.length; j++) {
            if (summands[i] + summands[j] === targetSum) {
                return [i, j];
            }
        }
    }
    return [];
}

export function getZeroSumTriples (summands: number[]): number[][] {
    const triples: number[][] = [];
    for (let i = 0; i < summands.length; i++) {
        for (let j = i + 1; j < summands.length; j++) {
            for (let k = j + 1; k < summands.length; k++) {
                const sumsToZero: boolean
                    = summands[i] + summands[j] + summands[k] === 0;
                const isUnique: boolean = !triples.some((triple) => {
                    const candidateNTupleIndices: number[] = [i, j, k];
                    return candidateNTupleIndices.every((index) => {
                        return triple.includes(summands[index]);
                   });
                });
                if (sumsToZero && isUnique) {
                    triples.push([summands[i], summands[j], summands[k]]);
                }
            }
        }
    }
    return triples;
}
*/ 
