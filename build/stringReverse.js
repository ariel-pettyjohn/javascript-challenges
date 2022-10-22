const { tailRecursiveReverse } = require('./arrayReverse');

function reverse (string) {
    const stringArray         = string.split('');
    const reversedStringArray = tailRecursiveReverse(stringArray);
    const reversedString      = reversedStringArray.join('');
    return reversedString;
}

module.exports = { reverse };