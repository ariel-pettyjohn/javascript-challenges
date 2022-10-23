import SuperArray from "../data-structures/SuperArray";

export default function stringReverse (string: string): string {
    if (string === '') return '';
    const stringArray        : string[]   = string.split('');
    const superStringArray   : SuperArray = new SuperArray(...stringArray);
    const reversedStringArray: string[]   = superStringArray.superReverse();
    const reversedString     : string     = reversedStringArray.join('');
    return reversedString;
}