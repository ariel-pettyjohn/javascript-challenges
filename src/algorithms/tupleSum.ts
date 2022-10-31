import Tuple from '../data-structures/Tuple';

import { ICallback } from '../interfaces';

function getTargetReducerIndexTuples (
    values      : number[],
    target      : any,
    n           : number,
    reducer     : ICallback,
    indexTuples : Tuple[] = [],
    valueTuples : Tuple[] = [],
    //TODO: implement static pad method and 
    //      replace below with Tuple.pad([], n, 0)
    indices     : Tuple   = new Tuple(...Array(n).fill(0)), 
    loopDepth   : number  = 1
): Tuple[] { 
    const initialIndex: number 
        = loopDepth === 1 ? 0 : indices.get(loopDepth - 2) + 1;
    for (let index = initialIndex; index < values.length; index++) {    
        indices.set(loopDepth - 1, index);
        if (n === loopDepth) {
            const keyToIndex   = (key  : number): number => indices.get(key);
            const indexToValue = (index: number): number => values[index];
            const indexCandidate: Tuple 
                = Tuple.range(loopDepth, 0).map(keyToIndex); 
            const valueCandidate: Tuple 
                = indexCandidate.map(indexToValue);
            const candidateReducesToTarget: boolean 
                = valueCandidate.reduce(reducer) === target;
            const candidateIsUnique: boolean 
                = valueCandidate.isUnique(valueTuples);
            if (candidateReducesToTarget && candidateIsUnique) {
                indexTuples.push(indexCandidate);
                valueTuples.push(valueCandidate);
            }
        } else {
            getTargetReducerIndexTuples(
                values,
                target,
                n,
                reducer,
                indexTuples,
                valueTuples,
                indices,
                loopDepth + 1
            );
        }        
    }
    return indexTuples;
}

function getTargetSumIndexTuples (
    summands : number[],
    targetSum: number,
    n        : number
): Tuple[] {
    const sum = (x: number, y: number): number => x + y;
    const valueTuples: Tuple[] 
        = getTargetReducerIndexTuples(summands, targetSum, n, sum);
    return valueTuples;
}

export function getTargetSumSummandIndexTuple (
    summands : number[],
    targetSum: number
): Tuple {
    const indexTuples: Tuple[] 
        = getTargetSumIndexTuples(summands, targetSum, 2);
    const indexTuple : Tuple = indexTuples[0];
    return indexTuple;
}

export function getZeroSumSummandTriples (summands: number[]): Tuple[] {
    const indexTriples  : Tuple[] = getTargetSumIndexTuples(summands, 0, 3);
    const indexTripleToSummandTriple = (indexTriple: Tuple) => {
        const indexToSummand = (index: number): number => summands[index];
        const summandTriple: Tuple = indexTriple.map(indexToSummand);
        return summandTriple;
    }
    const summandTriples: Tuple[] 
        = indexTriples.map(indexTripleToSummandTriple);
    return summandTriples;
}