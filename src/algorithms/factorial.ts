export function factorial (n: number): number {
    return n === 0 ? 1 : n * factorial(n - 1);
}

export function tailRecursiveFactorial (n: number, result: number = 1): number {
    return n === 0 ? result : tailRecursiveFactorial(n - 1, n * result);
}