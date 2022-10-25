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