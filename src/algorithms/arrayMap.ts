interface IMapCallback {
    (x: any): any
};

enum Implementation {
    for           = 'for',
    while         = 'while',
    recursive     = 'recursive',
    tailRecursive = 'tailRecursive',
}

function _forMap (array: any[], callback: IMapCallback): any[] {
    const _array: any[] = [...array];
    for (let i = 0; i < array.length; i++) {
        _array[i] = callback(array[i]);
    }
    return _array;
}

function _whileMap (array: any[], callback: IMapCallback): any[] {
    let    index: number = 0;
    const _array: any[]  = [...array];
    while (index < array.length) {
        _array[index] = callback(array[index]); 
        index++;
    }
    return _array;
}

function _recursiveMap (array: any[], callback: IMapCallback): any[] {
    return array.length === 0
        ? []
        : [callback(array[0]), ..._recursiveMap(array.slice(1), callback)];
}

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

function map (
    array         : any[],
    callback      : IMapCallback,
    implementation: Implementation = Implementation.tailRecursive
): any[] {
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