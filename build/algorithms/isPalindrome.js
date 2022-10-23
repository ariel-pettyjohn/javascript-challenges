import stringReverse from './stringReverse';
export default function isPalindrome(string) {
    const reversedString = stringReverse(string);
    return string === reversedString;
}
