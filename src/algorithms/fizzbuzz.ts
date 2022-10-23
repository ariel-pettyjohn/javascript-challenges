const { range: integerRange } = require('./range');

function fizzbuzz (n: number) {
    return integerRange(n, 1).map((i: number) => {
        if (i % 15 === 0) {
            return 'fizzbuzz';
        } else if (i % 3 === 0) {
            return 'fizz';
        } else if (i % 5 === 0) {
            return 'buzz';
        }
        return i;
    });
}

module.exports = { fizzbuzz };