const { tailRecursiveArrayReverse: arrayReverse } = require('./arrayReverse');
function stringReverse(string) {
    const stringArray = string.split('');
    const reversedStringArray = arrayReverse(stringArray);
    const reversedString = reversedStringArray.join('');
    return reversedString;
}
module.exports = { stringReverse };
