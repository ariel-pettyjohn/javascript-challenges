import getCharacterFrequencies from '../../build/algorithms/getCharacterFrequencies';

const tests = [
    ['foo', { f: 1, o: 2 }],
    ['bar', { b: 1, a: 1, r: 1}],
    ['baz', { b: 1, a: 1, z: 1}]
];

tests.forEach(([string, frequencies]) => {
    const text = `of ${string} should equal ${frequencies}`;

    test(`getCharacterFrequencies ${text}`, () => {
        expect(getCharacterFrequencies(string)).toEqual(frequencies);
    });
});