import fizzbuzz from '../../build/algorithms/fizzbuzz';

const tests = [
    [15, [
        1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 
        'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'
    ]]
];

tests.forEach(([input, expectedOutput]) => {
    const text = `of ${input} should equal ${expectedOutput}`;

    test(`fizzbuzz ${text}`, () => {
        expect(fizzbuzz(input)).toEqual(expectedOutput);
    });
});