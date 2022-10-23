function mergeSort(array, callback) {
    function merge(left, right, callback, array = []) {
        if (!left.length || !right.length) {
            return [...array, ...left, ...right];
        }
        else if (callback(left[0], right[0])) {
            return merge(left.slice(1), right, callback, [...array, left[0]]);
        }
        return merge(left, right.slice(1), callback, [...array, right[0]]);
    }
    if (array.length < 2)
        return array;
    const half = array.length / 2;
    const left = array.slice(0, half);
    const right = array.slice(half);
    return merge(mergeSort(left, callback), mergeSort(right, callback), callback);
}
export default mergeSort;
