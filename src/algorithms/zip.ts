function zip (...arrays: any[][]): any[][] {
    const arrayLengths   = arrays.map((array) => array.length);
    const minArrayLength = Math.min(...arrayLengths);
    const zippedArrays: any[][] = [];
    for (let i = 0; i < minArrayLength; i++) {
        const zippedArray: any[] = [];
        arrays.forEach((array) => zippedArray.push(array[i]));
        zippedArrays.push(zippedArray);
    }
    return zippedArrays;
}

module.exports = { zip };