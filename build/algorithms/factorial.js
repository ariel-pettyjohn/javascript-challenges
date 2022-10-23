const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);
function tailRecursiveFactorial(n, result = 1) {
    return n === 0 ? result : tailRecursiveFactorial(n - 1, n * result);
}
module.exports = { factorial, tailRecursiveFactorial };
