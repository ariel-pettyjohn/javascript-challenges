import { tailRecursiveArrayReverse } from "./arrayReverse";

export default function stringReverse (string: string): string {
    const stringArray        : string[] = string.split('');
    const reversedStringArray: string[] = tailRecursiveArrayReverse(stringArray);
    const reversedString     : string   = reversedStringArray.join('');
    return reversedString;
}