;
var Implementation;
(function (Implementation) {
    Implementation["for"] = "for";
    Implementation["while"] = "while";
    Implementation["recursive"] = "recursive";
    Implementation["tailRecursive"] = "tailRecursive";
})(Implementation || (Implementation = {}));
export default class SuperArray extends Array {
    static _forMap(array, callback) {
        const _array = [...array];
        for (let i = 0; i < array.length; i++) {
            _array[i] = callback(array[i]);
        }
        return _array;
    }
    static _whileMap(array, callback) {
        let index = 0;
        const _array = [...array];
        while (index < array.length) {
            _array[index] = callback(array[index]);
            index++;
        }
        return _array;
    }
    static _recursiveMap(array, callback) {
        return array.length === 0
            ? []
            : [
                callback(array[0]),
                ...SuperArray._recursiveMap(array.slice(1), callback)
            ];
    }
    static _tailRecursiveMap(array, callback, result = []) {
        return array.length === 0
            ? result
            : SuperArray._tailRecursiveMap(array.slice(1), callback, [...result, callback(array[0])]);
    }
    superMap(callback, implementation = Implementation.tailRecursive) {
        switch (implementation) {
            case Implementation.for:
                return SuperArray._forMap(this, callback);
            case Implementation.while:
                return SuperArray._whileMap(this, callback);
            case Implementation.recursive:
                return SuperArray._recursiveMap(this, callback);
            default:
                return SuperArray._tailRecursiveMap(this, callback);
        }
    }
    static _recursiveReduce(array, callback, initialValue) {
        if (array.length === 0)
            return initialValue;
        else if (array.length === 1)
            return array[0];
        return SuperArray._recursiveReduce([callback(array[0], array[1]), ...array.slice(2)], callback, initialValue);
    }
    superReduce(callback, initialValue) {
        return SuperArray._recursiveReduce(this, callback, initialValue);
    }
}
