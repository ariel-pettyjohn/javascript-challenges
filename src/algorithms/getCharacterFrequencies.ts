import ICharacterFrequencies from '../types/ICharacterFrequencies';

function getCharacterFrequencies (string: string): ICharacterFrequencies {
    const _string             : string                = string.toLowerCase();
    const characterFrequencies: ICharacterFrequencies = {};
    for (let i: number = 0; i < _string.length; i++) {
        characterFrequencies[_string[i]] 
            ? characterFrequencies[_string[i]] += 1 
            : characterFrequencies[_string[i]]  = 1;
    }
    return characterFrequencies;
}

export default getCharacterFrequencies;

