;
var Implementation;
(function (Implementation) {
    Implementation["for"] = "for";
    Implementation["while"] = "while";
    Implementation["recursive"] = "recursive";
    Implementation["tailRecursive"] = "tailRecursive";
})(Implementation || (Implementation = {}));
function forMap(array, callback) {
    const _array = [...array];
    for (let i = 0; i < array.length; i++) {
        _array[i] = callback(array[i]);
    }
    return _array;
}
function whileMap(array, callback) {
    let index = 0;
    const _array = [...array];
    while (index < array.length) {
        _array[index] = callback(array[index]);
        index++;
    }
    return _array;
}
function recursiveMap(array, callback) {
    return array.length === 0
        ? []
        : [callback(array[0]), ...recursiveMap(array.slice(1), callback)];
}
function tailRecursiveMap(array, callback, result = []) {
    return array.length === 0
        ? result
        : tailRecursiveMap(array.slice(1), callback, [...result, callback(array[0])]);
}
function map(array, callback, implementation = Implementation.tailRecursive) {
    switch (implementation) {
        case Implementation.for:
            return forMap(array, callback);
        case Implementation.while:
            return whileMap(array, callback);
        case Implementation.recursive:
            return recursiveMap(array, callback);
        default:
            return tailRecursiveMap(array, callback);
    }
}
module.exports = { map };
