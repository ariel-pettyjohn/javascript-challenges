;
var Implementation;
(function (Implementation) {
    Implementation["for"] = "for";
    Implementation["while"] = "while";
    Implementation["recursive"] = "recursive";
    Implementation["tailRecursive"] = "tailRecursive";
})(Implementation || (Implementation = {}));
function _forMap(array, callback) {
    const _array = [...array];
    for (let i = 0; i < array.length; i++) {
        _array[i] = callback(array[i]);
    }
    return _array;
}
function _whileMap(array, callback) {
    let index = 0;
    const _array = [...array];
    while (index < array.length) {
        _array[index] = callback(array[index]);
        index++;
    }
    return _array;
}
function _recursiveMap(array, callback) {
    return array.length === 0
        ? []
        : [callback(array[0]), ..._recursiveMap(array.slice(1), callback)];
}
function _tailRecursiveMap(array, callback, result = []) {
    return array.length === 0
        ? result
        : _tailRecursiveMap(array.slice(1), callback, [...result, callback(array[0])]);
}
function map(array, callback, implementation = Implementation.tailRecursive) {
    switch (implementation) {
        case Implementation.for:
            return _forMap(array, callback);
        case Implementation.while:
            return _whileMap(array, callback);
        case Implementation.recursive:
            return _recursiveMap(array, callback);
        default:
            return _tailRecursiveMap(array, callback);
    }
}
module.exports = { map };
