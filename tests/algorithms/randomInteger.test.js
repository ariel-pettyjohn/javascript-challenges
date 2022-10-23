import Random from '../../build/algorithms/Random';

const tests = [
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

tests.forEach(([min, max]) => {
    const text = `should be less than or equal to ${max} and greater than or equal to ${min}`;

    test(`randomInteger ${text}`, () => {
        const randomInteger = Random.integer(min, max);
        expect(randomInteger).toBeLessThanOrEqual(max);
        expect(randomInteger).toBeGreaterThanOrEqual(min);
    });
});