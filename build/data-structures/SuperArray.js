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
    static _forSum(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
    static _whileSum(array) {
        let index = 0;
        let sum = 0;
        while (index < array.length) {
            sum += array[index];
            index++;
        }
        return sum;
    }
    static _reduceSum(array) {
        const sum = array.reduce((x, y) => x + y, 0);
        return sum;
    }
    static _superReduceSum(array) {
        const sum = new SuperArray(...array)
            .superReduce((x, y) => x + y, 0);
        return sum;
    }
    static _recursiveSum(array) {
        return array.length === 0
            ? 0
            : array[0] + SuperArray._recursiveSum(array.slice(1));
    }
    static _tailRecursiveSum(array, sum = 0) {
        return array.length === 0
            ? sum
            : SuperArray._tailRecursiveSum(array.slice(1), array[0] + sum);
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
    superSum(implementation = Implementation.tailRecursive) {
        switch (implementation) {
            case Implementation.for:
                return SuperArray._forSum(this);
            case Implementation.while:
                return SuperArray._whileSum(this);
            case Implementation.reduce:
                return SuperArray._reduceSum(this);
            case Implementation.superReduce:
                return SuperArray._superReduceSum(this);
            case Implementation.recursive:
                return SuperArray._recursiveSum(this);
            default:
                return SuperArray._tailRecursiveSum(this);
        }
    }
}
