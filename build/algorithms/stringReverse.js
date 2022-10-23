import SuperArray from "../data-structures/SuperArray";
export default function stringReverse(string) {
    if (string === '')
        return '';
    const stringArray = string.split('');
    const superStringArray = new SuperArray(...stringArray);
    const reversedStringArray = superStringArray.superReverse();
    const reversedString = reversedStringArray.join('');
    return reversedString;
}
