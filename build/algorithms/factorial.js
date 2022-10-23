export function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
export function tailRecursiveFactorial(n, result = 1) {
    return n === 0 ? result : tailRecursiveFactorial(n - 1, n * result);
}
