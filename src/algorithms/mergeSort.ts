interface IMergeSortCallback {
    (x: any, y: any): boolean;
}

function mergeSort (array: any[], callback: IMergeSortCallback): any[] {
    function merge (
        left    : any[], 
        right   : any[], 
        callback: IMergeSortCallback, 
        array   : any[] = []
    ): any[] {
        if (!left.length || !right.length) {
            return [...array, ...left, ...right];
        } else if (callback(left[0], right[0])) {
            return merge(left.slice(1), right, callback, [...array, left[0]]);
        }
        return merge(left, right.slice(1), callback, [...array, right[0]]);
    }
    if (array.length < 2) return array;
    const half : number = array.length / 2;
    const left : any[]  = array.slice(0, half);
    const right: any[]  = array.slice(half);
    return merge(
        mergeSort(left, callback), 
        mergeSort(right, callback), 
        callback
    );
}

export default mergeSort;