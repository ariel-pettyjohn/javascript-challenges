import SuperArray from "../data-structures/SuperArray";
export function forSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
export function whileSum(array) {
    let index = 0;
    let sum = 0;
    while (index < array.length) {
        sum += array[index];
        index++;
    }
    return sum;
}
export function reduceSum(array) {
    const sum = array.reduce((x, y) => x + y, 0);
    return sum;
}
export function recursiveReduceSum(array) {
    const sum = new SuperArray(...array).superReduce((x, y) => x + y, 0);
    return sum;
}
export function recursiveSum(array) {
    return array.length === 0 ? 0 : array[0] + recursiveSum(array.slice(1));
}
export function tailRecursiveSum(array, sum = 0) {
    return array.length === 0
        ? sum
        : tailRecursiveSum(array.slice(1), array[0] + sum);
}
