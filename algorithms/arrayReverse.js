function reverse (array) {
    if (array.length <= 1) return array;

    const head = array[array.length - 1];
    const tail = array.slice(0, -1);

    return [head, ...reverse(tail)];
}

function tailRecursiveReverse (array, result = []) {
    if (array.length <=  1) return array;
    
    const head = array[array.length - 1];
    const tail = array.slice(0, -1);

    return [head, ...tailRecursiveReverse(tail, [head, ...result])];
}

module.exports = { reverse, tailRecursiveReverse };