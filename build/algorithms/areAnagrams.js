import getCharacterFrequencies from './getCharacterFrequencies';
export default function areAnagrams(string1, string2) {
    const characterFrequencies1 = getCharacterFrequencies(string1);
    const characterFrequencies2 = getCharacterFrequencies(string2);
    return Object.keys(characterFrequencies1).every((character) => {
        const characterFrequency1 = characterFrequencies1[character];
        const characterFrequency2 = characterFrequencies2[character];
        return characterFrequency1 === characterFrequency2;
    });
}
