const { recursiveReduce: reduce } = require('./arrayReduce');

function forSum (array: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function whileSum (array: number[]): number {
    let index: number = 0; 
    let sum  : number = 0;
    while (index < array.length) {
        sum += array[index]; 
        index++;
    }
    return sum;
}

function reduceSum (array: number[]): number {
    const sum: number = array.reduce((x, y) => x + y, 0);
    return sum;
}

function recursiveReduceSum (array: number[]): number {
    const sum: number = reduce(array, (x, y) => x + y, 0);
    return sum;
}

function recursiveSum (array: number[]): number {
    return array.length === 0 ? 0 : array[0] + recursiveSum(array.slice(1));
}

function tailRecursiveSum (array: number[], sum: number = 0): number {
    return array.length === 0
        ? sum
        : tailRecursiveSum(array.slice(1), array[0] + sum);
}

module.exports = { 
    forSum, 
    whileSum, 
    reduceSum, 
    recursiveReduceSum, 
    recursiveSum, 
    tailRecursiveSum
};