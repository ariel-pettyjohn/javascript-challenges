const factorial = (n: number): number => n === 0 ? 1 : n * factorial(n - 1);

function tailRecursiveFactorial (n: number, result: number = 1): number {
    return n === 0 ? result : tailRecursiveFactorial(n - 1, n * result);
}

module.exports = { factorial, tailRecursiveFactorial };