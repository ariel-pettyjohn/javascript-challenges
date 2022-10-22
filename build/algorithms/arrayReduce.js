function recursiveReduce(array, callback, initialValue) {
    if (array.length === 0)
        return initialValue;
    else if (array.length === 1)
        return array[0];
    return recursiveReduce([callback(array[0], array[1]), ...array.slice(2)], callback, initialValue);
}
module.exports = { recursiveReduce };
