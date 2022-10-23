import { Implementation } from '../enums';
export default class SuperArray extends Array {
    static range(n, offset = 0) {
        //if (n === 1) return new SuperArray(...[offset]);
        const array = [...Array(n).keys()];
        return offset
            ? new SuperArray(...array.map((key) => key + offset))
            : new SuperArray(...array);
    }
    superMap(callback, implementation = Implementation.tailRecursive) {
        switch (implementation) {
            case Implementation.for:
                function _forMap(array, callback) {
                    const _array = [...array];
                    for (let i = 0; i < array.length; i++) {
                        _array[i] = callback(array[i]);
                    }
                    return _array;
                }
                return new SuperArray(..._forMap(this, callback));
            case Implementation.while:
                function _whileMap(array, callback) {
                    let index = 0;
                    const _array = [...array];
                    while (index < array.length) {
                        _array[index] = callback(array[index]);
                        index++;
                    }
                    return _array;
                }
                return new SuperArray(..._whileMap(this, callback));
            case Implementation.recursive:
                function _recursiveMap(array, callback) {
                    return array.length === 0
                        ? []
                        : [
                            callback(array[0]),
                            ..._recursiveMap(array.slice(1), callback)
                        ];
                }
                return new SuperArray(..._recursiveMap(this, callback));
            default:
                function _tailRecursiveMap(array, callback, result = []) {
                    return array.length === 0
                        ? result
                        : _tailRecursiveMap(array.slice(1), callback, [...result, callback(array[0])]);
                }
                return new SuperArray(..._tailRecursiveMap(this, callback));
        }
    }
    superReduce(callback, initialValue) {
        function _tailRecursiveReduce(array, callback, initialValue) {
            if (array.length === 0)
                return initialValue;
            else if (array.length === 1)
                return array[0];
            return _tailRecursiveReduce([callback(array[0], array[1]), ...array.slice(2)], callback, initialValue);
        }
        return _tailRecursiveReduce(this, callback, initialValue);
    }
    superReverse(implementation = Implementation.tailRecursive) {
        switch (implementation) {
            case Implementation.recursive:
                function _recursiveReverse(array) {
                    if (array.length <= 1)
                        return array;
                    const head = array[array.length - 1];
                    const tail = array.slice(0, -1);
                    return [head, ..._recursiveReverse(tail)];
                }
                return new SuperArray(..._recursiveReverse(this));
            default:
                function _tailRecursiveReverse(array, result = []) {
                    if (array.length <= 1)
                        return array;
                    const head = array[array.length - 1];
                    const tail = array.slice(0, -1);
                    return [
                        head,
                        ..._tailRecursiveReverse(tail, [head, ...result])
                    ];
                }
                return new SuperArray(..._tailRecursiveReverse(this));
        }
    }
    superSum(implementation = Implementation.tailRecursive) {
        switch (implementation) {
            case Implementation.for:
                function _forSum(array) {
                    let sum = 0;
                    for (let i = 0; i < array.length; i++) {
                        sum += array[i];
                    }
                    return sum;
                }
                return _forSum(this);
            case Implementation.while:
                function _whileSum(array) {
                    let index = 0;
                    let sum = 0;
                    while (index < array.length) {
                        sum += array[index];
                        index++;
                    }
                    return sum;
                }
                return _whileSum(this);
            case Implementation.reduce:
                function _reduceSum(array) {
                    const sum = array.reduce((x, y) => x + y, 0);
                    return sum;
                }
                return _reduceSum(this);
            case Implementation.superReduce:
                function _superReduceSum(array) {
                    const sum = new SuperArray(...array)
                        .superReduce((x, y) => x + y, 0);
                    return sum;
                }
                return _superReduceSum(this);
            case Implementation.recursive:
                function _recursiveSum(array) {
                    return array.length === 0
                        ? 0
                        : array[0] + _recursiveSum(array.slice(1));
                }
                return _recursiveSum(this);
            default:
                function _tailRecursiveSum(array, sum = 0) {
                    return array.length === 0
                        ? sum
                        : _tailRecursiveSum(array.slice(1), array[0] + sum);
                }
                return _tailRecursiveSum(this);
        }
    }
}
