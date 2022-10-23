import isPalindrome from '../../build/algorithms/isPalindrome';

const tests = [
    [''       , true],
    ['foo'    , false],
    ['1234'   , false],
    ['ak o h' , false],
    ['&$)_)&$', false],
    ['racecar', true],
    ['1234321', true]
];

tests.forEach(([string, expectedValue]) => {
    const text = `of ${string} should be ${expectedValue}`;

    test(`isPalindrome ${text}`, () => {
        expect(isPalindrome(string)).toBe(expectedValue);
    });
});