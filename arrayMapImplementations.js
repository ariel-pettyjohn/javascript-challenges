function forMap (array, callback) {
    const _array = [...array];
    for (let i = 0; i < array.length; i++) {
        _array[i] = callback(array[i]);
    }
    return _array;
}

function whileMap (array, callback) {
    let    index = 0;
    const _array = [...array];
    while (index < array.length) {
        _array[index] = callback(array[index]); 
        index++;
    }
    return _array;
}

module.exports = { forMap, whileMap };