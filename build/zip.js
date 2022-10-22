function zip() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var arrayLengths = arrays.map(function (array) { return array.length; });
    var minArrayLength = Math.min.apply(Math, arrayLengths);
    var zippedArrays = [];
    var _loop_1 = function (i) {
        var zippedArray = [];
        arrays.forEach(function (array) { return zippedArray.push(array[i]); });
        zippedArrays.push(zippedArray);
    };
    for (var i = 0; i < minArrayLength; i++) {
        _loop_1(i);
    }
    return zippedArrays;
}
module.exports = { zip: zip };
