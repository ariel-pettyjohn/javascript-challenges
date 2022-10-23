import { tailRecursiveArrayReverse } from "./arrayReverse";
export default function stringReverse(string) {
    const stringArray = string.split('');
    const reversedStringArray = tailRecursiveArrayReverse(stringArray);
    const reversedString = reversedStringArray.join('');
    return reversedString;
}
