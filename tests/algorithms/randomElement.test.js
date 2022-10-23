import Random from '../../build/algorithms/Random';

const tests = [
    [1, 2, 3, 4, 5],
    [1, 'a', 2, 'b', 3, 'c'],
    [{}, {}, {}, {}, {}, {}, {}, {}]
];

tests.forEach((array) => {
    const text = `should return an element from ${array}`;

    test(`randomElement ${text}`, () => {
        const randomElement = Random.element(array);
        expect(array).toContainEqual(randomElement);
    });
});