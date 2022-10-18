const { forSum } = require('../arraySum');

const array = [1, 2, 3, 4, 5];

test('forSum of [1, 2, 3, 4, 5] should be 15', () => {
    expect(forSum(array)).toBe(15);
});