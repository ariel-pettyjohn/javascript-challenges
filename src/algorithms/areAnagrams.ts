import { ICharacterFrequencies } from '../interfaces';

import getCharacterFrequencies from './getCharacterFrequencies';

export default function areAnagrams (
    string1: string, 
    string2: string
): boolean {
    const characterFrequencies1: ICharacterFrequencies 
        = getCharacterFrequencies(string1);
    const characterFrequencies2: ICharacterFrequencies 
        = getCharacterFrequencies(string2);
    return Object.keys(characterFrequencies1).every((character) => {
        const characterFrequency1: number = characterFrequencies1[character];
        const characterFrequency2: number = characterFrequencies2[character]
        return characterFrequency1 === characterFrequency2;
    })
}