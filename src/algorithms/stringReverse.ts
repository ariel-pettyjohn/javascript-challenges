const { tailRecursiveArrayReverse: arrayReverse } = require('./arrayReverse');

function stringReverse (string: string): string {
    const stringArray        : string[] = string.split('');
    const reversedStringArray: string[] = arrayReverse(stringArray);
    const reversedString     : string   = reversedStringArray.join('');
    return reversedString;
}

module.exports = { stringReverse };