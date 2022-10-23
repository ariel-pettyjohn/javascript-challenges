export function reverse(array) {
    if (array.length <= 1)
        return array;
    const head = array[array.length - 1];
    const tail = array.slice(0, -1);
    return [head, ...reverse(tail)];
}
export function tailRecursiveArrayReverse(array, result = []) {
    if (array.length <= 1)
        return array;
    const head = array[array.length - 1];
    const tail = array.slice(0, -1);
    return [head, ...tailRecursiveArrayReverse(tail, [head, ...result])];
}
