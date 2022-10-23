import { IMapCallback, IReduceCallback } from '../interfaces';

import { Implementation } from '../enums';

export default class SuperArray extends Array<any> {        
    static range (n: number, offset: number = 0): SuperArray {
        //if (n === 1) return new SuperArray(...[offset]);
        const array: number[] = [...Array(n).keys()];
        return offset 
            ? new SuperArray(...array.map((key) => key + offset))
            : new SuperArray(...array);
    }

    superMap (
        callback      : IMapCallback,
        implementation: Implementation = Implementation.tailRecursive
    ): any[] {
        switch (implementation) {
            case Implementation.for:
                function _forMap (array: any[], callback: IMapCallback): any[] {
                    const _array: any[] = [...array];
                    for (let i = 0; i < array.length; i++) {
                        _array[i] = callback(array[i]);
                    }
                    return _array;
                }
                return new SuperArray(..._forMap(this, callback));
            case Implementation.while:
                function _whileMap (
                    array   : any[],
                    callback: IMapCallback
                ): any[] {
                    let    index: number = 0;
                    const _array: any[]  = [...array];
                    while (index < array.length) {
                        _array[index] = callback(array[index]); 
                        index++;
                    }
                    return _array;
                }
                return new SuperArray(..._whileMap(this, callback));
            case Implementation.recursive:
                function _recursiveMap (
                    array   : any[], 
                    callback: IMapCallback
                ): any[] {
                    return array.length === 0
                        ? []
                        : [
                            callback(array[0]), 
                            ..._recursiveMap(array.slice(1), callback)
                        ];
                }
                return new SuperArray(..._recursiveMap(this, callback));
            default:
                function _tailRecursiveMap (
                    array   : any[], 
                    callback: IMapCallback, 
                    result  : any[] = []
                ): any[] {
                    return array.length === 0
                        ? result
                        : _tailRecursiveMap(
                            array.slice(1), 
                            callback, 
                            [...result, callback(array[0])]
                        );
                }
                return new SuperArray(..._tailRecursiveMap(this, callback));
        }
    }

    superReduce (
        callback    : IReduceCallback, 
        initialValue: any
    ): any {
        function _tailRecursiveReduce (
            array       : any[], 
            callback    : IReduceCallback, 
            initialValue: any
        ): any {
            if      (array.length === 0) return initialValue;
            else if (array.length === 1) return array[0];
            return _tailRecursiveReduce(
                [callback(array[0], array[1]), ...array.slice(2)], 
                callback,
                initialValue
            );
        }
        return _tailRecursiveReduce(this, callback, initialValue);
    }

    superReverse (
        implementation: Implementation = Implementation.tailRecursive
    ): any {
        switch (implementation) {
            case Implementation.recursive:
                function _recursiveReverse (array: any[]): any[] {
                    if (array.length <= 1) return array;
                    const head: any   = array[array.length - 1];
                    const tail: any[] = array.slice(0, -1);
                    return [head, ..._recursiveReverse(tail)];
                }
                return new SuperArray(..._recursiveReverse(this));
            default:
                function _tailRecursiveReverse (
                    array : any[], 
                    result: any[] = []
                ): any[] {
                    if (array.length <=  1) return array;
                    const head: any   = array[array.length - 1];
                    const tail: any[] = array.slice(0, -1);
                    return [
                        head, 
                        ..._tailRecursiveReverse(tail, [head, ...result])
                    ];
                }
                return new SuperArray(..._tailRecursiveReverse(this));
        }
    }

    superSum (
        implementation: Implementation = Implementation.tailRecursive
    ): number {
        switch (implementation) {
            case Implementation.for:
                function _forSum (array: number[]): number {
                    let sum: number = 0;
                    for (let i = 0; i < array.length; i++) {
                        sum += array[i];
                    }
                    return sum;
                }
                return _forSum(this);
            case Implementation.while:
                function _whileSum (array: number[]): number {
                    let index: number = 0; 
                    let sum  : number = 0;
                    while (index < array.length) {
                        sum += array[index]; 
                        index++;
                    }
                    return sum;
                }
                return _whileSum(this);
            case Implementation.reduce: 
                function _reduceSum (array: number[]): number {
                    const sum: number = array.reduce((x, y) => x + y, 0);
                    return sum;
                }
                return _reduceSum(this); 
            case Implementation.superReduce:
                function _superReduceSum (array: number[]): number {
                    const sum: number = new SuperArray(...array)
                        .superReduce((x, y) => x + y, 0);
                    return sum;
                }
                return _superReduceSum(this); 
            case Implementation.recursive:
                function _recursiveSum (array: number[]): number {
                    return array.length === 0 
                        ? 0 
                        : array[0] + _recursiveSum(array.slice(1));
                }
                return _recursiveSum(this);
            default:
                function _tailRecursiveSum (
                    array: number[], 
                    sum  : number = 0
                ): number {
                    return array.length === 0
                        ? sum
                        : _tailRecursiveSum(array.slice(1), array[0] + sum);
                }
                return _tailRecursiveSum(this);
        }
    }
}