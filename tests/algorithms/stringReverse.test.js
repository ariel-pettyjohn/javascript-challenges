const { reverse } = require('../../build/stringReverse');

const tests = [
    [''       , ''       ],
    ['foo'    , 'oof'    ],
    ['1234'   , '4321'   ],
    ['ak o h' , 'h o ka' ],
    ['&$)_)&$', '$&)_)$&']
];

tests.forEach(([string, expectedString]) => {
    const text = `of ${string} should equal ${expectedString}`;

    test(`reverse ${text}`, () => {
        expect(reverse(string)).toEqual(expectedString);
    });
});