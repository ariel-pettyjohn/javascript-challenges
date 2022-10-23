const { stringReverse: reverseString } = require('./stringReverse');
function isPalindrome(string) {
    const reversedString = reverseString(string);
    return string === reversedString;
}
module.exports = { isPalindrome };
