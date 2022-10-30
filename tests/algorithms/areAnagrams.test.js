import areAnagrams from '../../build/algorithms/areAnagrams';

const tests = [
    ['cat', 'act', true]
];

tests.forEach(([string1, string2, expectedValue]) => {
    const text = `of ${string1} and ${string2} should be ${expectedValue}`;

    test(`areAnagrams ${text}`, () => {
        expect(areAnagrams(string1, string2)).toBe(expectedValue);
    });
});