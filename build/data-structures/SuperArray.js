import { Implementation } from '../enums';
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
    static _tailRecursiveReduce(array, callback, initialValue) {
        if (array.length === 0)
            return initialValue;
        else if (array.length === 1)
            return array[0];
        return SuperArray._tailRecursiveReduce([callback(array[0], array[1]), ...array.slice(2)], callback, initialValue);
    }
    static _recursiveReverse(array) {
        if (array.length <= 1)
            return array;
        const head = array[array.length - 1];
        const tail = array.slice(0, -1);
        return [head, ...SuperArray._recursiveReverse(tail)];
    }
    static _tailRecursiveReverse(array, result = []) {
        if (array.length <= 1)
            return array;
        const head = array[array.length - 1];
        const tail = array.slice(0, -1);
        return [
            head,
            ...SuperArray._tailRecursiveReverse(tail, [head, ...result])
        ];
    }
    static range(n, offset = 0) {
        if (n === 1)
            return [offset];
        const array = [...Array(n).keys()];
        return offset
            ? new SuperArray(...array).superMap((key) => key + offset)
            : new SuperArray(...array);
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
    superReduce(callback, initialValue) {
        return SuperArray._tailRecursiveReduce(this, callback, initialValue);
    }
    superReverse(implementation = Implementation.tailRecursive) {
        switch (implementation) {
            case Implementation.recursive:
                return SuperArray._recursiveReverse(this);
            default:
                return SuperArray._tailRecursiveReverse(this);
        }
    }
}
