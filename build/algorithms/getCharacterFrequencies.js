function getCharacterFrequencies(string) {
    const _string = string.toLowerCase();
    const characterFrequencies = {};
    for (let i = 0; i < _string.length; i++) {
        characterFrequencies[_string[i]]
            ? characterFrequencies[_string[i]] += 1
            : characterFrequencies[_string[i]] = 1;
    }
    return characterFrequencies;
}
export default getCharacterFrequencies;
