import SuperArray from '../data-structures/SuperArray';

export function sieve (n: number): SuperArray {
    let candidates: SuperArray = SuperArray.range(n - 1, 2);
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // This condition effectively ensures that i is the next smallest prime
        if (candidates.includes(i)) {
            candidates = new SuperArray(...candidates.filter((candidate) => {
                return candidate === i || candidate % i !== 0;
            }));
        }
    }
    return candidates;
}

export function tailRecursiveSieve (
    n         : number, 
    i         : number     = 2, 
    candidates: SuperArray = SuperArray.range(n - 1, 2)
): SuperArray {
    if (i > Math.sqrt(n)) return candidates;
    // This condition ensures that i is always the next smallest prime
    const _candidates: SuperArray = candidates.includes(i) 
        ? new SuperArray(...candidates.filter((candidate) => {
            return candidate === i || candidate % i !== 0
        }))
        : candidates;
    return tailRecursiveSieve(n, i + 1, _candidates);
}