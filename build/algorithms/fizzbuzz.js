const { range: integerRange } = require('./range');
function fizzbuzz(n) {
    return integerRange(n, 1).map((i) => {
        if (i % 15 === 0) {
            return 'fizzbuzz';
        }
        else if (i % 3 === 0) {
            return 'fizz';
        }
        else if (i % 5 === 0) {
            return 'buzz';
        }
        return i;
    });
}
module.exports = { fizzbuzz };
