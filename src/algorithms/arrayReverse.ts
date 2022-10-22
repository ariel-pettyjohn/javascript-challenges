function reverse (array: any[]): any[] {
    if (array.length <= 1) return array;

    const head = array[array.length - 1];
    const tail = array.slice(0, -1);

    return [head, ...reverse(tail)];
}

function tailRecursiveArrayReverse (array: any[], result: any[] = []): any[] {
    if (array.length <=  1) return array;
    
    const head = array[array.length - 1];
    const tail = array.slice(0, -1);

    return [head, ...tailRecursiveArrayReverse(tail, [head, ...result])];
}

module.exports = { reverse, tailRecursiveArrayReverse };