const Random = require('../../build/algorithms/Random');

const tests = [
    [ 0,  0],
    [ 1,  4],
    [ 2,  9],
    [10, 10]
];

tests.forEach(([min, max]) => {
    const text = `should be less than or equal to ${max} and greater than or equal to ${min}`;

    test(`randomInteger ${text}`, () => {
        const randomInteger = Random.integer(min, max);
        expect(randomInteger).toBeLessThanOrEqual(max);
        expect(randomInteger).toBeGreaterThanOrEqual(min);
    });
});