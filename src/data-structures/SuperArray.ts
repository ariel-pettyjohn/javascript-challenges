import { IMapCallback, IReduceCallback } from '../interfaces';

import { Implementation } from '../enums';

export default class SuperArray extends Array<any> {
    private static _forMap (array: any[], callback: IMapCallback): any[] {
        const _array: any[] = [...array];
        for (let i = 0; i < array.length; i++) {
            _array[i] = callback(array[i]);
        }
        return _array;
    }
    
    private static _whileMap (array: any[], callback: IMapCallback): any[] {
        let    index: number = 0;
        const _array: any[]  = [...array];
        while (index < array.length) {
            _array[index] = callback(array[index]); 
            index++;
        }
        return _array;
    }

    private static _recursiveMap (array: any[], callback: IMapCallback): any[] {
        return array.length === 0
            ? []
            : [
                callback(array[0]), 
                ...SuperArray._recursiveMap(array.slice(1), callback)
            ];
    }
    
    private static _tailRecursiveMap (
        array   : any[], 
        callback: IMapCallback, 
        result  : any[] = []
    ): any[] {
        return array.length === 0
            ? result
            : SuperArray._tailRecursiveMap(
                array.slice(1), 
                callback, 
                [...result, callback(array[0])]
            );
    }

    private static _tailRecursiveReduce (
        array       : any[], 
        callback    : IReduceCallback, 
        initialValue: any
    ): any {
        if      (array.length === 0) return initialValue;
        else if (array.length === 1) return array[0];
        return SuperArray._tailRecursiveReduce(
            [callback(array[0], array[1]), ...array.slice(2)], 
            callback,
            initialValue
        );
    }

    private static _recursiveReverse (array: any[]): any[] {
        if (array.length <= 1) return array;
        const head: any   = array[array.length - 1];
        const tail: any[] = array.slice(0, -1);
        return [head, ...SuperArray._recursiveReverse(tail)];
    }
    
    private static _tailRecursiveReverse (
        array : any[], 
        result: any[] = []
    ): any[] {
        if (array.length <=  1) return array;
        const head: any   = array[array.length - 1];
        const tail: any[] = array.slice(0, -1);
        return [
            head, 
            ...SuperArray._tailRecursiveReverse(tail, [head, ...result])
        ];
    }

    private static _forSum (array: number[]): number {
        let sum: number = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
    
    private static _whileSum (array: number[]): number {
        let index: number = 0; 
        let sum  : number = 0;
        while (index < array.length) {
            sum += array[index]; 
            index++;
        }
        return sum;
    }
    
    private static _reduceSum (array: number[]): number {
        const sum: number = array.reduce((x, y) => x + y, 0);
        return sum;
    }
    
    private static _superReduceSum (array: number[]): number {
        const sum: number = new SuperArray(...array)
            .superReduce((x, y) => x + y, 0);
        return sum;
    }
    
    private static _recursiveSum (array: number[]): number {
        return array.length === 0 
            ? 0 
            : array[0] + SuperArray._recursiveSum(array.slice(1));
    }
    
    private static _tailRecursiveSum (
        array: number[], 
        sum  : number = 0
    ): number {
        return array.length === 0
            ? sum
            : SuperArray._tailRecursiveSum(array.slice(1), array[0] + sum);
    }

    static range (n: number, offset: number = 0): number[] {
        if (n === 1) return [offset];
        const array: number[] = [...Array(n).keys()];
        return offset 
            ? new SuperArray(...array).superMap((key) => key + offset)
            : new SuperArray(...array);
    }

    superMap (
        callback      : IMapCallback,
        implementation: Implementation = Implementation.tailRecursive
    ): any[] {
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

    superReduce (
        callback    : IReduceCallback, 
        initialValue: any
    ): any {
        return SuperArray._tailRecursiveReduce(this, callback, initialValue);
    }

    superReverse (
        implementation: Implementation = Implementation.tailRecursive
    ): any {
        switch (implementation) {
            case Implementation.recursive:
                return SuperArray._recursiveReverse(this);
            default:
                return SuperArray._tailRecursiveReverse(this);
        }
    }

    superSum (
        implementation: Implementation = Implementation.tailRecursive
    ): number {
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