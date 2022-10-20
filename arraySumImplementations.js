function forSum (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function whileSum (array) {
    let index = 0; 
    let sum   = 0;
    while (index < array.length) {
        sum += array[index]; 
        index++;
    }
    return sum;
}

function reduceSum (array) {
    const sum = array.reduce((currentValue, total) => currentValue + total, 0);
    return sum;
}

function recursiveSum (array) {
    return array.length === 0 ? 0 : array[0] + recursiveSum(array.slice(1));
}

function tailRecursiveSum (array, sum = 0) {
    return array.length === 0
        ? sum
        : tailRecursiveSum(array.slice(1), array[0] + sum);
}

module.exports = { 
    forSum, whileSum, reduceSum, recursiveSum, tailRecursiveSum 
};