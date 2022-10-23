export default function fibonacci (n: number): number {
    return n === 0 || n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}