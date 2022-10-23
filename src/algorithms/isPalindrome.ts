import stringReverse from './stringReverse'; 

export default function isPalindrome (string: string): boolean {
    const reversedString: string = stringReverse(string);
    return string === reversedString;
}