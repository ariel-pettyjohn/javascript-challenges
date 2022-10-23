interface IMapCallback {
    (x: any): any
};

enum Implementation {
    for           = 'for',
    while         = 'while',
    recursive     = 'recursive',
    tailRecursive = 'tailRecursive',
}

function forMap (array: any[], callback: IMapCallback): any[] {
    const _array: any[] = [...array];
    for (let i = 0; i < array.length; i++) {
        _array[i] = callback(array[i]);
    }
    return _array;
}

function whileMap (array: any[], callback: IMapCallback): any[] {
    let    index: number = 0;
    const _array: any[]  = [...array];
    while (index < array.length) {
        _array[index] = callback(array[index]); 
        index++;
    }
    return _array;
}

function recursiveMap (array: any[], callback: IMapCallback): any[] {
    return array.length === 0
        ? []
        : [callback(array[0]), ...recursiveMap(array.slice(1), callback)];
}

function tailRecursiveMap (
    array   : any[], 
    callback: IMapCallback, 
    result  : any[] = []
): any[] {
    return array.length === 0
        ? result
        : tailRecursiveMap(
            array.slice(1), 
            callback, 
            [...result, callback(array[0])]
        );
}

function map (
    array         : any[],
    callback      : IMapCallback,
    implementation: Implementation = Implementation.tailRecursive
): any[] {
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