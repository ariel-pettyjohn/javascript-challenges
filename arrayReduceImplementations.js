function recursiveReduce (array, callback, initialValue = array[0]) {
    if (array.length <= 1) return initialValue;
    return recursiveReduce(
        [callback(array[0], array[1]), ...array.slice(2)], 
        callback
    );
}

module.exports = { recursiveReduce };