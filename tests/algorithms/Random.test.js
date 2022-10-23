import Random from '../../build/algorithms/Random';

export const ALPHABET = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const randomIntegerTests = [
    [  0,    0],
    [  1,    4],
    [  2,    9],
    [  3,   17],
    [ 10,   10],
    [  1,  100],
    [100, 1000],
    [ 10,  500],
    [232,  546],
    [657,  864]
];

const randomElementTests = [
    [1, 2, 3, 4, 5],
    [1, 'a', 2, 'b', 3, 'c'],
    [{}, {}, {}, {}, {}, {}, {}, {}]
];

randomIntegerTests.forEach(([min, max]) => {
    const text = `should be less than or equal to ${max} and greater than or equal to ${min}`;

    test(`Random.integer ${text}`, () => {
        const randomInteger = Random.integer(min, max);
        expect(randomInteger).toBeLessThanOrEqual(max);
        expect(randomInteger).toBeGreaterThanOrEqual(min);
    });
});

randomElementTests.forEach((array) => {
    const text = `should return an element from ${array}`;

    test(`Random.element ${text}`, () => {
        const randomElement = Random.element(array);
        expect(array).toContainEqual(randomElement);
    });
});

for (let i = 1; i <= 10; i++) {
    const text = `should return an letter from ${ALPHABET}`;

    test(`Random.letter ${text}`, () => {
        const randomElement = Random.letter();
        expect(ALPHABET).toContain(randomElement);
    });
}