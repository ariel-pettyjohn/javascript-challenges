export default function zip (...arrays: any[][]): any[][] {
    const arrayLengths  :number[] = arrays.map((array) => array.length);
    const minArrayLength:number   = Math.min(...arrayLengths);
    const zippedArrays  : any[][] = [];
    for (let i = 0; i < minArrayLength; i++) {
        const zippedArray: any[] = [];
        arrays.forEach((array) => zippedArray.push(array[i]));
        zippedArrays.push(zippedArray);
    }
    return zippedArrays;
}