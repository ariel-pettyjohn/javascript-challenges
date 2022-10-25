export function getTargetSumTupleIndices(summands, targetSum) {
    for (let i = 0; i < summands.length; i++) {
        for (let j = i + 1; j < summands.length; j++) {
            if (summands[i] + summands[j] === targetSum) {
                return [i, j];
            }
        }
    }
    return [];
}
export function getZeroSumTriples(summands) {
    const triples = [];
    for (let i = 0; i < summands.length; i++) {
        for (let j = i + 1; j < summands.length; j++) {
            for (let k = j + 1; k < summands.length; k++) {
                const sumsToZero = summands[i] + summands[j] + summands[k] === 0;
                const isUnique = !triples.some((triple) => {
                    const candidateNTupleIndices = [i, j, k];
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
