interface IMapCallback {
    (x: any): any
};

function forMap (array: any[], callback: IMapCallback): any[] {
    const _array = [...array];
    for (let i = 0; i < array.length; i++) {
        _array[i] = callback(array[i]);
    }
    return _array;
}

function whileMap (array: any[], callback: IMapCallback): any[] {
    let    index = 0;
    const _array = [...array];
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

module.exports = { forMap, whileMap, recursiveMap, tailRecursiveMap };