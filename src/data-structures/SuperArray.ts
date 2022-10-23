interface IMapCallback {
    (x: any): any
};

enum Implementation {
    for           = 'for',
    while         = 'while',
    recursive     = 'recursive',
    tailRecursive = 'tailRecursive',
}

export default class SuperArray extends Array {
    private _forMap (callback: IMapCallback): any[] {
        const array: SuperArray = new SuperArray(...this);
        for (let i = 0; i < this.length; i++) {
            array[i] = callback(this[i]);
        }
        return array;
    }
    
    private _whileMap (callback: IMapCallback): any[] {
        let   index: number     = 0;
        const array: SuperArray = new SuperArray(...this);
        while (index < this.length) {
            array[index] = callback(this[index]); 
            index++;
        }
        return array;
    } 

    private _recursiveMap (callback: IMapCallback): any[] {
        return this.length === 0
            ? new SuperArray()
            : new SuperArray(...[
                callback(this[0]), 
                ...new SuperArray(...this.slice(1))._recursiveMap(callback)
            ]);
    }

    private _tailRecursiveMap (
        callback: IMapCallback, 
        result  : any[] = []
    ): any[] {
        return this.length === 0
            ? result
            : new SuperArray(...this.slice(1))._tailRecursiveMap(
                callback, 
                new SuperArray(...[...result, callback(this[0])])
            );
    }

    superMap (
        callback      : IMapCallback,
        implementation: Implementation = Implementation.tailRecursive
    ): any[] {
        switch (implementation) {
            case Implementation.for:
                return this._forMap(callback);
            case Implementation.while:
                return this._whileMap(callback);
            case Implementation.recursive:
                return this._recursiveMap(callback);
            default:
                return this._tailRecursiveMap(callback);
        }
    }
}

module.exports = SuperArray;