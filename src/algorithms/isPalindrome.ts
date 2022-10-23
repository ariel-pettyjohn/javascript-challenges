const { stringReverse: reverseString } = require('./stringReverse');

function isPalindrome (string: string): boolean {
    const reversedString: string = reverseString(string);
    return string === reversedString;
}

module.exports = { isPalindrome };