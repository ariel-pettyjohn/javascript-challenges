const { stringReverse } = require('../../build/algorithms/stringReverse');

const tests = [
    [''       , ''       ],
    ['foo'    , 'oof'    ],
    ['1234'   , '4321'   ],
    ['ak o h' , 'h o ka' ],
    ['&$)_)&$', '$&)_)$&']
];

tests.forEach(([string, expectedString]) => {
    const text = `of ${string} should equal ${expectedString}`;

    test(`stringReverse ${text}`, () => {
        expect(stringReverse(string)).toEqual(expectedString);
    });
});