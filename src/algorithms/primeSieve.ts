import range from './range';

export function sieve (n: number): number[] {
    let candidates: number[] = range(n - 1, 2);
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // This condition effectively ensures that i is the next smallest prime
        if (candidates.includes(i)) {
            candidates = candidates.filter((candidate) => {
                return candidate === i || candidate % i !== 0;
            });
        }
    }
    return candidates;
}

export function tailRecursiveSieve (
    n         : number, 
    i         : number   = 2, 
    candidates: number[] = range(n - 1, 2)
) {
    if (i > Math.sqrt(n)) return candidates;
    // This condition ensures that i is always the next smallest prime
    const _candidates: number[] = candidates.includes(i) 
        ? candidates.filter((candidate) => {
            return candidate === i || candidate % i !== 0
        })
        : candidates;
    return tailRecursiveSieve(n, i + 1, _candidates);
}